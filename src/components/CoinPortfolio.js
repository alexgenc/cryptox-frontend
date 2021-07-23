import React, { useState, useEffect, useContext } from 'react';
import coinGecko from '../services/coinGecko';
import PortfolioContext from "../context/PortfolioContext";
import PortfolioCoin from "./PortfolioCoin";
import Table from 'react-bootstrap/Table';
import CryptoXApi from '../services/api';
import UserContext from '../context/UserContext';

const CoinPortfolio = () => {

  const [coins, setCoins] = useState([]);
  const { currentUser } = useContext(UserContext);
  
  const { portfolio, deleteCoinFromPortfolio } = useContext(PortfolioContext);

  const [portfolioTotal, setPortfolioTotal] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if(portfolio.length > 0) {
        const response = await coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: portfolio.join(",")
          },
        });
        setCoins(response.data);
      }
    };

    if (portfolio.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [portfolio]);

  const renderCoins = () => {
    return (
      <tbody className="tableBody">
        {coins.map((coin) => {
          return <PortfolioCoin key={coin.id} coin={coin} deleteCoin={deleteCoinFromPortfolio} />;
        })}
      </tbody>
    );
  };

  useEffect(() => {
    const calculatePortfolioTotal = async () => {
      let total = 0;
      
      if(portfolio.length) {
        for (let coin of portfolio) {
          let resQ = await CryptoXApi.getSpecificCurrencyForUser(currentUser.username, coin);
          
          let resP = await coinGecko.get("/coins/markets/", {
            params: {
              vs_currency: "usd",
              ids: coin,
            },
          });
          
          if(resP && resQ) {
            let value = (resP.data[0].current_price) * (resQ[0].quantity);
            total += value;
          } else {
            total = 0;
          }
        }
      }
    
      return total;
    }  
    
    async function getData() {
        let portfolioTotal = await calculatePortfolioTotal();
        setPortfolioTotal(portfolioTotal)
    }
    getData();
    
  }, [currentUser.username, portfolio]);

  return (
    <div className="mb-x-lg mx-2x-lg mt-11">
      <Table hover variant="dark" size="sm" className="border-solid border-4 border-gray-500 font-bold">
        <thead>
          <tr className="leading-extra-loose text-sm">
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Quantity</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
         {renderCoins()}
      </Table>
      
      <p className="text-3xl mt-4">Your total portfolio value is: ${portfolioTotal.toLocaleString()}</p>
    </div>
  )
}

export default CoinPortfolio;