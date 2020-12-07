import React from 'react';
import { Link } from 'react-router-dom';

import IndividualCryptoItem from '../IndividualCryptoItem/IndividualCryptoItem';

const Favorites = (props) => {
  return (
    <>
      <div className="crypto-container">
        {props.user && props.favorites && (
          <>
            {props.favorites.map((favorite, key) => {
              return (
                <IndividualCryptoItem
                  currency={favorite}
                  key={key}
                  favorites={props.favorites}
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
