import {ActionType} from './actions';
import films from './mocks/films';
import {extend} from './utils';

const initialState = {
  films,
  selectedGenre: 0,
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      newState = {selectedGenre: action.payload};
      break;
    case ActionType.UPDATE_FILMS:
      newState = {films: action.payload};
      break;
  }

  if (newState) {
    state = extend(state, newState);
  }

  return state;
};

export {reducer};
