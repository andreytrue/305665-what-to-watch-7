import React, { useEffect } from 'react';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteFilms } from '../../store/films-data/selectors';
import { fetchFavoriteFilms } from '../../store/api-actions';

import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { submitLogout } from '../../store/action';

function MyList() {
  const dispatch = useDispatch();
  const favoriteFilms = useSelector(getFavoriteFilms);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              className="user-block__link"
              to={AppRoute.MAIN}
              onClick={ () => dispatch(submitLogout()) }
            >
              Sign out
            </Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
