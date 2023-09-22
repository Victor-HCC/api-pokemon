const { Pokemon } = require('../db');
const axios = require('axios');

const createPokemon = async (name, image, hp, attack, defense, speed, height, weight, types) => {
  const newPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, height, weight});
  return newPokemon;
}

const getPokemonById = async (id, source) => {
  const pokemon = 
    source === 'API' 
      ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
          .data
      : await Pokemon.findByPk(id);

  return pokemon;
}



module.exports = { createPokemon, getPokemonById }