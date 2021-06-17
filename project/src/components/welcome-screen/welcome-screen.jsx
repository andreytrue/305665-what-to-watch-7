import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import filmProp from '../films/films.prop';

function WelcomeScreen({films}) {

  const mainFilm = films[0];
  const posterImageAlt = mainFilm.name + ' poster'; // eslint-disable-line prefer-template

  return (
    <div className="page-content">
      <section className="film-card">
        <div className="film-card__bg">
          <img src={mainFilm.backgroundImage} alt={mainFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="_blank">Sign out</a>
            </li>
          </ul>
        </header>

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

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="_blank" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="_blank" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <FilmsList films={films} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

WelcomeScreen.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
};

export default WelcomeScreen;
