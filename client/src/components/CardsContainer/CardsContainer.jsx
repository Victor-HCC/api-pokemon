import React from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';

/**Este componente debe tomar un array de pokemones y por cada uno 
 * renderizar un componente Card
 */
const CardsContainer = () => {

  // const pokemons = [
  //   {
  //     "id": "4efcaef9-9d9c-46c8-a567-15f15dc704ef",
  //     "name": "pikapi",
  //     "hp": 150,
  //     "attack": 60,
  //     "defense": 50,
  //     "speed": 30,
  //     "height": 2,
  //     "weight": 1,
  //     "image": "drtheth364y6ryht.jpg",
  //     "created": true,
  //     "type": [
  //         "fire",
  //         "rock"
  //     ]
  //   },
  //   {
  //     "id": "65a5dac7-0e01-411c-97ca-5de175c435d8",
  //     "name": "pika",
  //     "hp": 200,
  //     "attack": 70,
  //     "defense": 60,
  //     "speed": 100,
  //     "height": 3,
  //     "weight": 3,
  //     "image": "hdhdfthrft456.jpg",
  //     "created": true,
  //     "type": [
  //         "electric",
  //         "shadow"
  //     ]
  //   },
  //   {
  //     "id": "099a26e7-1498-401d-9e57-ee8fb4377c89",
  //     "name": "pikapika",
  //     "hp": 100,
  //     "attack": 40,
  //     "defense": 30,
  //     "speed": 80,
  //     "height": 4,
  //     "weight": 2,
  //     "image": "dfhtryue3456.jpg",
  //     "created": true,
  //     "type": [
  //         "dark",
  //         "grass"
  //     ]
  //   },
  //   {
  //     "id": 1,
  //     "name": "bulbasaur",
  //     "hp": 45,
  //     "attack": 49,
  //     "defense": 49,
  //     "speed": 45,
  //     "height": 7,
  //     "weight": 69,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  //     "type": [
  //         "grass",
  //         "poison"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 2,
  //     "name": "ivysaur",
  //     "hp": 60,
  //     "attack": 62,
  //     "defense": 63,
  //     "speed": 60,
  //     "height": 10,
  //     "weight": 130,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
  //     "type": [
  //         "grass",
  //         "poison"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 3,
  //     "name": "venusaur",
  //     "hp": 80,
  //     "attack": 82,
  //     "defense": 83,
  //     "speed": 80,
  //     "height": 20,
  //     "weight": 1000,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
  //     "type": [
  //         "grass",
  //         "poison"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 4,
  //     "name": "charmander",
  //     "hp": 39,
  //     "attack": 52,
  //     "defense": 43,
  //     "speed": 65,
  //     "height": 6,
  //     "weight": 85,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
  //     "type": [
  //         "fire"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 5,
  //     "name": "charmeleon",
  //     "hp": 58,
  //     "attack": 64,
  //     "defense": 58,
  //     "speed": 80,
  //     "height": 11,
  //     "weight": 190,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
  //     "type": [
  //         "fire"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 6,
  //     "name": "charizard",
  //     "hp": 78,
  //     "attack": 84,
  //     "defense": 78,
  //     "speed": 100,
  //     "height": 17,
  //     "weight": 905,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
  //     "type": [
  //         "fire",
  //         "flying"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 7,
  //     "name": "squirtle",
  //     "hp": 44,
  //     "attack": 48,
  //     "defense": 65,
  //     "speed": 43,
  //     "height": 5,
  //     "weight": 90,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
  //     "type": [
  //         "water"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 8,
  //     "name": "wartortle",
  //     "hp": 59,
  //     "attack": 63,
  //     "defense": 80,
  //     "speed": 58,
  //     "height": 10,
  //     "weight": 225,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
  //     "type": [
  //         "water"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 9,
  //     "name": "blastoise",
  //     "hp": 79,
  //     "attack": 83,
  //     "defense": 100,
  //     "speed": 78,
  //     "height": 16,
  //     "weight": 855,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
  //     "type": [
  //         "water"
  //     ],
  //     "created": false
  //   },
  //   {
  //     "id": 10,
  //     "name": "caterpie",
  //     "hp": 45,
  //     "attack": 30,
  //     "defense": 35,
  //     "speed": 45,
  //     "height": 3,
  //     "weight": 29,
  //     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
  //     "type": [
  //         "bug"
  //     ],
  //     "created": false
  //   }
  // ]

  const pokemons = useSelector(state => state.pokemons);

  return (
    <div className={style.container}>
      {pokemons.map(pokemon => {
        return <Card 
          id={pokemon.id}
          name={pokemon.name}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          height={pokemon.height}
          weight={pokemon.weight}
          image={pokemon.image}
          type={pokemon.type}
        />
      })}
    </div>
  )
}

export default CardsContainer
