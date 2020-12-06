import React from 'react';

import { Link } from 'react-router-dom';

const Favorites = (props) => {
  return (
    <>
      <h4>Favorites</h4>
      {props.user && <h5>{props.user.name}</h5>}
      {props.user && props.user.favorites && (
        <>
          {props.user.favorites.map((favorite, key) => {
            return (
              <div className="favorites-wrapper">
                <Link
                  to={`/crypto/${favorite.currency.asset_id_base}`}
                >
                  <h4>{favorite.currency.asset_id_base}</h4>
                </Link>
              </div>
            )
          })}
        </>
      )}
    </>
  )
}

export default Favorites;
