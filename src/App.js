import React from 'react';
import useUser from './hooks/useUser';
import useWatchlist from './hooks/useWatchlist';
import usePortfolio from './hooks/usePortfolio';
import UserContext from "./context/UserContext";
import WatchlistContext from './context/WatchlistContext';
import PortfolioContext from './context/PortfolioContext';
import Header from './components/Header';
import Routes from './components/Routes';
import './App.css';

const App = () => {

  const { currentUser, setCurrentUser, signup, login, logout } = useUser();
  const { watchlist, setWatchlist, deleteCoinFromWatchlist, addCoinToWatchlist } = useWatchlist();
  const { portfolio, setPortfolio, deleteCoinFromPortfolio, addCoinToPortfolio } = usePortfolio();
  
  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser }}
    >
      <WatchlistContext.Provider
        value={{ watchlist, setWatchlist, deleteCoinFromWatchlist, addCoinToWatchlist }}
      >
        <PortfolioContext.Provider
          value={{ portfolio, setPortfolio, deleteCoinFromPortfolio, addCoinToPortfolio }}
        >
          <>
            <Header logout={logout} />
            <Routes login={login} signup={signup} />
          </>
        </PortfolioContext.Provider>
      </WatchlistContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
