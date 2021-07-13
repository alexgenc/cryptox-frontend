import React from 'react';
import { Link } from 'react-router-dom';

const Currency = ({id, symbol, name, price, change24h, change7d, marketCap, volume24h, circulatingSupply, slug}) => {
 
  const factoredPrice = price.toLocaleString();
  const factoredMarketCap = marketCap.toLocaleString();
  const factoredVolume24h = volume24h.toLocaleString();
  const factoredCirculatingSupply = circulatingSupply.toLocaleString();
  const location = {
    pathname: `/coins/${slug}`, 
    state: {
      id: id
    }
  }

  return (
    <tr>
      <td><Link to={location}>{symbol}</Link></td>
      <td>{name}</td>
      <td>${factoredPrice}</td>
      <td style={{color: change24h > 0 ? '#4BB543' : '#FF0000' }}>{change24h.toFixed(2)}%</td>
      <td style={{color: change7d > 0 ? '#4BB543' : '#FF0000' }}>{change7d.toFixed(2)}%</td>
      <td>${factoredMarketCap}</td>
      <td>${factoredVolume24h}</td>
      <td>{factoredCirculatingSupply}</td>
    </tr>
  )
}

export default Currency;