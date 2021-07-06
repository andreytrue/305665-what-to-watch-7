import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import filmProp from '../films/films.prop';
import VideoPlayer from '../videoplayer/video-player';

const src = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

function FilmCard({film, isPlaying, onMouseOver}) {
  // eslint-disable-next-line
  const location = '/films/' + film.id;

  return (
    <article onMouseOver={() => onMouseOver(film.id)} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <VideoPlayer
          film={film}
          key={film.id}
          src={src}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={location}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func,
};

export default FilmCard;
