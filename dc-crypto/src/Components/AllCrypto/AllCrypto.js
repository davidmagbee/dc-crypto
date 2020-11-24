import React from 'react';
import { getAllStocks } from '../../services/api-helper';

const AllCrypto = () => {

  const getAllData = async() => {
    const data = await getAllStocks();
  }
  getAllData();
  return (
    <>
      <h4>All Crypto</h4>
    </>
  )
}

export default AllCrypto;
