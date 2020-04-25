const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        dispatch(ActionCreator.loadFilms(data));
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
