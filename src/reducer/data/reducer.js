import {extend} from '../../utils';

import {ActionType} from './actions';

const initialState = {
  allFilms: [],
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case ActionType.LOAD_FILMS: {
      newState = {
        allFilms: action.payload,
      };
      break;
    }
  }

  if (newState) {
    state = extend(state, newState);
  }

  return state;
};

export {reducer};

