import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import { useHistory } from 'react-router-dom';

/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to '/'
 *
 * Routes -> LoginForm
 * Routed as /login
 */

function LoginPage({ login }) {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || username === '';

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginConfig = {
        username,
        password
      }
      await login(loginConfig);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setUsername('');
      setPassword('');
      setError(error.message);
    }
  }

  useEffect(() => {
    document.title = 'Login - CryptoX';
  }, []);

  return (
    <div className="container mx-auto mt-x-lg max-w-screen-md items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border  border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="CryptoX" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />

            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <button 
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8font-bold
              ${isInvalid && 'opacity-50'}`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">Don't have an account? {` `}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
