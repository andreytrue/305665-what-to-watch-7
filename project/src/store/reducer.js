import { ActionType } from './action';
import films from '../mocks/films';
import { ALL_GENRES, CARDS_SHOWING_AMOUNT } from '../components/const/const';

const firstGenre = ALL_GENRES;
const filmsListAmount = CARDS_SHOWING_AMOUNT;

const initialState = {
  genre: firstGenre,
  films: films,
  filmsListAmount: filmsListAmount,
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
    default:
      return state;
  }
};

export {reducer};
