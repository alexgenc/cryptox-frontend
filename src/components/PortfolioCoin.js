import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import CryptoXApi from '../services/api';
import UserContext from '../context/UserContext';

const PortfolioCoin = ({ coin, deleteCoin, portfolio }) => {
  const { currentUser } = useContext(UserContext);
  const username = currentUser.username;
  const [quantity, setQuantity] = useState([]);
  const change24h = coin.price_change_percentage_24h.toFixed(2);
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
    <tr className="leading-extra-loose text-sm">                    
      <td>
        <Link to={`/coins/${coin.id}`} className="text-decoration-none text-center">
          <img className="w-14 mx-auto my-2" src={coin.image} alt="" />
        </Link>
      </td>
      <td className="text-yellow-500">
        <Link to={`/coins/${coin.id}`} className="text-decoration-none">
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
        <DeleteIcon className="hover:text-red-700 cursor-pointer" />
      </td>
    </tr>
  )
};

export default PortfolioCoin;