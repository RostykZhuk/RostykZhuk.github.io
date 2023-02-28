import React from 'react';

function PokemonCard({ pokemon, onClick }) {
  return (
    <div onClick={() => onClick(pokemon)}>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
      </div>
      <div>{pokemon.name}</div>
      <div>
        {pokemon.types.map((type) => (
          <div key={type.slot}>{type.type.name}</div>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
