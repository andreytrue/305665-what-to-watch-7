import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES, CARDS_SHOWING_AMOUNT } from '../../components/const/const';
import { FilmsAdapter, selectedFilmAdapter } from '../../components/src/adapter';
import { genreChange, resetGenre, addFilms, resetFilms, loadFilms, loadSelectedFilm, loadSimilarFilms, loadFavoriteFilms } from '../action';

const firstGenre = ALL_GENRES;
const filmsListAmount = CARDS_SHOWING_AMOUNT;

const initialState = {
  genre: firstGenre,
  films: [],
  filmsListAmount: filmsListAmount,
  isDataLoaded: false,
  selectedFilm: [],
  isSelectedFilmLoaded: false,
  similarFilms: [],
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(genreChange, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(resetGenre, (state) => {
      state.genre = firstGenre;
    })
    .addCase(addFilms, (state, action) => {
      state.filmsListAmount = action.payload + CARDS_SHOWING_AMOUNT;
    })
    .addCase(resetFilms, (state) => {
      state.filmsListAmount = CARDS_SHOWING_AMOUNT;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = FilmsAdapter(action.payload);
      state.isDataLoaded = true;
    })
    .addCase(loadSelectedFilm, (state, action) => {
      state.selectedFilm = selectedFilmAdapter(action.payload);
      state.isSelectedFilmLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = FilmsAdapter(action.payload);
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = FilmsAdapter(action.payload);
      state.isFavoriteFilmsLoaded = true;
    });
});

export {filmsData};
