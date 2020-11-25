import React from 'react';
import { Link } from 'react-router-dom';

const IndividualCryptoItem = (props) => {
  return (
    <>
      <Link
        to={`/crypto/${props.currency.asset_id_quote}`}
      >
        <h4>{props.currency.asset_id_quote}</h4>
      </Link>
    </>
  )
}

export default IndividualCryptoItem;
