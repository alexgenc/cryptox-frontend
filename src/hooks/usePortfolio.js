import { useState, useEffect } from 'react'
import CryptoXApi from '../services/api';
import useUser from './useUser';

const usePortfolio = () => {

  const { currentUser } = useUser();
  
  useEffect(() => {

    const userPortfolio = [];

    if(currentUser) {
      async function getPortfolio() {
        let portfolioCoins = await CryptoXApi.getPortfolioForUser(currentUser.username);
         
        for (let coin of portfolioCoins) {
          userPortfolio.push(coin.cryptocurrency);
        }

        localStorage.setItem("portfolio", userPortfolio);
      }
      getPortfolio();
    } 
  }, [currentUser]);

  const [portfolio, setPortfolio] = useState(
    localStorage.getItem("portfolio") ? localStorage.getItem("portfolio")?.split(",") : []
  );

  const deleteCoinFromPortfolio = (coin) => {
    
    const updatedArr = portfolio.filter((el) => {
      return el !== coin;
    })

    setPortfolio(updatedArr);
    localStorage.setItem("portfolio", updatedArr);
  };

  const addCoinToPortfolio = (coin) => {
    if (portfolio.indexOf(coin) === -1) {
      const updatedArr = [...portfolio, coin];
      setPortfolio(updatedArr);
      localStorage.setItem("portfolio", updatedArr);
    }
  };
  
  return { portfolio, setPortfolio, deleteCoinFromPortfolio, addCoinToPortfolio }
}

export default usePortfolio;
