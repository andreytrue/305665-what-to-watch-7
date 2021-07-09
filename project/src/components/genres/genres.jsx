import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';

function Genres({films, genre, onGenreClick}) {
  const filmGenres = films.map((film) => film.genre);

  const filteredGenres = Array.from(new Set(filmGenres));
  filteredGenres.unshift('All genres');

  const activeGenreClassName = 'catalog__genres-item--active';

  return (
    <ul className="catalog__genres-list">
      {filteredGenres.map((filmGenre, i) => (
        <li className={`catalog__genres-item ${genre === filmGenre ? activeGenreClassName : ''}`} onClick={() => onGenreClick(filmGenre)} key={filmGenre + 1}>
          <span className="catalog__genres-link">{ filmGenre }</span>
        </li>),
      )}
    </ul>
  );
}

Genres.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default Genres;
