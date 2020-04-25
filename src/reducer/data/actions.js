const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  loadFilms(films) {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  }
};

export {ActionType, ActionCreator};
