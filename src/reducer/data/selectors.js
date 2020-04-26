import NameSpace from '../name-space';

export const getAllFilms = (state) => state[NameSpace.DATA].allFilms;

export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
