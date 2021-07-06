import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';

function VideoPlayer({film, src, isPlaying}) {
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => videoRef.current.play(), 1000);
      return;
    }

    videoRef.current.pause();
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

// setTimeout(
//   () => videoRef.current.play(),
//   1000);
