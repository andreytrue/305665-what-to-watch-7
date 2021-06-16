import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import filmProp from '../films/films.prop';

function FilmCard({film, onMouseOver}) {
  // eslint-disable-next-line
  const location = '/films/' + film.id;

  return (
    <article onMouseOver={() => onMouseOver(film.id)} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={location}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  onMouseOver: PropTypes.func,
};

export default FilmCard;
