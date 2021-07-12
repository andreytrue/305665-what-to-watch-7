import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../films/films.prop';
import {ALL_GENRES} from '../const/const';

function FilmsList ({ films, genre, filmsListAmount }){
  // eslint-disable-next-line
  const [activeFilm, setActiveFilm] = React.useState(-1);

  const filteredFilmsList = (filmsList) => {
    if (genre === ALL_GENRES) {
      return filmsList;
    }

    return filmsList.filter((film) => film.genre === genre);
  };

  const handleOnMouseOver = React.useCallback((id) => {
    setActiveFilm(id);
  }, []);

  const finalFilmsList = (filmsList) => {
    filmsList = filteredFilmsList(filmsList);
    filmsList = filmsList.slice(0, filmsListAmount);

    return filmsList;
  };

  return (
    <div className="catalog__films-list">
      {finalFilmsList(films).map((film) => (
        <FilmCard
          film={film}
          key={film.id}
          onMouseOver={handleOnMouseOver}
        />))}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
  genre: PropTypes.string.isRequired,
  filmsListAmount: PropTypes.number,
};

export default FilmsList;
