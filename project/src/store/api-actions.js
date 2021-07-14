import { ActionCreator } from './action';
import { APIRoute } from '../components/src/const';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);
