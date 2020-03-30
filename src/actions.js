import films from './mocks/films';

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  UPDATE_FILMS: `UPDATE_FILMS`,
};

const ActionCreator = {
  changeGenreFilter(genre) {
    return ({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: genre,
    });
  },

  updateFilms(genre) {
    const filteredFilms = films;

    if (genre) {
      filteredFilms.filter((film) => film.genre === genre);
    }

    return ({
      type: ActionType.UPDATE_FILMS,
      payload: filteredFilms,
    });
  }
};

export {ActionType, ActionCreator};
