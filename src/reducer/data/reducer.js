import {extend} from '../../utils';

import {ActionType} from './actions';

const initialState = {
  allFilms: [],
  promoFilm: null,
  comments: {},
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case ActionType.LOAD_FILMS:
      newState = {
        allFilms: action.payload,
      };
      break;
    case ActionType.LOAD_PROMO_FILM:
      newState = {
        promoFilm: action.payload,
      };
      break;
    case ActionType.LOAD_COMMENTS:
      newState = {
        comments: {},
      };
      newState.comments[action.payload.filmId] = action.payload.comments;
      break;
  }

  if (newState) {
    state = extend(state, newState);
  }

  return state;
};

export {reducer};

