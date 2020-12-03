import React from 'react';
import { Link } from 'react-router-dom';
import './IndividualCryptoItem.css';

const IndividualCryptoItem = (props) => {
  return (
    <div className="item-wrapper">
      <Link
        to={`/crypto/${props.currency.asset_id_base}`}
      >
        <h4>{props.currency.asset_id_base}</h4>
      </Link>
    </div>
  )
}

export default IndividualCryptoItem;
