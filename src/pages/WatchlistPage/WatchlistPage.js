import React from 'react';
import CoinWatchlistForm from '../../components/CoinWatchlistForm/CoinWatchlistForm';
import CoinWatchlist from '../../components/CoinWatchlist/CoinWatchlist';
import './WatchlistPage.css';

const WatchlistPage = () => {
  return (
    <>
      <h1>My Watchlist</h1>
      <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
        <CoinWatchlistForm />
        <CoinWatchlist />
      </div>
    </>
  )
}

export default WatchlistPage;