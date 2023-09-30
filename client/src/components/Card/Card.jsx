import React from 'react';
import style from './Card.module.css';

/**Este componente debe mostrar la informacion de cada pokemon
 * mapeado y un link para ir al detalle de cada pokemon
 */
const Card = (props) => {
  const { id, name, hp} = props;
  return (
    <div className={style.card}>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>HP: {hp}</p>
    </div>
  )
}

export default Card
