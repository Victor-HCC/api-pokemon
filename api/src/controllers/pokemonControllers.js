const { Pokemon, Type } = require('../db');
const axios = require('axios');


const cleanArray = async (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input is not an array.');
  }

  if (arr.length === 0) {
    return []; // Return an empty array if input is empty.
  }

  try {
    const apiPokemons = arr.map(elem => {
      const { id, name, stats, height, weight, sprites, types } = elem;
      const image = sprites.other["dream_world"].front_default;
      const hp = stats[0].base_stat;
      const attack = stats[1].base_stat;
      const defense = stats[2].base_stat;
      const speed = stats[5].base_stat;
      const pokemonTypes = types.map(typeData => typeData.type.name);

      return { id, name, hp, attack, defense, speed, height, weight, image, type: pokemonTypes, created: false };
    });

    return apiPokemons;
  } catch (error) {
    throw new Error(`Error cleaning array: ${error.message}`);
  }
}

const cleanData = (obj) => {
  const { id, name, stats, height, weight, sprites, types } = obj;
  const image = sprites.other["dream_world"].front_default;
  const hp = stats[0].base_stat;
  const attack = stats[1].base_stat;
  const defense = stats[2].base_stat;
  const speed = stats[5].base_stat;
  const pokemonTypes = types.map(typeData => typeData.type.name);

  return { id, name, hp, attack, defense, speed, height, weight, image, type: pokemonTypes, created: false };
}

const dbDataClean = (arr) => {
  const result = arr.map(pokemon => {
    const typeNames = pokemon.Types.map(type => type.name);
    const { Types, ...pokemonWithoutTypes } = pokemon.toJSON();  //Para separar la propiedad Types ya que tiene otro formato
    return {
      ...pokemonWithoutTypes,
      type: typeNames,
    };
  });

  return result;
} 



const createPokemon = async (name, image, hp, attack, defense, speed, height, weight) => {
  const newPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, height, weight});
  return newPokemon;
}

const getPokemonById = async (id, source) => {
  const pokemon = 
    source === 'API' 
      ? cleanData((await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
          .data)
      : await Pokemon.findByPk(id);

  return pokemon;
}

const getAllPokemons = async () => {
  //buscar en la db
  const dbPokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const modifiedPokemons = dbDataClean(dbPokemons);
  
  //buscar en la api
  // const apiPokemonsRaw = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1281')).data.results;
  const apiPokemonsRaw = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')).data.results;
  const apiPokemonsClean = await Promise.all(apiPokemonsRaw.map(async elem => (await axios.get(elem.url)).data));

  const apiPokemons = await cleanArray(apiPokemonsClean);

  //unificar la respuesta
  const results = [...modifiedPokemons, ...apiPokemons];

  return results;
}

const searchPokemonByName = async (name) => {
  // https://pokeapi.co/api/v2/pokemon/{name}
  //En la db
  const dbPokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: { attributes: [] },
    },
    where: {
      name: name, // Filter by name
    },
  });

  const dbPokemonsclean = dbDataClean(dbPokemons);
  
  //En la API
  // const apiPokemonsRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
  // const apiPokemons = [cleanData(apiPokemonsRaw)];

  const apiPokemonsRaw = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')).data.results;
  const apiPokemonsClean = await Promise.all(apiPokemonsRaw.map(async elem => (await axios.get(elem.url)).data));
  const apiPokemons = await cleanArray(apiPokemonsClean);
  const filtered = apiPokemons.filter(pokemon => pokemon.name === name)


  const results = [...dbPokemonsclean, ...filtered];
  return results;

}

module.exports = { createPokemon, getPokemonById, getAllPokemons, searchPokemonByName }