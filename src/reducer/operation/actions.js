const DEFAULT_GENRE_ITEM = `All genres`;
const SHOWN_FILMS_COUNT = 8;

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  SELECT_FILM: `SELECT_FILM`,
  CHANGE_SCREEN: `CHANGE_SCREEN`,
  CHANGE_SHOWN_FILMS_COUNT: `CHANGE_SHOWN_FILMS_COUNT`,
  SET_PLAYED_FILM: `SET_PLAYED_FILM`,
};

const ActionCreator = {
  changeGenreFilter(genre) {
    return ({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: genre,
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

  changeShownFilmsCount(count) {
    return ({
      type: ActionType.CHANGE_SHOWN_FILMS_COUNT,
      payload: count,
    });
  },

  setPlayedFilm(film) {
    return ({
      type: ActionType.SET_PLAYED_FILM,
      payload: film,
    });
  },
};

export {ActionType, ActionCreator, DEFAULT_GENRE_ITEM, SHOWN_FILMS_COUNT};
