import React from 'react';
import PropTypes from 'prop-types';
import filmProp from './films.prop';
import { userIsAuth } from '../src/common';
import GuestHeader from '../headers/guest-header';
import UserHeader from '../headers/user-header';
import FilmButtons from '../film-buttons/film-buttons';

function MainFilm({authorizationStatus, mainFilm}) {
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

            <FilmButtons id={mainFilm.id} isFavorite={mainFilm.isFavorite} />
          </div>
        </div>
      </div>
    </section>
  );
}

MainFilm.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  mainFilm: PropTypes.shape(filmProp),
};

export default React.memo(MainFilm);
