import React, { useState, useEffect } from 'react';
import IndividualCryptoItem from '../IndividualCryptoItem/IndividualCryptoItem';

import { getAllStocks, getAllExchanges } from '../../services/api-helper';
import './AllCrypto.css';

const AllCrypto = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllStocks();
        /**
         * Quick and dirty object filter
         * We use the uniqueCrypto object to hold
         * key value pairs of the asset_id_base values
         * that we've already encountered.
         * So, either we don't find the asset_id_base in the
         * uniqueCrypto object in which case we return it
         * and add it to the uniqueCrypto object, or we do
         * find it and we move on to the next key value pair.
        */
        let uniqueCrypto = {};
        const filteredCrypto = data.filter(obj =>
            !uniqueCrypto[obj.asset_id_base]
              && (uniqueCrypto[obj.asset_id_base] = true))
        setCurrencies(filteredCrypto);
      } catch(e) { console.error(e) }
    }
    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      {currencies ?
        currencies.map((currency, idx) => {
          return (
            <IndividualCryptoItem
              currency={currency}
              key={idx}
            />
          )
        })
        :
        <p>Currencies coming soon!</p>
      }
    </div>
  )
}

export default AllCrypto;
