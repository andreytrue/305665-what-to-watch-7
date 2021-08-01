import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../films/films.prop';

function FilmsList ({ films, filmsListAmount = films.length}){
  const filmsList = (list) => list.slice(0, filmsListAmount);

  return (
    <div className="catalog__films-list">
      {filmsList(films).map((film) => (
        <FilmCard
          film={film}
          key={film.id}
        />))}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
  filmsListAmount: PropTypes.number,
};

export default FilmsList;
