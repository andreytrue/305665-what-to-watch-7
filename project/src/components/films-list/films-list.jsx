import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../films/films.prop';

function FilmsList ({ films, genre }){
  // eslint-disable-next-line
  const [activeFilm, setActiveFilm] = React.useState(-1);

  const filteredFilmsList = (filmsList) => {
    switch (genre) {
      case 'All genres':
        return filmsList;
      default:
        return filmsList.filter((film) => film.genre === genre);
    }
  };

  const handleOnMouseOver = React.useCallback((id) => {
    setActiveFilm(id);
  }, []);

  return (
    <div className="catalog__films-list">
      {filteredFilmsList(films).map((film) => (
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
};

export default FilmsList;
