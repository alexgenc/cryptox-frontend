import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';

const WatchlistCoin = ({ coin, deleteCoin }) => {
  
  const change24h = coin.price_change_percentage_24h.toFixed(2);

  return (
    <tr className="leading-extra-loose text-sm">                    
      <td>
        <Link to={`/coins/${coin.id}`} className="text-decoration-nonen">
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
      <td 
        onClick={(e) => {
                  e.preventDefault();
                  deleteCoin(coin.id);
                }}
      >
        <DeleteIcon className="hover:text-red-700 cursor-pointer"/>
      </td>
    </tr>
  )
};

export default WatchlistCoin;