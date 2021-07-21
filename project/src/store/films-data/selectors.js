import { NameSpace } from '../root-reducer';

export const getGenre = (state) => state[NameSpace.FILMS].genre;
export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getFilmsListAmount = (state) => state[NameSpace.FILMS].filmsListAmount;
export const getSelectedFilm = (state) => state[NameSpace.FILMS].selectedFilm;
export const getSimilarFilms = (state) => state[NameSpace.FILMS].similarFilms;
export const getDataLoadedStatus = (state) => state[NameSpace.FILMS].isDataLoaded;
export const getSelectedFilmStatus = (state) => state[NameSpace.FILMS].isSelectedFilmLoaded;
