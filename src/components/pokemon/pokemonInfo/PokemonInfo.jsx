import React from 'react';
import './PokemonInfo.css';
function PokemonInfo({ pokemon }) {
  // const a = pokemon.stats.map((stat) => console.log(stat.stat.name));
  // const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  // console.log(imageUrl); // Log the URL to the console
  // ...

  return (
    <div className='pokemon-info'>
      <div className='pokemon-image'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
      </div>
      <div className='pokemon-name'>{pokemon.name}</div>
      <div className='pokemon-types'>
        {pokemon.types.map((type) => (
          <div key={type.slot}>{type.type.name}</div>
        ))}
      </div>
      <div className='pokemon-stats'>
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} className='stat-row'>
            <div className='stat-name'>{stat.stat.name}</div>
            <div className='stat-value'>{stat.base_stat}</div>
          </div>
        ))}
        <div className='stat-row'>
          <div className='stat-name'> weight:</div>
          <div className='stat-value'>{pokemon.weight}</div>
        </div>
        <div className='stat-row'>
          <div className='stat-name'> total moves:</div>
          <div className='stat-value'>{pokemon.moves}</div>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfo;
