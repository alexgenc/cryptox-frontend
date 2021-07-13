import React, { useState, useEffect } from 'react';
import Navigation from './routes-nav/Navigation';
import Routes from './routes-nav/Routes';
import './App.css';
import CryptoXApi from './api/api';
import jwt from "jsonwebtoken";
import UserContext from "./auth/UserContext";
import useLocalStorage from './hooks/useLocalStorage';
import { WatchListContextProvider } from './context/WatchListContext';
import { PortfolioContextProvider } from './context/PortfolioContext';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "CryptoX-token";

/** CryptoX application.
 *
 *
 * - currentUser: user obj from API. This becomes the canonical way to tell if someone is logged in. This is passed around via context throughout app.
 *
 * - token: for logged in users, this is their authentication JWT. Is required to be set for most API calls. This is initially read from localStorage and synced to there via the useLocalStorage hook.
 *
 * App -> Routes
 */

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  // Load user info from API. Until a user is logged in and they have a token, this should not run. It only needs to re-run when a user logs out, so the value of the token is a dependency for this effect.
  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          CryptoXApi.token = token;
          let currentUser = await CryptoXApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token])

   /** Handles site-wide login.
   *
   * Make sure you await this function and check its return value!
   */
  async function login(loginData) {
    try {
      let token = await CryptoXApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

   /** Handles site-wide signup.
   *
   * Automatically logs them in (set token) upon signup.
   *
   * Make sure you await this function and check its return value!
   */
  async function signup(signupData) {
    try {
      let token = await CryptoXApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles site-wide logout. */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser}}>
      <WatchListContextProvider>
        <PortfolioContextProvider>
          <div className="App">
            <Navigation logout={logout} />
            <Routes login={login} signup={signup} />
          </div>
        </PortfolioContextProvider>
      </WatchListContextProvider>
    </UserContext.Provider>
  );
}

export default App;
