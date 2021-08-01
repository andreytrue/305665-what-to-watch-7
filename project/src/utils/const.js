export const AppRoute = {
  LOGIN: '/login',
  MAIN: '/',
  MYLIST: '/mylist',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  NOT_FOUND: '/not-found',
};

export const APIRoute = {
  FILMS: '/films',
  FILMS_ID: '/films/',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const ALL_GENRES = 'All genres';

export const FILMS_RECOMMENDATION_MAX = 4;

export const CARDS_SHOWING_AMOUNT = 8;

export const GENRES_MAX_AMOUNT = 9;

export const ReviewLength = {
  MIN: 50,
  MAX: 400,
};

export const RatingValues = {
  MIN: 1,
  MAX: 10,
};

export const DurationTime = {
  HOUR: 3600,
  MINUTE: 60,
};

export const FavoriteFilm = {
  TRUE: 1,
  FALSE: 0,
};

export const DateOptions = {
  MONTH: 'long',
  DAY: 'numeric',
  YEAR: 'numeric',
};

export const TabValues = {
  'Overview': 0,
  'Details': 1,
  'Reviews': 2,
};
