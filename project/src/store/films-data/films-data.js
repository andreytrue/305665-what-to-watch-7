import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES, CARDS_SHOWING_AMOUNT } from '../../utils/const';
import { useFilmsAdapter, useSelectedFilmAdapter } from '../../utils/adapter';
import {
  genreChange,
  resetGenre,
  addFilms,
  resetFilms,
  loadFilms,
  loadSelectedFilm,
  loadSimilarFilms,
  loadFavoriteFilms,
  loadPromoFilm
} from '../action';

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
  promoFilm: [],
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
      state.films = useFilmsAdapter(action.payload);
      state.isDataLoaded = true;
    })
    .addCase(loadSelectedFilm, (state, action) => {
      state.selectedFilm = useSelectedFilmAdapter(action.payload);
      state.isSelectedFilmLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = useFilmsAdapter(action.payload);
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = useFilmsAdapter(action.payload);
      state.isFavoriteFilmsLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = useSelectedFilmAdapter(action.payload);
    });
});

export {filmsData};
