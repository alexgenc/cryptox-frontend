import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import CryptoXApi from '../../api/api';
import UserContext from '../../auth/UserContext';
import { PortfolioContext } from "../../context/PortfolioContext";
import './PortfolioCoin.css';


const PortfolioCoin = ({ coin }) => {
  const { currentUser } = useContext(UserContext);
  const { deleteCoin } = useContext(PortfolioContext);
  const username = currentUser.username;
  const change24h = coin.price_change_percentage_24h.toFixed(2);
  const [quantity, setQuantity] = useState([]);
  const totalValue = (coin.current_price * quantity).toLocaleString();
  const coinName = coin.name.toLowerCase();

  useEffect(() => {
    async function getPortfolio() {
      let res = await CryptoXApi.getSpecificCurrencyForUser(username, coinName);

      if(res.length > 0) {
        setQuantity(res[0].quantity);
      }
    }
    getPortfolio();
  }, [coinName, username]);

  return (
    <tr>                    
      <td>
        <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
          <img className="coinlist-image" src={coin.image} alt="" />
        </Link>
      </td>
      <td>
        <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
          {coin.name}
        </Link>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td style={{color: change24h > 0 ? '#4BB543' : '#FF0000' }}>{change24h}%</td>
      <td>{quantity}</td>
      <td>${totalValue}</td>
      <td 
        onClick={(e) => {
                  e.preventDefault();
                  deleteCoin(coinName);
                  CryptoXApi.deleteCurrency(username, coinName);
                }}
      >
        <DeleteIcon className="removeButton" />
      </td>
    </tr>
  )
};

export default PortfolioCoin;