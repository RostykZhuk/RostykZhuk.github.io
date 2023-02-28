import React from 'react';

function PokemonList({ pokemonList, setSelectedPokemon }) {
  console.log(pokemonList);
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <div
          key={index}
          onClick={() =>
            setSelectedPokemon({
              ...pokemon,
              id: index + 1,
            })
          }
        >
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
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
