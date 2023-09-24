const { Type } = require('../db');
const axios = require('axios');

const cleanArray = (arr) => {
  
  const apiPokemons = arr.map(elem => {
    // const { id, name } = elem;
    const { name } = elem;

    return { name, created: false };
  });

  return apiPokemons;
}

const dbDataClean = (arr) => {
  const result = arr.map(type => {
    return type.name;
  });

  return result;
} 


const saveTypesApi = async () => {
  const empty = await Type.count();
  if(empty === 0) { // La tabla esta vacia, se pueden guardar los datos
    
    //buscar en la api
    const apiTypesRaw = (await axios.get('https://pokeapi.co/api/v2/type')).data.results;
    const apiTypesClean = await Promise.all(apiTypesRaw.map(async elem => (await axios.get(elem.url)).data));

    const apiTypes = cleanArray(apiTypesClean);

    apiTypes.forEach(async (obj) => {
      await Type.create(obj);
    });
  } else {
    // The table is not empty
    console.log('Table is not empty');
  }
  
  // return apiTypes;

}

const getDbTypes = async () => {
  //buscar en la db
  const dbTypes = await Type.findAll();
  const dbTypesClean = dbDataClean(dbTypes);
  return dbTypesClean;
}


const createOrRetrieveType = async (typeName) => {
  // Try to find an existing type record with the given name
  const existingType = await Type.findOne({ where: { name: typeName } });

  // If it exists, return it; otherwise, create a new one
  if (existingType) {
    return existingType;
  } else {
    return Type.create({ name: typeName });
  }
}


module.exports = { createOrRetrieveType, saveTypesApi, getDbTypes }