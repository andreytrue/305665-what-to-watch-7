import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import filmProp from '../films/films.prop';
import VideoPlayer from '../videoplayer/video-player';

function FilmCard({film, onMouseOver}) {
  // eslint-disable-next-line
  const location = '/films/' + (film.id - 1);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(film.id)}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <div className="small-film-card__image">
        {!isPlaying ?
          <img src={film.previewImage} alt={film.title} width="280" height="175" /> :
          <VideoPlayer film={film} key={film.id} src={film.previewVideoLink} isPlaying={isPlaying}/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={location}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  onMouseOver: PropTypes.func,
};

export default FilmCard;
