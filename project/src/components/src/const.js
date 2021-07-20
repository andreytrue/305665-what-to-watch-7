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
  FILMS_ID: '/films/:id',
  FILMD_ID_SIMILAR: '/films/:id/similar',
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
