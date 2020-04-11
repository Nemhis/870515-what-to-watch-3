const DEFAULT_GENRE_ITEM = `All genres`;
const SHOWN_MOVIES_COUNT = 8;

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  APPLY_GENRE_FILTER: `APPLY_GENRE_FILTER`,
  SELECT_FILM: `SELECT_FILM`,
  CHANGE_SCREEN: `CHANGE_SCREEN`,
  CHANGE_SHOWN_FILMS_COUNT: `CHANGE_SHOWN_FILMS_COUNT`,
  SLICE_FILMS_BY_SHOWN_COUNT: `SLICE_FILMS_BY_SHOWN_COUNT`,
};

const ActionCreator = {
  changeGenreFilter(genre) {
    return ({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: genre,
    });
  },

  applyGenreFilter(genre) {
    return ({
      type: ActionType.APPLY_GENRE_FILTER,
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

  sliceFilmsByShownCount() {
    return ({
      type: ActionType.SLICE_FILMS_BY_SHOWN_COUNT,
    });
  },
};

export {ActionType, ActionCreator, DEFAULT_GENRE_ITEM, SHOWN_MOVIES_COUNT};
