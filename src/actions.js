import films from './mocks/films';
import {arrayUnique} from './utils';

const MAX_GENRES_COUNT = 9;
const DEFAULT_GENRE_ITEM = `All genres`;

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  UPDATE_FILMS: `UPDATE_FILMS`,
  UPDATE_GENRES_LIST: `UPDATE_GENRES_LIST`,
  SELECT_FILM: `SELECT_FILM`,
  CHANGE_SCREEN: `CHANGE_SCREEN`,
};

const ActionCreator = {
  changeGenreFilter(genre) {
    return ({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: genre,
    });
  },

  updateFilms(genre) {
    let filteredFilms = films;

    if (genre !== DEFAULT_GENRE_ITEM) {
      filteredFilms = filteredFilms.filter((film) => film.genre === genre);
    }

    return ({
      type: ActionType.UPDATE_FILMS,
      payload: filteredFilms,
    });
  },

  updateGenresList(filmsForGenreList) {
    let genres = filmsForGenreList.map((film) => film.genre);
    genres = arrayUnique(genres);
    genres = genres.slice(0, MAX_GENRES_COUNT);
    genres.unshift(DEFAULT_GENRE_ITEM);

    return ({
      type: ActionType.UPDATE_GENRES_LIST,
      payload: genres,
    });
  },

  selectFilm(film) {
    return ({
      type: ActionType.SELECT_FILM,
      payload: film,
    });
  },

  changeScreen(screen) {
    return ({
      type: ActionType.CHANGE_SCREEN,
      payload: screen,
    });
  },
};

export {ActionType, ActionCreator, DEFAULT_GENRE_ITEM};
