import React, { useState, useEffect, useContext, useRef } from 'react';
import coinGecko from '../../api/coinGecko';
import { PortfolioContext } from "../../context/PortfolioContext";
import PortfolioCoin from "../PortfolioCoin/PortfolioCoin";
import './CoinPortfolio.css';
import Table from 'react-bootstrap/Table';

const CoinPortfolio = () => {

  const [coins, setCoins] = useState([]);
  
  const ref = useRef({
    total: 0
  });
  
  const { portfolio } = useContext(PortfolioContext);

  const [isLoading, setIsLoading] = useState(true);

  const [portfolioTotal, setPortfolioTotal] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: portfolio.join(","),
        },
      });
      setCoins(response.data);
    };

    if (portfolio.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [portfolio]);

  const renderCoins = () => {
    return (
      <tbody className="tableBody">
        {coins.map((coin) => {
          return <PortfolioCoin key={coin.id} coin={coin} />;
        })}
      </tbody>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const tableBody = document.querySelector('.tableBody');
      for (let i of tableBody.rows) {
        const valueCell = i.getElementsByTagName("td")[5];
        const value = valueCell.innerHTML.replace("$", "");
        const formatValue = value.replace(",", "");
        ref.current.total += +formatValue;
      }
      setIsLoading(false);  
    }, 500)
    return () => {                     
      clearTimeout(timer)
    }
  }, [ref, portfolio])

  useEffect(() => {
    if(isLoading) return 'Loading Portfolio Value';
    setPortfolioTotal(ref.current.total.toLocaleString())
  }, [isLoading, ref.current.total])

  return (
    <div className="parent-div coinlist list-group mt-2">
      <Table hover variant="dark" size="sm">
        <thead>
          <tr>
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
      
      <p className="portfolioValue">Your total portfolio value is: {portfolioTotal}</p>
    </div>
  )
}

export default CoinPortfolio;