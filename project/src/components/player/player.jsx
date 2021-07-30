import React, { useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFilms } from '../../store/films-data/selectors';
import { toggleFullScreen } from '../../utils/common';

function Player() {
  const {id} = useParams();
  const films = useSelector(getFilms);
  const film = films.find((item) => item.id === Number(id));

  const playerRef = useRef();
  const history = useHistory();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTimePlaying, setCurrentTimePlaying] = useState(0);
  const fulltime = film.runTime * 60;

  const handleClickOnFullScreen = (evt) => {
    evt.preventDefault();
    toggleFullScreen();
  };

  const handleClickOnPlayPause = (evt) => {
    evt.preventDefault();

    if (playerRef.current.paused) {
      playerRef.current.play();
      setIsPlaying(false);
    } else {
      playerRef.current.pause();
      setIsPlaying(true);
    }
  };

  const handleCurrentTimePlaying = (evt) => setCurrentTimePlaying(evt.target.currentTime);

  const formatRuntime = (runtime) => {
    runtime = runtime / 60;
    let hours   = Math.floor(runtime / 60);
    let minutes = Math.floor((runtime - hours * 60));
    let seconds = Math.floor(runtime * 60 - hours * 3600 - minutes * 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    hours = hours < 10 ? `0${hours}` : hours;

    return hours === 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  };


  return (
    <div className="player">
      <video
        ref={ playerRef }
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        onTimeUpdate={handleCurrentTimePlaying}
        muted
      >
      </video>

      <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30'}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatRuntime(fulltime - currentTimePlaying)}</div>
        </div>

        <div className="player__controls-row">

          {isPlaying
            ?
            <button type="button" className="player__play" onClick={handleClickOnPlayPause}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            :
            <button type="button" className="player__play" onClick={handleClickOnPlayPause}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>}

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleClickOnFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
