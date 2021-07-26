import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFilmToFavorite } from '../../store/api-actions';
import { userIsAuth } from '../src/common';
import { getAuthorizationStatus } from '../../store/user/selectors';

function FilmButtons({id, isFavorite}) {
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const addToFavorite = (evt) => {
    evt.preventDefault();

    dispatch(addFilmToFavorite(id, !isFavorite ? 1 : 0));
  };

  return (
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
      {userIsAuth(authorizationStatus)
        ? <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
        : ''}
    </div>
  );
}

FilmButtons.propTypes = {
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
};

export default FilmButtons;
