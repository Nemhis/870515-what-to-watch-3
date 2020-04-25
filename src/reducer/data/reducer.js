import {extend} from '../../utils';

import {ActionType} from './actions';
import {SHOWN_MOVIES_COUNT} from '../operation/actions';

const initialState = {
  films: [],
  shownFilms: [],
  allFilms: [],
  filmsCount: 0,
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case ActionType.LOAD_FILMS: {
      newState = {
        films: action.payload,
        allFilms: action.payload,
        shownFilms: action.payload.slice(0, SHOWN_MOVIES_COUNT),
        filmsCount: action.payload.length,
      };
      break;
    }
  }

  if (newState) {
    state = extend(newState);
  }

  return state;
};

export {reducer};

