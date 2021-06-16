import React from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';
import AddReview from '../add-review/add-review';

function Review({films}) {
  const reviewedFilm = films[0];
  const posterImageAlt = reviewedFilm.name + ' poster'; // eslint-disable-line prefer-template

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={reviewedFilm.backgroundImage} alt={reviewedFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{reviewedFilm.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to='/films/:id/review'>Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link" to='/'>Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={reviewedFilm.posterImage} alt={posterImageAlt} width="218" height="327" />
        </div>
      </div>

      <AddReview />

    </section>
  );
}

Review.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
};

export default Review;
