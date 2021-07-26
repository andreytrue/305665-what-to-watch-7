import { AppRoute, AuthorizationStatus, APIRoute } from '../components/src/const';
import { loadFilms, requireAuthorization, redirectToRoute, submitLogout, loadSelectedFilm, loadSimilarFilms, loadReviews, loadFavoriteFilms } from './action';

const handleError = (err) => {
  // eslint-disable-next-line
  window.alert(err);
};

export const setApiHeaderWithToken = (api) => (
  api.defaults.headers['x-token'] = localStorage.getItem('token') ?? ''
);


export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch((err) => handleError(err))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(submitLogout()))
);

export const fetchSelectedFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(loadSelectedFilm(data)))
    .catch(() => {})
);

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}/similar`)
    .then(({data}) => dispatch(loadSimilarFilms(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const reviewFilm = ({ rating, comment }, id) => (dispatch, _getState, api) => {
  setApiHeaderWithToken(api);
  return api.post(`${APIRoute.COMMENTS}/${id}`, { rating, comment })
    .then(({ data }) => dispatch(loadReviews(data)))
    .catch(() => {});
};

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => {
  setApiHeaderWithToken(api);
  return api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteFilms(data)));
};

export const addFilmToFavorite = (id, status) => (dispatch, _getState, api) => {
  setApiHeaderWithToken(api);
  return api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(() => dispatch(fetchSelectedFilm(id)));
};
