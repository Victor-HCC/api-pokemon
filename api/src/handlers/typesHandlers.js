const { saveTypesApi, getDbTypes } = require('../controllers/typeControllers');

const getTypesHandler = async (req, res) => {
  await saveTypesApi();
  setTimeout( async () => {
    const results = await getDbTypes();
    res.status(200).json(results);
  }, 1);
  
}

module.exports = { getTypesHandler }