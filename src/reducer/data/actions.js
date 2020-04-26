import Film from '../../adapter/film';

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        dispatch(ActionCreator.loadFilms(data));
      })
      .catch((response) => {
        // TODO: dispatch ошибка загрузки фильмов, необходимо показать ошибку
        throw response;
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        dispatch(ActionCreator.loadPromoFilm(data));
      })
      .catch((response) => {
        // TODO: dispatch ошибка загрузки фильмов, необходимо показать ошибку
        throw response;
      });
  }
};

const ActionCreator = {
  loadFilms(films) {
    films = films.map((film) => Film.fromRaw(film));

    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },

  loadPromoFilm(film) {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: Film.fromRaw(film),
    };
  },
};

export {ActionType, ActionCreator, Operation};
