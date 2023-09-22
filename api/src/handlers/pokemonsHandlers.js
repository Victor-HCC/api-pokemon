const { createPokemon, getPokemonById } = require('../controllers/pokemonControllers');
const { createOrRetrieveType } = require('../controllers/typeControllers');

const getPokemonsHandler = (req, res) => {
  const { name } = req.query;
  //llamar a la funcion que obtiene los datos de la DB
  //llamar a luna funcion que obtenga los datos de la API
  //unir los datos unificando el formato
  //cuando tenga los datos responder con los mismos
  if(name) res.send(`NIY: trae pokemons con nombre ${name}`);
  else res.send('NIY: Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.');
}

const getPokemonByIdHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? 'DB' : 'API'; //para saber en que fuente buscar la información
  
  try {
    const pokemon = await getPokemonById(id, source);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const createPokemonHandler = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;
    const newPokemon = await createPokemon(name, image, hp, attack, defense, speed, height, weight); //Crea un pokemon en la db
    const typeRecords = await Promise.all(types.map(typeName => createOrRetrieveType(typeName))); //se obtenen los tipos, si no existe en la db lo crea

    await newPokemon.addTypes(typeRecords); //crea la realcion del pokemon con los tipos

    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message});
  }
  

}

module.exports = {
  getPokemonsHandler,
  getPokemonByIdHandler,
  createPokemonHandler
}