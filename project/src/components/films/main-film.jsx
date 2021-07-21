import React from 'react';
import PropTypes from 'prop-types';
import filmProp from './films.prop';
import { userIsAuth } from '../src/common';

import GuestHeader from '../headers/guest-header';
import UserHeader from '../headers/user-header';

function MainFilm({authorizationStatus, films}) {

  const mainFilm = films[0];
  const posterImageAlt = mainFilm.name + ' poster'; // eslint-disable-line prefer-template

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={mainFilm.backgroundImage} alt={mainFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      {userIsAuth(authorizationStatus)
        ? <UserHeader />
        : <GuestHeader />}

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={mainFilm.posterImage} alt={posterImageAlt} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{mainFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{mainFilm.genre}</span>
              <span className="film-card__year">{mainFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="_blankplay-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="_blankadd"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

MainFilm.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)),
};

export default React.memo(MainFilm);
