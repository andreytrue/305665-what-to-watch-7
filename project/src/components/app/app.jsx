import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Film from '../films/film';
import Player from '../player/player';
import Review from '../review/review';
import {AppRoute} from '../src/const';

function App(props) {
  const {film} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <WelcomeScreen
            film={film}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList/>
        </Route>
        <Route path="/films/:id" exact component={Film} />
        <Route path="/films/:id/review" exact component={Review} />
        <Route path="/player/:id" exact component={Player} />
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
};

export default App;
