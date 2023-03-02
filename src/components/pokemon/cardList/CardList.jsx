import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../pokemonList/PokemonList';
import LoadMoreButton from '../btn/LoadMoreButton';
import PokemonInfo from '../pokemonInfo/PokemonInfo';
import './CardList.css';

function CardList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedType, setSelectedType] = useState(''); // Add state for selected type
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonDataList = await Promise.all(
          response.data.results.map(async (pokemon, index) => {
            const pokemonResponse = await axios.get(pokemon.url);
            console.log(`Pokemon ${index + 1}:`, pokemonResponse.data);

            return {
              ...pokemon,
              id: index + 1,
              types: pokemonResponse.data.types,
              stats: pokemonResponse.data.stats,
              weight: pokemonResponse.data.weight,
              moves: pokemonResponse.data.moves.length - 1,
            };
          })
        );
        console.log('Pokemon list:', pokemonDataList);
        setPokemonList(pokemonDataList);
        setNextPageUrl(response.data.next);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  async function loadMore() {
    try {
      const response = await axios.get(nextPageUrl);
      const startIndex = pokemonList.length;
      const pokemonDataList = await Promise.all(
        response.data.results.map(async (pokemon, index) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            ...pokemon,
            id: startIndex + index + 1,
            types: pokemonResponse.data.types,
            stats: pokemonResponse.data.stats,
            weight: pokemonResponse.data.weight,
            moves: pokemonResponse.data.moves.length - 1,
          };
        })
      );
      setPokemonList((prevPokemonList) => [
        ...prevPokemonList,
        ...pokemonDataList,
      ]);
      setNextPageUrl(response.data.next);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredPokemonList = selectedType
    ? pokemonList.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name === selectedType)
      )
    : pokemonList;

  function handleTypeSelect(type) {
    setSelectedType(type);
    setSelectedPokemon(null);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className='title-container'>
        <h1 className='title'>Pokedex</h1>
      </div>
      <div className='filter-buttons-container'>
        <span style={{ marginRight: '8px' }}>Filter by type:</span>
        <button className='filter-button' onClick={() => handleTypeSelect('')}>
          All
        </button>
        <button
          className='filter-button'
          onClick={() => handleTypeSelect('fire')}
        >
          Fire
        </button>
        <button
          className='filter-button'
          onClick={() => handleTypeSelect('water')}
        >
          Water
        </button>
        <button
          className='filter-button'
          onClick={() => handleTypeSelect('ground')}
        >
          Ground
        </button>
        <button
          className='filter-button'
          onClick={() => handleTypeSelect('bug')}
        >
          Bug
        </button>
        <button
          className='filter-button'
          onClick={() => handleTypeSelect('grass')}
        >
          Grass
        </button>
      </div>

      <PokemonList
        pokemonList={filteredPokemonList}
        setSelectedPokemon={setSelectedPokemon}
        selectedType={selectedType}
      />
      <LoadMoreButton nextPageUrl={nextPageUrl} loadMore={loadMore} />
      {selectedPokemon && <PokemonInfo pokemon={selectedPokemon} />}
    </div>
  );
}

export default CardList;
