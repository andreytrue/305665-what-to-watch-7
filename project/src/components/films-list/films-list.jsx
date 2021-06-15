import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../films/films.prop';
import {nanoid} from 'nanoid';

class FilmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedID: nanoid()};
    this._selectFilmHandler = this._selectFilmHandler.bind(this);
  }

  render() {
    return (
      <div className="catalog__films-list">
        {this.props.films.map((film) => <FilmCard film={film} key={film.id} mouseover={() => this._selectFilmHandler(film.id)} />)}
      </div>
    );
  }

  _selectFilmHandler(currentFilm) {
    this.setState({selectedID: currentFilm});
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
};

export default FilmsList;

// function FilmsList({films}) {
//   return (
//     <div className="catalog__films-list">
//       {films.map((film) => <FilmCard film={film} key={film.id} />)}
//     </div>
//   );
// }

// FilmsList.propTypes = {
//   films: PropTypes.arrayOf(PropTypes.shape(filmProp)).isRequired,
// };
