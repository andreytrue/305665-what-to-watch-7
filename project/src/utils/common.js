import { AuthorizationStatus, RatingValues, ReviewLength } from './const';

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const userIsAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.AUTH;

export const filmRating = (rating) => {
  if (rating >= 0 && rating < 3) {
    return 'Bad';
  } else if (rating >= 3 && rating < 5) {
    return 'Normal';
  } else if (rating >= 5 && rating < 8) {
    return 'Good';
  } else if (rating >= 8 && rating < 10) {
    return 'Very good';
  } else if (rating === 10) {
    return 'Awesome';
  }
};

export const isAvailableToSend = (rating, comment) => {
  if (rating >= RatingValues.MIN && rating <= RatingValues.MAX) {
    if (comment.length >= ReviewLength.MIN && comment.length <= ReviewLength.MAX) {
      return false;
    }
  }
  return true;
};

export const toggleFullScreen = () => {
  const elem = document.documentElement;

  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};

export const makeArray = () => {
  const result = [];

  for (let i = 10; i > 0; i--) {
    result.push(i);
  }

  return result;
};

export const onVideoDuration = (duration) => {
  const minutes = Math.floor(duration / 60, 10);
  const seconds = Math.floor(duration % 60);

  // eslint-disable-next-line
  console.log('result', minutes, seconds);

  return (`${minutes}:${seconds}`);
};
