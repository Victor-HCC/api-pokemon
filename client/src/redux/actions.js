import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON = 'GET_POKEMON';

export const getPokemons = () => {
  return async function(dispatch) {
    const serverData = await axios.get('http://localhost:3001/pokemons');

    const pokemons = serverData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons })
  };
};

export const getPokemon = (id) => {
  return async function(dispatch) {
    const serverData = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const pokemon = serverData.data;
    dispatch({ type: GET_POKEMON, payload: pokemon})
  }
}
