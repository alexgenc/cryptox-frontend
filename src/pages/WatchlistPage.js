import React, { useEffect } from 'react';
import CoinWatchlistForm from '../components/CoinWatchlistForm';
import CoinWatchlist from '../components/CoinWatchlist';

const WatchlistPage = () => {
  
  useEffect(() => {
    document.title = 'CryptoX - My Watchlist';
  }, []);
  
  return (
    <>
      <h1 className="font-bold text-4xl mt-5 mb-5">My Watchlist</h1>
      <div>
        <CoinWatchlistForm />
        <CoinWatchlist />
      </div>
    </>
  )
}

export default WatchlistPage;