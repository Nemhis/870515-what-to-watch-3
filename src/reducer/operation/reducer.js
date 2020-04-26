import {ActionType, DEFAULT_GENRE_ITEM, SHOWN_FILMS_COUNT} from './actions';
import {extend} from '../../utils';
import {Screen} from '../../const';

const initialState = {
  selectedFilm: null,
  screen: Screen.MAIN,
  selectedGenre: DEFAULT_GENRE_ITEM,
  shownFilmsCount: SHOWN_FILMS_COUNT,
  playedFilm: null,
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      newState = {selectedGenre: action.payload};
      break;
    case ActionType.SELECT_FILM:
      newState = {selectedFilm: action.payload};
      break;
    case ActionType.CHANGE_SCREEN:
      newState = {screen: action.payload};
      break;
    case ActionType.CHANGE_SHOWN_FILMS_COUNT:
      newState = {shownFilmsCount: action.payload};
      break;
    case ActionType.SET_PLAYED_FILM:
      newState = {
        playedFilm: action.payload,
      };
      break;
  }

  if (newState) {
    state = extend(state, newState);
  }

  return state;
};

export {reducer};
