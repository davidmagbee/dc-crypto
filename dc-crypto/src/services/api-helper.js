import axios from 'axios';

const api = axios.create({
  baseURL: `https://rest-sandbox.coinapi.io`,
  headers: {
    'X-CoinAPI-Key': process.env.REACT_APP_API_KEY
  }
})

export const getAllStocks = async () => {
  try {
    const resp = await api.get(`/v1/exchangerate/BTC`);
    console.log(resp);
  } catch(e) { console.log(e) }
}
