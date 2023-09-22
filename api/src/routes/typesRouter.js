const { Router } = require('express');

const typesRouter = Router();

typesRouter.get('/', (req, res) => {
  res.send('Obtiene un arreglo con todos los tipos de pokemones.');
})

module.exports = typesRouter;