import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../films/films.prop';
import {ALL_GENRES} from '../const/const';

function FilmsList ({ films, genre = ALL_GENRES, filmsListAmount = films.length}){
  // eslint-disable-next-line
  const [activeFilm, setActiveFilm] = React.useState(-1);

  const filteredFilmsList = (list) => {
    if (genre === ALL_GENRES) {
      return list;
    }

    return list.filter((film) => film.genre === genre);
  };

  const handleOnMouseOver = React.useCallback((id) => {
    setActiveFilm(id);
  }, []);

  const filmsList = (list) => filteredFilmsList(list).slice(0, filmsListAmount);

  return (
    <div className="catalog__films-list">
      {filmsList(films).map((film) => (
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
  genre: PropTypes.string,
  filmsListAmount: PropTypes.number,
};

export default FilmsList;
