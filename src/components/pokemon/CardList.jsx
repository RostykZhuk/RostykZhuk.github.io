import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import LoadMoreButton from './LoadMoreButton';
import PokemonInfo from './PokemonInfo';

function CardList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonDataList = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return {
              ...pokemon,
              types: pokemonResponse.data.types,
              stats: pokemonResponse.data.stats,
            };
          })
        );
        setPokemonList(pokemonDataList);
        setNextPageUrl(response.data.next);
        setIsLoading(false); // Set the loading state to false when the component is loaded
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  async function loadMore() {
    try {
      const response = await axios.get(nextPageUrl);
      const pokemonDataList = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            ...pokemon,
            types: pokemonResponse.data.types,
            stats: pokemonResponse.data.stats,
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

  if (isLoading) {
    return <h1>Loading...</h1>; // Return a loading title if the component is still loading
  }

  return (
    <div>
      <PokemonList
        pokemonList={pokemonList}
        setSelectedPokemon={setSelectedPokemon}
      />
      <LoadMoreButton nextPageUrl={nextPageUrl} loadMore={loadMore} />
      {selectedPokemon && <PokemonInfo pokemon={selectedPokemon} />}
    </div>
  );
}

export default CardList;
