import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../films/films.prop';

function FilmsList ({ films }){
  // eslint-disable-next-line
  const [activeFilm, setActiveFilm] = React.useState(-1);

  const handleOnMouseOver = React.useCallback((id) => {
    setActiveFilm(id);
  }, []);

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id} onMouseOver={handleOnMouseOver} />)}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
};

export default FilmsList;
