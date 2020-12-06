import React from 'react';
import { Link } from 'react-router-dom';

import IndividualCryptoItem from '../IndividualCryptoItem/IndividualCryptoItem';

const Favorites = (props) => {
  return (
    <>
      <h4>Favorites</h4>
      {props.user && <h5>{props.user.name}</h5>}
      {props.user && props.user.favorites && (
        <>
          {props.user.favorites.map((favorite, key) => {
            return (
              <IndividualCryptoItem
                currency={favorite}
                key={key}
              />
            )
        })}
        </>
      )}
    </>
  )
}

export default Favorites;
