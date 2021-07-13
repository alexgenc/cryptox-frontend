import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import './WatchlistCoin.css';

const WatchlistCoin = ({ coin, deleteCoin }) => {
  
  const change24h = coin.price_change_percentage_24h.toFixed(2);

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
      <td 
        onClick={(e) => {
                  e.preventDefault();
                  deleteCoin(coin.id);
                }}
      >
        <DeleteIcon className="removeButton"/>
      </td>
    </tr>
  )
};

export default WatchlistCoin;