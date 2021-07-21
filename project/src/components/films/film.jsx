import React, { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';
import FilmsList from '../films-list/films-list';
import {FILMS_RECOMMENDATION_MAX} from '../const/const';

import { useSelector, useDispatch } from 'react-redux';
import GuestHeader from '../headers/guest-header';
import UserHeader from '../headers/user-header';
import { userIsAuth } from '../src/common';
import { fetchReviews, fetchSelectedFilm, fetchSimilarFilms } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

import { getAuthorizationStatus } from '../../store/user/selectors';
import { getSelectedFilm, getSelectedFilmStatus, getSimilarFilms } from '../../store/films-data/selectors';
import { getReviews, getReviewsStatus } from '../../store/reviews-data/selectors';

function Film() {
  const {id} = useParams();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const selectedFilm = useSelector(getSelectedFilm);
  const isSelectedFilmLoaded = useSelector(getSelectedFilmStatus);
  const similarFilms = useSelector(getSimilarFilms);
  const reviews = useSelector(getReviews);
  const isReviewLoaded = useSelector(getReviewsStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSelectedFilm(id));
    dispatch(fetchSimilarFilms(id));
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

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

export default Film;
