import { combineReducers } from 'redux';
import {filmsData} from './films-data/films-data';
import {reviewsData} from './reviews-data/reviews-data';
import {user} from './user/user';


export const NameSpace = {
  FILMS: 'FILMS',
  REVIEWS: 'REVIEWS',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.FILMS]: filmsData,
  [NameSpace.REVIEWS]: reviewsData,
  [NameSpace.USER]: user,
});
