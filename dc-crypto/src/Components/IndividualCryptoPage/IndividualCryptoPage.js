import React, { useState, useEffect } from 'react';
import { getOneStock } from '../../services/api-helper';

const IndividualCryptoPage = (props) => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getOneStock(props.id);
        setQuote(data);
      } catch(e) { console.log(e) }
    }
    fetchData();
  }, [props.id]);

  return (
    <>
      {quote.data
        ?
          <div>
            <p>{quote.data[0].asset_id}</p>
            {quote.data[0].asset_id !== "USD" &&
              <p>Price in USD: {quote.data[0].price_usd}</p>
            }
            {quote.data[0].type_is_crypto
              ? <p>Is crypto</p>
              : <p>Is not crypto</p>}
            <button
              onClick={() => props.addFavorite(props.id)}
            >Add Favorite</button>
          </div>
        : <p>Data coming soon</p>
      }
    </>
  )
}

export default IndividualCryptoPage;
