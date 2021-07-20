import { ActionType } from './action';
import { ALL_GENRES, CARDS_SHOWING_AMOUNT } from '../components/const/const';
import { FilmsAdapter, selectedFilmAdapter } from '../components/src/adapter';
import { AuthorizationStatus } from '../components/src/const';
import { login } from './api-actions';

const firstGenre = ALL_GENRES;
const filmsListAmount = CARDS_SHOWING_AMOUNT;

const initialState = {
  genre: firstGenre,
  films: [],
  filmsListAmount: filmsListAmount,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  selectedFilm: [],
  isSelectedFilmLoaded: false,
  similarFilms: [],
  isReviewLoaded: false,
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GENRE_CHANGE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.RESET_GENRE:
      return {
        ...state,
        genre: firstGenre,
      };
    case ActionType.ADD_FILMS:
      return {
        ...state,
        filmsListAmount: action.payload + CARDS_SHOWING_AMOUNT,
      };
    case ActionType.RESET_FILMS:
      return {
        ...state,
        filmsListAmount: CARDS_SHOWING_AMOUNT,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: FilmsAdapter(action.payload),
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.LOGIN:
      login(action.payload);
      return {
        ...state,
      };
    case ActionType.LOAD_SELECTED_FILM:
      return {
        ...state,
        selectedFilm: selectedFilmAdapter(action.payload),
        isSelectedFilmLoaded: true,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: FilmsAdapter(action.payload),
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};
