export const ActionType = {
  GENRE_CHANGE: 'genres/genreChange',
  RESET_GENRE: 'genres/genreReset',
  ADD_FILMS: 'films/addFilms',
  RESET_FILMS: 'films/resetFilms',
  LOAD_FILMS: 'load/loadFilms',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'app/redirectToRoute',
  LOAD_SELECTED_FILM: 'load/selectedFilm',
  LOAD_SIMILAR_FILMS: 'load/similarFilms',
  LOAD_REVIEWS: 'load/reviews',
};

export const ActionCreator = {
  genreChange: (genre) => ({
    type: ActionType.GENRE_CHANGE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
  addFilms: (filmsListAmount) => ({
    type: ActionType.ADD_FILMS,
    payload: filmsListAmount,
  }),
  resetFilms: () => ({
    type: ActionType.RESET_FILMS,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  submitLogin: (authData) => ({
    type: ActionType.LOGIN,
    payload: authData,
  }),
  loadSelectedFilm: (film) => ({
    type: ActionType.LOAD_SELECTED_FILM,
    payload: film,
  }),
  loadSimilarFilms: (films) => ({
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: films,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
};
