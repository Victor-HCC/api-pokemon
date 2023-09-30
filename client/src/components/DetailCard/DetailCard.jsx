import React from 'react';
import style from './DetailCard.module.css';

/**Este componente debe mostrar la informacion detallada de cada pokemon
 */

const DetailCard = (props) => {
  const { id, name, hp} = props;
  return (
    <div>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>HP: {hp}</p>
    </div>
  )
}

export default DetailCard;
