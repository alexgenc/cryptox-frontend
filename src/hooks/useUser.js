import { useState, useEffect } from 'react';
import CryptoXApi from '../services/api';
import useLocalStorage from '../hooks/useLocalStorage';
import jwt from "jsonwebtoken";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "CryptoX-token";

const useUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [infoLoaded, setInfoLoaded] = useState(false);

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
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
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

  return { currentUser, setCurrentUser, infoLoaded, signup, login, logout }
}

export default useUser;
