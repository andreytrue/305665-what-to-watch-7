import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';

function VideoPlayer({film, src, isPlaying}) {
  const videoRef = useRef();

  useEffect(() => {
    let timeout;

    if (isPlaying) {
      timeout = setTimeout(() => videoRef.current.play(), 1000);
    } else {
      videoRef.current.load();
    }

    return () => clearTimeout(timeout);
  }, [isPlaying]);

  return (
    <video
      src={src}
      ref={videoRef}
      poster={film.previewImage}
      width="280"
      height="175"
      muted="muted"
    >
    </video>
  );
}

VideoPlayer.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
