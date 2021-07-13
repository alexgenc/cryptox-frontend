import React from 'react';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import './HomePage.css';

const HomePage = () => {
  return (
  <>
    <h1>Today's Cryptocurrency Prices by CryptoX</h1>
    <CurrencyTable />
  </>
  )
}

export default HomePage;