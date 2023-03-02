import React from 'react';
import './PokemonList.css';
function PokemonList({ pokemonList, setSelectedPokemon }) {
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
              <div key={index} className='pokemon-type'>
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
