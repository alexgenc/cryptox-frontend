import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> SignupForm
 * Routed as /signup
 */

function SignupPage({ signup }) {
  
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '' || username === '' || firstName === '' || lastName === '';


  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const signupConfig = {
        username,
        password,
        firstName,
        lastName,
        email : emailAddress
      }
      await signup(signupConfig);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setUsername('');
      setFirstName('');
      setLastName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  }

  useEffect(() => {
    document.title = 'Sign Up - CryptoX';
  }, []);

  return (
    <div className="container mx-auto mt-x-lg max-w-screen-md items-center h-screen">
      <div>
        <div className="flex flex-col items-center bg-white p-4 border  border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="CryptoX" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSignup} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            
            <input
              aria-label="Enter your first name"
              type="text"
              placeholder="First Name"
              className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <input
              aria-label="Enter your last name"
              type="text"
              placeholder="Last Name"
              className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />

            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email Address"
              className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
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
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">Have an account? {` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;