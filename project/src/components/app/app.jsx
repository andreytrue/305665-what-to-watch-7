import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Film from '../films/film';
import filmProp from '../films/films.prop';
import Player from '../player/player';
import Review from '../review/review';
import reviewProp from '../review/reviews.prop';
import {AppRoute} from '../src/const';

function App(props) {
  const {film, films, reviews} = props;

  const {firstFilm} = films;

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
        <Route exact path={AppRoute.FILM}>
          <Film
            film={firstFilm}
          />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <Review
            reviews={reviews}
          />
        </Route>
        <Route path={AppRoute.PLAYER} exact component={Player} />
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
  films: PropTypes.oneOfType([filmProp]).isRequired,
  reviews: PropTypes.oneOfType([reviewProp]).isRequired,
};

export default App;
