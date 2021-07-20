import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Film from '../films/film';
import filmProp from '../films/films.prop';
import Player from '../player/player';
import Review from '../review/review';
import LoadingScreen from '../loading-screen/loading-screen';
import { PrivateRoute } from '../private-route/private-route';
import {AppRoute} from '../src/const';
import { isCheckedAuth } from '../src/common';
import browserHistory from '../../browser-history';

function App(props) {
  const {authorizationStatus, isDataLoaded, selectedFilm} = props;

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

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  selectedFilm: PropTypes.shape(filmProp),
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  selectedFilm: state.selectedFilm,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
