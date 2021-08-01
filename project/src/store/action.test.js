import {
  genreChange,
  resetGenre,
  addFilms,
  resetFilms,
  loadFilms,
  requireAuthorization,
  redirectToRoute,
  submitLogin,
  submitLogout,
  loadSelectedFilm,
  loadSimilarFilms,
  loadReviews,
  loadFavoriteFilms,
  ActionType
} from './action';

import { films } from '../mocks/films';
import { reviews } from '../mocks/reviews';

describe('Actions', () => {
  it('action creator for genre changing returns correct action', () => {
    const expectedAction = {
      type: ActionType.GENRE_CHANGE,
      payload: 'Comedy',
    };

    const genre = 'Comedy';

    expect(genreChange(genre)).toEqual(expectedAction);
  });

  it('action creator to reset genre returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET_GENRE,
    };

    expect(resetGenre()).toEqual(expectedAction);
  });

  it('action creator to add films to films list on welcome screen returns correct action', () => {
    const expectedAction = {
      type: ActionType.ADD_FILMS,
      payload: 8,
    };

    const filmsListAmount = 8;

    expect(addFilms(filmsListAmount)).toEqual(expectedAction);
  });

  it('action creator to reset films returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET_FILMS,
    };

    expect(resetFilms()).toEqual(expectedAction);
  });

  it('action creator for loading films list returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(loadFilms(films)).toEqual(expectedAction);
  });

  it('action creator to check authorization status returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    const authorizationStatus = 'AUTH';

    expect(requireAuthorization(authorizationStatus)).toEqual(expectedAction);
  });

  it('action creator to logout user returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(submitLogout()).toEqual(expectedAction);
  });

  it('action creator to redirect to other page returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/films',
    };

    const url = '/films';

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator to login user returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGIN,
      payload: {
        email: 'user@user.ru',
        password: '0000',
      },
    };

    const authData = {
      email: 'user@user.ru',
      password: '0000',
    };

    expect(submitLogin(authData)).toEqual(expectedAction);
  });

  it('action creator for loading selected film by user returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_SELECTED_FILM,
      payload: films[1],
    };

    const film = films[1];

    expect(loadSelectedFilm(film)).toEqual(expectedAction);
  });

  it('action creator for loading similar films to selected film by user returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: films,
    };

    expect(loadSimilarFilms(films)).toEqual(expectedAction);
  });

  it('action creator for loading reviews for selected by user film returns correct answer', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it('action creator for loading films which have been added to mylist returns correct answer', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    };

    expect(loadFavoriteFilms(films)).toEqual(expectedAction);
  });
});
