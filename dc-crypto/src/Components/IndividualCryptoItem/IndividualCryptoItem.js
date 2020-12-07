import React from 'react';
import { Link } from 'react-router-dom';
import './IndividualCryptoItem.css';

const IndividualCryptoItem = (props) => {
  return (
    <div className="item-wrapper">
      {props.currency && (
        <>
          <Link to={`/crypto/${props.currency}`}>
            <h4>{props.currency}</h4>
          </Link>
          {!props.favorites.includes(props.currency) &&
            <button
              onClick={() => props.addFavorite(props.currency)}
            >Add Favorite</button>
          }
        </>      
      )}
    </div>
  )
}

export default IndividualCryptoItem;
