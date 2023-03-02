import React from 'react';
import './PokemonList.css';
function PokemonList({ pokemonList, setSelectedPokemon }) {
  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  return (
    <div className='pokemon-list'>
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          className='pokemon-card'
          onClick={() =>
            setSelectedPokemon({
              ...pokemon,
            })
          }
        >
          <div className='pokemon-image'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </div>
          <div className='pokemon-name'>{pokemon.name}</div>
          <div className='pokemon-types'>
            {pokemon.types.map((type, index) => (
              <div
                key={index}
                className='pokemon-type'
                style={{ backgroundColor: typeColors[type.type.name] }}
              >
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
