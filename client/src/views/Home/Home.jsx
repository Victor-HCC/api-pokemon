import React from 'react'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions';

const Home = () => {

  //cuando se monta, que haga el dispatch
  //  useEfect()   -    useDispatch()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch])


  return (
    <div>
      <h1>Vista de Home</h1>
      <CardsContainer />
    </div>
  )
}

export default Home;
