import React, { useState, useEffect } from 'react';
import IndividualCryptoItem from '../IndividualCryptoItem/IndividualCryptoItem';

import { getAllStocks, getAllExchanges } from '../../services/api-helper';

const AllCrypto = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllStocks();
        setCurrencies(data);
      } catch(e) { console.log(e) }
    }
    fetchData();
  }, [])

  return (
    <>
      {currencies ?
        currencies.map((currency, idx) => {
          return (
            <IndividualCryptoItem currency={currency} key={idx} />
          )
        })
        :
        <p>Currencies coming soon!</p>
      }
    </>
  )
}

export default AllCrypto;
