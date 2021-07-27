import { filmsData } from './films-data';
import { ActionType } from '../action';

import { films } from '../../mocks/films';
import { selectedFilmAdapter, FilmsAdapter } from '../../components/src/adapter';

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData(undefined, {}))
      .toEqual({
        genre: 'All genres',
        films: [],
        filmsListAmount: 8,
        isDataLoaded: false,
        selectedFilm: [],
        isSelectedFilmLoaded: false,
        similarFilms: [],
        favoriteFilms: [],
        isFavoriteFilmsLoaded: false,
      });
  });

  it('should update genre to sort films', () => {
    const genre = 'Comedy';
    const state = {genre: 'All genres'};
    const genreChange = {
      type: ActionType.GENRE_CHANGE,
      payload: 'Comedy',
    };

    expect(filmsData(state, genreChange))
      .toEqual({genre});
  });

  it('should reset genre to `All genres`', () => {
    const state = {genre: 'Action'};
    const genre = 'All genres';
    const resetGenre = {
      type: ActionType.RESET_GENRE,
    };

    expect(filmsData(state, resetGenre))
      .toEqual({genre});
  });

  it('should update amount of items in the films list', () => {
    const state = {filmsListAmount: 8};
    const filmsListAmount = 16;
    const addFilms = {
      type: ActionType.ADD_FILMS,
      payload: 8,
    };

    expect(filmsData(state, addFilms))
      .toEqual({filmsListAmount});
  });

  it('should update films list amount value to default state', () => {
    const filmsListAmount = 8;
    const state = {filmsListAmount: 24};
    const resetFilms = {
      type: ActionType.RESET_FILMS,
    };

    expect(filmsData(state, resetFilms))
      .toEqual({filmsListAmount});
  });

  it('should update films by load films', () => {
    const state = {films: [], isDataLoaded: false};
    const loadFilms = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(filmsData(state, loadFilms))
      .toEqual({films: FilmsAdapter(films), isDataLoaded: true});
  });

  it('should update selected film by load selected film', () => {
    const state = {selectedFilm: [], isSelectedFilmLoaded: false};
    const film = films[0];
    const loadSelectedFilm = {
      type: ActionType.LOAD_SELECTED_FILM,
      payload: film,
    };

    expect(filmsData(state, loadSelectedFilm))
      .toEqual({selectedFilm: selectedFilmAdapter(film), isSelectedFilmLoaded: true});
  });

  it('should update similar films by load similar films', () => {
    const state = {similarFilms: []};
    const loadSimilarFilms = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: films,
    };

    expect(filmsData(state, loadSimilarFilms))
      .toEqual({similarFilms: FilmsAdapter(films)});
  });

  it('should update favorite films by load favorite films', () => {
    const state = {favoriteFilms: [], isFavoriteFilmsLoaded: false};
    const loadFavoriteFilms = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    };

    expect(filmsData(state, loadFavoriteFilms))
      .toEqual({favoriteFilms: FilmsAdapter(films), isFavoriteFilmsLoaded: true});
  });
});
