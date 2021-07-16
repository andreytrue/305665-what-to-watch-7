import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import Genres from '../genres/genres';
import ShowMore from '../show-more/show-more';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

import GuestHeader from '../headers/guest-header';
import UserHeader from '../headers/user-header';
import { userIsAuth } from '../src/common';

function WelcomeScreen(props) {

  const {authorizationStatus, films, genre, filmsListAmount, onShowMoreClick, onGenreClick, onFilmsReset} = props;

  const mainFilm = films[0];
  const posterImageAlt = mainFilm.name + ' poster'; // eslint-disable-line prefer-template

  // eslint-disable-next-line
  useEffect(() => {
    return () => {
      onFilmsReset();
    };
  }, [onFilmsReset]);

  return (
    <div className="page-content">
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Genres films={films} genre={genre} onGenreClick={onGenreClick} />

        <FilmsList films={films} genre={props.genre} filmsListAmount={filmsListAmount} />

        {films.length > filmsListAmount ? <ShowMore filmsListAmount={filmsListAmount} onShowMoreClick={onShowMoreClick} /> : ''}
      </section>

      <Footer />
    </div>
  );
}

WelcomeScreen.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
  genre: PropTypes.string.isRequired,
  filmsListAmount: PropTypes.number.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  onFilmsReset: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  genre: state.genre,
  filmsListAmount: state.filmsListAmount,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.genreChange(genre));
  },
  onGenreReset() {
    dispatch(ActionCreator.resetGenre());
  },
  onShowMoreClick(filmsListAmount) {
    dispatch(ActionCreator.addFilms(filmsListAmount));
  },
  onFilmsReset() {
    dispatch(ActionCreator.resetFilms());
  },
});

export {WelcomeScreen};
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
