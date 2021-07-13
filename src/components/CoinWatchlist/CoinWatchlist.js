import React, { useState, useEffect, useContext } from 'react';
import coinGecko from '../../api/coinGecko';
import { WatchListContext } from "../../context/WatchListContext";
import WatchlistCoin from "../WatchlistCoin/WatchlistCoin";
import './CoinWatchlist.css';
import Table from 'react-bootstrap/Table';

const CoinWatchlist = () => {

  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    return (
      <tbody>
        {coins.map((coin) => {
          return <WatchlistCoin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
      </tbody>
    );
  };

  return (
    <div className="parent-div coinlist list-group mt-2">
      <Table hover variant="dark" size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th></th>
          </tr>
        </thead>
          {renderCoins()}
      </Table>
    </div>
  )
}

export default CoinWatchlist;