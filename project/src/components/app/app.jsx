import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';
import { connect } from 'react-redux';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Film from '../films/film';
import Player from '../player/player';
import Review from '../review/review';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from '../src/const';

function App(props) {
  const {films, isDataLoaded} = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <WelcomeScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film films={films} />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <Review />
        </Route>
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
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
