import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';

function FilmCard({film}) {

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
};

export default FilmCard;
