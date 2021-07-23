import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Film from '../films/film';
import Player from '../player/player';
import Review from '../review/review';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../src/const';
import { isCheckedAuth } from '../src/common';
import browserHistory from '../../browser-history';

import { getSelectedFilm, getDataLoadedStatus } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const selectedFilm = useSelector(getSelectedFilm);
  const isDataLoaded = useSelector(getDataLoadedStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={ browserHistory }>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <WelcomeScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <Film authorizationStatus={authorizationStatus} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          authorizationStatus={authorizationStatus}
          render={() => <Review selectedFilm={selectedFilm} />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
