import React from 'react';

function PokemonList({ pokemonList, setSelectedPokemon }) {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          onClick={() =>
            setSelectedPokemon({
              ...pokemon,
            })
          }
        >
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </div>
          <div>{pokemon.name}</div>
          <div>
            {pokemon.types.map((type, index) => (
              <div key={index}>{type.type.name}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
