import React from 'react';
import './PokemonInfo.css';
function PokemonInfo({ pokemon }) {
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
          <div
            key={type.slot}
            className='pokemon-type'
            style={{ backgroundColor: typeColors[type.type.name] }}
          >
            {type.type.name}
          </div>
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
