import React, { useEffect } from 'react';
import CoinPortfolioForm from '../components/CoinPortfolioForm';
import CoinPortfolio from '../components/CoinPortfolio';

const PortfolioPage = () => {
  
  useEffect(() => {
    document.title = 'CryptoX - My Portfolio';
  }, []);
  
  return (
    <>
      <h1 className="font-bold text-4xl mt-5 mb-5 text-center">My Portfolio</h1>
      <div>
        <CoinPortfolioForm />
        <CoinPortfolio />
      </div>
    </>
  )
}

export default PortfolioPage;