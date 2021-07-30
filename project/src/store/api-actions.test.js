import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../components/services/api';
import { ActionType } from './action';
import { APIRoute } from '../utils/const';
import { AuthorizationStatus } from '../utils/const';
import {
  checkAuth,
  fetchFilmsList,
  fetchSelectedFilm,
  fetchSimilarFilms,
  fetchReviews,
  reviewFilm,
  fetchFavoriteFilms,
  addFilmToFavorite
} from './api-actions';

import { films } from '../mocks/films';
import { reviews } from '../mocks/reviews';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = films;
    const expectedFakeFilms = films;

    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, fakeReply);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: expectedFakeFilms,
        });
      });
  });

  it('should make a correct API call to GET /films/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = films[0];
    const fakeReplyId = 1;
    const expectedFakeSelectedfFilm = films[0];

    const selectedFilmLoader = fetchSelectedFilm(fakeReplyId);

    apiMock
      .onGet(`${APIRoute.FILMS}/${fakeReplyId}`)
      .reply(200, fakeReply);

    return selectedFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SELECTED_FILM,
          payload: expectedFakeSelectedfFilm,
        });
      });
  });

  it('should make a correct API call to GET /films/:id/similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = films;
    const fakeReplyId = 1;
    const expectedFakeSimilarfFilms = films;

    const similarFilmsLoader = fetchSimilarFilms(fakeReplyId);

    apiMock
      .onGet(`${APIRoute.FILMS}/${fakeReplyId}/similar`)
      .reply(200, fakeReply);

    return similarFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SIMILAR_FILMS,
          payload: expectedFakeSimilarfFilms,
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = reviews;
    const fakeReplyId = 1;
    const expectedFakeReviews = reviews;

    const reviewsLoader = fetchReviews(fakeReplyId);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${fakeReplyId}`)
      .reply(200, fakeReply);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: expectedFakeReviews,
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const comment = [{
      id: 1,
      user:{
        id: 23,
        isPro: true,
        name: 'Corey',
        avatarUrl: 'https://7.react.pages.academy/static/avatar/5.jpg',
      },
      rating: 9,
      comment: 'best movie which i`ve ever seen',
      date: '2021-05-03T15:31:34.244Z',
    }];

    const fakeReply = comment;
    const fakeReplyId = 1;
    const fakeReview = {rating: 9, comment: 'best movie which i`ve ever seen'};
    const expectedFakeComment = comment;

    const reviewsLoader = reviewFilm(fakeReview, fakeReplyId);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${fakeReplyId}`, fakeReview)
      .reply(200, fakeReply);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: expectedFakeComment,
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReply = films;
    const expectedFavoriteFilms = films;

    const favoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, fakeReply);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: expectedFavoriteFilms,
        });
      });
  });

  it('should make a correct API call to POST /favorite/:id/status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReplyFalse = {'is_favorite':false, 'id': 1};
    const fakeReplyTrue = {
      isFavorite: true,
      id: 1,
    };

    const fakeSelectedFilm = [{
      'id': 1,
      'name': 'Moonrise Kingdom',
      'poster_image': 'img/moonrise-kingdom-poster.jpg',
      'preview_image': 'img/moonrise-kingdom.jpg',
      'background_image': 'img/moonrise-kingdom.jpg',
      'background_color': '#E1DD8F',
      'video_link': 'https://some-link',
      'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      'description': 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
      'rating': 7.8,
      'scores_count': 836,
      'director': 'Wes Andreson',
      'starring': ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
      'run_time': 94,
      'genre': 'Comedy',
      'released': 2012,
      'is_favorite': true,
    }];

    const favoriteLoader = addFilmToFavorite(fakeReplyTrue.id, fakeReplyTrue.isFavorite ? '1' : '0');
    const selectedFilmLoader = fetchSelectedFilm(fakeReplyTrue.id);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${fakeReplyTrue.id}/${fakeReplyTrue.isFavorite ? '1' : '0'}`)
      .reply(200, fakeReplyFalse);

    favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });

    apiMock
      .onGet(`${APIRoute.FILMS}/${fakeReplyTrue.id}`)
      .reply(200, fakeSelectedFilm);

    return selectedFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_SELECTED_FILM,
          payload: fakeSelectedFilm,
        });
      });
  });
});
