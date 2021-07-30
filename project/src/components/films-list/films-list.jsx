import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../films/films.prop';

function FilmsList ({ films, filmsListAmount = films.length}){
  // eslint-disable-next-line
  const [activeFilm, setActiveFilm] = React.useState(-1);


  const handleOnMouseOver = React.useCallback((id) => {
    setActiveFilm(id);
  }, []);

  const filmsList = (list) => list.slice(0, filmsListAmount);

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
  filmsListAmount: PropTypes.number,
};

export default FilmsList;
