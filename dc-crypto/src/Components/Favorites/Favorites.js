import React from 'react';
import { Link } from 'react-router-dom';

import IndividualCryptoItem from '../IndividualCryptoItem/IndividualCryptoItem';

const Favorites = (props) => {
  return (
    <>
      <div className="crypto-container">
        {props.user && props.user.favorites && (
          <>
            {props.user.favorites.map((favorite, key) => {
              return (
                <IndividualCryptoItem
                  currency={favorite}
                  key={key}
                  favorites={props.user.favorites}
                />
              )
          })}
          </>
        )}
      </div>
    </>
  )
}

export default Favorites;
