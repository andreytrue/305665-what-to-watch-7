import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import filmProp from '../films/films.prop';
import Tabs from '../tabs/tabs';
import FilmsList from '../films-list/films-list';

function Film({films}) {
  const { id } = useParams();

  const film = films[id];

  const {name,
    posterImage,
    backgroundImage,
    genre,
    released,
  } = film;

  const filteredFilms = films.filter((card) => card.genre === genre && card.name !== name);

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
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
                <a className="user-block__link" href="/">Sign out</a>
              </li>
            </ul>
          </header>

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
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt="poster" width="218" height="327" />
            </div>

            <Tabs film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">{filteredFilms.length > 0 ? 'More like this' : 'No same films'}</h2>

          <FilmsList films={filteredFilms.slice(0, 4)} genre={genre}/>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

Film.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
};

export default Film;
