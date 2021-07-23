import { useState, useEffect } from 'react'

const useWatchlist = () => {
  
  const [watchlist, setWatchlist] = useState(
    localStorage.getItem("watchlist")?.split(",") || [
      "bitcoin",
      "ethereum",
      "ripple",
      "litecoin",
    ]
  );

  useEffect(() => {
    localStorage.setItem("watchlist", watchlist);
  }, [watchlist]);

  const deleteCoinFromWatchlist = (coin) => {
    setWatchlist(
      watchlist.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoinToWatchlist = (coin) => {
    if (watchlist.indexOf(coin) === -1) {
      setWatchlist([...watchlist, coin]);
    }
  };
  
  return { watchlist, setWatchlist, deleteCoinFromWatchlist, addCoinToWatchlist }
}

export default useWatchlist;
