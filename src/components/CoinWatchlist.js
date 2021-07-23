import React, { useState, useEffect, useContext } from 'react';
import coinGecko from '../services/coinGecko';
import WatchlistContext from "../context/WatchlistContext";
import WatchlistCoin from "./WatchlistCoin";
import Table from 'react-bootstrap/Table';

const CoinWatchlist = () => {

  const [coins, setCoins] = useState([]);
  const { watchlist, deleteCoinFromWatchlist } = useContext(WatchlistContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchlist.join(","),
        },
      });
      setCoins(response.data);
    };

    if (watchlist.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchlist]);

  const renderCoins = () => {
    return (
      <tbody>
        {coins.map((coin) => {
          return <WatchlistCoin key={coin.id} coin={coin} deleteCoin={deleteCoinFromWatchlist} />;
        })}
      </tbody>
    );
  };

  return (
    <div className="mb-x-lg mx-2x-lg mt-11">
      <Table hover variant="dark" size="sm" className="border-solid border-4 border-gray-500 font-bold">
        <thead>
          <tr className="leading-extra-loose text-sm">
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