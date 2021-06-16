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
  const {films, reviews, videoUrl} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <WelcomeScreen
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <Review
            films={films}
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player
            videoUrl={videoUrl}
          />
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProp)).isRequired,
  videoUrl: PropTypes.string.isRequired,
};

export default App;
