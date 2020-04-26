import Film from '../../adapter/film';

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        data = data.map((film) => Film.fromRaw(film));
        dispatch(ActionCreator.loadFilms(data));
      })
      .catch((response) => {
        // TODO: dispatch ошибка загрузки фильмов, необходимо показать ошибку
        throw response;
      });
  }
};

const ActionCreator = {
  loadFilms(films) {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  }
};

export {ActionType, ActionCreator, Operation};
