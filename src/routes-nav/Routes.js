import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


import HomePage from '../pages/HomePage/HomePage';
import WatchlistPage from '../pages/WatchlistPage/WatchlistPage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage';
import CoinDetailPage from '../pages/CoinDetailPage/CoinDetailPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';



/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */
const Routes = ({ login, signup }) => {

  return (
    <Switch>

      <Route exact path ="/">
        <HomePage />
      </Route>
      
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>

      <PrivateRoute exact path="/my-watchlist">
        <WatchlistPage />
      </PrivateRoute>

      <PrivateRoute exact path="/my-portfolio">
        <PortfolioPage />
      </PrivateRoute>

      <PrivateRoute exact path="/coins/:id">
        <CoinDetailPage />
      </PrivateRoute>

      <PrivateRoute exact path="/my-profile">
        <ProfilePage />
      </PrivateRoute>

      <Redirect to ="/" />
    </Switch>
  )
}

export default Routes;