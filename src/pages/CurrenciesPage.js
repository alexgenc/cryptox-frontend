import React, { useEffect } from 'react';
import CurrencyTable from '../components/CurrencyTable';

const HomePage = () => {
  
  useEffect(() => {
    document.title = 'CryptoX - Cryptocurrencies';
  }, []);
  
  return (
    <>
      <h1 className="font-bold text-4xl mt-5">Today's Cryptocurrency Prices by CryptoX</h1>
      <CurrencyTable />
    </>
  )
}

export default HomePage;