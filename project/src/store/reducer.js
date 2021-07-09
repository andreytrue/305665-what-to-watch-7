import { ActionType } from './action';
import films from '../mocks/films';

const firstGenre = 'All genres';

const initialState = {
  genre: firstGenre,
  films: films,
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
    default:
      return state;
  }
};

export {reducer};
