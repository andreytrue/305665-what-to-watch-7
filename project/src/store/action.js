import {createAction} from '@reduxjs/toolkit';

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

export const genreChange = createAction(ActionType.GENRE_CHANGE, (genre) => ({
  payload: genre,
}));

export const resetGenre = createAction(ActionType.RESET_GENRE);

export const addFilms = createAction(ActionType.ADD_FILMS, (filmsListAmount) => ({
  payload: filmsListAmount,
}));

export const resetFilms = createAction(ActionType.RESET_FILMS);

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const submitLogout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const submitLogin = createAction(ActionType.LOGIN, (authData) => ({
  payload: authData,
}));

export const loadSelectedFilm = createAction(ActionType.LOAD_SELECTED_FILM, (film) => ({
  payload: film,
}));

export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({
  payload: films,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));
