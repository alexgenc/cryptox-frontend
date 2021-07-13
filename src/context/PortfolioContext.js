import React, { createContext, useState, useEffect, useContext } from "react";
import CryptoXApi from '../api/api';
import UserContext from '../auth/UserContext';

export const PortfolioContext = createContext();


export const PortfolioContextProvider = (props) => {
  const userPortfolio = [];
  const [data, setData] = useState([]);
  
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if(currentUser) {
      async function getPortfolio() {
        let res = await CryptoXApi.getPortfolioForUser(currentUser.username);
        setData(res);
      }
      getPortfolio();
    }
    
  }, [currentUser]);
  
  for(let d of data) {
    userPortfolio.push(d.cryptocurrency);
  }

  const [portfolio, setPortfolio] = useState(
    localStorage.getItem("portfolio")?.split(",") 
  );
  

  useEffect(() => {
    localStorage.setItem("portfolio", userPortfolio);
  }, [userPortfolio]);

  const deleteCoin = (coin) => {
    setPortfolio(
      portfolio.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (portfolio.indexOf(coin) === -1) {
      setPortfolio([...portfolio, coin]);
    }
  };

  return (
    <PortfolioContext.Provider value={{ portfolio, deleteCoin, addCoin }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};