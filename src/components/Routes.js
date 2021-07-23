import React, { lazy, Suspense, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext'
import * as ROUTES from '../constants/Routes';
import PrivateRoute from '../helpers/PrivateRoute';
import IsUserLoggedIn from '../helpers/IsUserLoggedIn';

// Lazy load pages for better performance
const HomePage = lazy(() => import ('../pages/HomePage'));
const WatchlistPage = lazy(() => import ('../pages/WatchlistPage'));
const PortfolioPage = lazy(() => import ('../pages/PortfolioPage'));
const CoinDetailPage = lazy(() => import ('../pages/CoinDetailPage'));
const ProfilePage = lazy(() => import ('../pages/ProfilePage'));
const LoginPage = lazy(() => import ('../pages/LoginPage'));
const SignupPage = lazy(() => import ('../pages/SignupPage'));


/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *  
 * Logged in users shouldn't be able to visit login and signup pages. This is accomplished by wrapping these routes in <IsUserLoggedIn>, which is an authorization component.
 * 
 * Visiting a non-existant route redirects to the homepage.
 */
const Routes = ({ login, signup }) => {

  const { currentUser } = useContext(UserContext)

  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Switch>

        <Route exact path ="/">
          <HomePage />
        </Route>

        <IsUserLoggedIn 
          exact path={ROUTES.SIGN_UP} 
          loggedInPath={ROUTES.DASHBOARD} 
          user={currentUser}
        >
          <SignupPage signup={signup} />
        </IsUserLoggedIn>

        <IsUserLoggedIn 
          exact path={ROUTES.LOGIN} 
          loggedInPath={ROUTES.DASHBOARD} 
          user={currentUser}
        >
          <LoginPage login={login} />
        </IsUserLoggedIn>

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
    </Suspense>
  )
}

export default Routes;