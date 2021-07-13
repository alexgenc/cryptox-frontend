import React from 'react';
import CoinPortfolioForm from '../../components/CoinPortfolioForm/CoinPortfolioForm';
import CoinPortfolio from '../../components/CoinPortfolio/CoinPortfolio';
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <>
    <h1>My Portfolio</h1>
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <CoinPortfolioForm />
      <CoinPortfolio />
    </div>
    </>
  )
}

export default PortfolioPage;