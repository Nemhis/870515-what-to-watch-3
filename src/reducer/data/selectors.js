import {createSelector} from 'reselect';
import NameSpace from '../name-space';

export const getAllFilms = (state) => state[NameSpace.DATA].allFilms;

export const getShownFilms = (state) => state[NameSpace.DATA].shownFilms;

export const getPromoFilm = (state) => state[NameSpace.DATA].allFilms[0]; // TODO: запросить promo film c api

export const getFilmsByCurrentGenre = (state) => state[NameSpace.DATA].films;

export const getFilteredFilmsCount = createSelector(
    getFilmsByCurrentGenre,
    (films) => films.length
);
