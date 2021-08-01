import React from 'react';
import Logo from '../logo/logo';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddReview from '../add-review/add-review';
import { getFilms } from '../../store/films-data/selectors';

function Review() {
  const {id} = useParams();
  const films = useSelector(getFilms);
  const reviewedFilm = films.find((item) => item.id === Number(id));

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={reviewedFilm.backgroundImage} alt={`${reviewedFilm.name} poster`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${reviewedFilm.id}`} className="breadcrumbs__link">{reviewedFilm.name}</Link>
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
          <img src={reviewedFilm.posterImage} alt={`${reviewedFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReview />

    </section>
  );
}

export default Review;
