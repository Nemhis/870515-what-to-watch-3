import {ActionType, DEFAULT_GENRE_ITEM} from './actions';
import films from './mocks/films';
import {extend} from './utils';
import {Screen} from './const';

const initialState = {
  films,
  allFilms: films,
  selectedGenre: DEFAULT_GENRE_ITEM,
  selectedFilm: null,
  screen: Screen.MAIN,
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
    case ActionType.SELECT_FILM:
      newState = {selectedFilm: action.payload};
      break;
    case ActionType.CHANGE_SCREEN:
      newState = {screen: action.payload};
      break;
  }

  if (newState) {
    state = extend(state, newState);
  }

  return state;
};

export {reducer};
