import React from 'react';
import { useHistory } from 'react-router-dom';
import { userIsAuth } from '../../utils/common';
import { Link } from 'react-router-dom';
import GuestHeader from '../headers/guest-header';
import UserHeader from '../headers/user-header';
import { useDispatch, useSelector } from 'react-redux';
import { getPromoFilm } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { addPromoToFavorite } from '../../store/api-actions';
import { FavoriteFilm } from '../../utils/const';

function MainFilm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const mainFilm = useSelector(getPromoFilm);
  const { id, name, backgroundImage, isFavorite, genre, released, posterImage } = mainFilm;

  const addToFavorite = (evt) => {
    evt.preventDefault();

    if (!userIsAuth(authorizationStatus)) {
      return history.push('/login');
    }

    dispatch(addPromoToFavorite(id, !isFavorite ? FavoriteFilm.TRUE : FavoriteFilm.FALSE));
  };

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      {userIsAuth(authorizationStatus)
        ? <UserHeader />
        : <GuestHeader />}

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <Link to={`/player/${id}`} style={{textDecoration: 'none'}}>
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
              </Link>
              <button className="btn btn--list film-card__button" type="button" onClick={addToFavorite}>
                <svg viewBox="0 0 19 20" width="19" height="20">

                  {isFavorite
                    ? <use xlinkHref="#in-list"></use>
                    : <use xlinkHref="#add"></use>}

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

export default React.memo(MainFilm);
