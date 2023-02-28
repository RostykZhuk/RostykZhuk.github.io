import React from 'react';

function PokemonInfo({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  console.log(imageUrl); // Log the URL to the console
  // ...

  return (
    <div>
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
      <div>
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name}>
            <div>
              {stat.stat.name} {stat.base_stat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonInfo;
