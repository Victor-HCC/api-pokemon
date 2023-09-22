const { Type } = require('../db');


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


module.exports = { createOrRetrieveType }