import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../../redux/actions';
import DetailCard from '../../components/DetailCard/DetailCard';
import { useSelector } from 'react-redux';

const Detail = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(1));
  }, [dispatch])

  const pokemon = useSelector(state => state.pokemon);

  return (
    <div>
      <div>Vista de Detail</div>
      <DetailCard 
        id={pokemon.id}
        name={pokemon.name}
        hp={pokemon.hp}
      />
    </div>
  )
}

export default Detail
