import {createSelector} from 'reselect';

import NameSpace from '../name-space';
import {arrayUnique} from '../../utils';
import {DEFAULT_GENRE_ITEM} from './actions';
import {getAllFilms} from '../data/selectors';

const MAX_GENRES_COUNT = 9;

export const getScreen = (state) => state[NameSpace.OPERATION].screen;

export const getSelectedGenre = (state) => state[NameSpace.OPERATION].selectedGenre;

export const getFilmsByCurrentGenre = createSelector(
    getAllFilms,
    getSelectedGenre,
    (films, genre) => {
      let filteredFilms = films;

      if (genre !== DEFAULT_GENRE_ITEM) {
        filteredFilms = filteredFilms.filter((film) => film.genre === genre);
      }

      return filteredFilms;
    }
);

export const getShownFilmsCount = (state) => state[NameSpace.OPERATION].shownFilmsCount;

export const getShownFilms = createSelector(
    getFilmsByCurrentGenre,
    getShownFilmsCount,
    (films, count) => films.slice(0, count)
);

export const getFilteredFilmsCount = createSelector(
    getFilmsByCurrentGenre,
    (films) => films.length
);


export const getGenresListByFilms = createSelector(
    getAllFilms,
    (films) => {
      let genres = films.map((film) => film.genre);
      genres = arrayUnique(genres);
      genres = genres.slice(0, MAX_GENRES_COUNT);
      genres.unshift(DEFAULT_GENRE_ITEM);

      return genres;
    }
);
