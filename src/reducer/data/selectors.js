import NameSpace from '../name-space';

export const getAllFilms = (state) => state[NameSpace.DATA].allFilms;

export const getPromoFilm = (state) => state[NameSpace.DATA].allFilms[0]; // TODO: запросить promo film c api
