import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {useParams, Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';
import filmProp from './films.prop';
import reviewsProp from '../review/reviews.prop';
import FilmsList from '../films-list/films-list';
import {FILMS_RECOMMENDATION_MAX} from '../const/const';

import { connect } from 'react-redux';
import GuestHeader from '../headers/guest-header';
import UserHeader from '../headers/user-header';
import { userIsAuth } from '../src/common';
import { fetchReviews, fetchSelectedFilm, fetchSimilarFilms } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function Film({ authorizationStatus, selectedFilm, getSelectedFilm, isSelectedFilmLoaded, similarFilms, getSimilarFilms, reviews, getReviews, isReviewLoaded }) {
  const {id} = useParams();

  useEffect(() => {
    getSelectedFilm(id);
    getSimilarFilms(id);
    getReviews(id);
  }, [getSelectedFilm, getSimilarFilms, getReviews, id]);

  const {name,
    posterImage,
    backgroundImage,
    genre,
    released,
  } = selectedFilm;

  if (!isSelectedFilmLoaded && !isReviewLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const recommendedFilms = similarFilms.slice(0, FILMS_RECOMMENDATION_MAX);

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          {userIsAuth(authorizationStatus)
            ? <UserHeader />
            : <GuestHeader />}

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {userIsAuth(authorizationStatus)
                  ? <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt="poster" width="218" height="327" />
            </div>

            {isSelectedFilmLoaded && isReviewLoaded
              ? <Tabs film={selectedFilm} reviews={ reviews }/>
              : ''}
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={recommendedFilms} genre={genre}/>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

Film.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  selectedFilm: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
  similarFilms: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
  getSelectedFilm: PropTypes.func.isRequired,
  isSelectedFilmLoaded: PropTypes.bool.isRequired,
  getSimilarFilms: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsProp)).isRequired,
  getReviews: PropTypes.func.isRequired,
  isReviewLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isSelectedFilmLoaded: state.isSelectedFilmLoaded,
  selectedFilm: state.selectedFilm,
  similarFilms: state.similarFilms,
  reviews: state.reviews,
  isReviewLoaded: state.isReviewLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedFilm(id) {
    dispatch(fetchSelectedFilm(id));
  },
  getSimilarFilms(id) {
    dispatch(fetchSimilarFilms(id));
  },
  getReviews(id) {
    dispatch(fetchReviews(id));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
