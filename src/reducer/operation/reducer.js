import {ActionType, DEFAULT_GENRE_ITEM, SHOWN_MOVIES_COUNT} from './actions';
import {extend} from '../../utils';
import {Screen} from '../../const';

const initialState = {
  shownFilms: [],
  films: [],
  filmsCount: 0,
  allFilms: [],
  selectedFilm: null,
  screen: Screen.MAIN,
  selectedGenre: DEFAULT_GENRE_ITEM,
  shownMoviesCount: SHOWN_MOVIES_COUNT,
  playedFilm: null,
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      newState = {selectedGenre: action.payload};
      break;
    case ActionType.APPLY_GENRE_FILTER:
      let filteredFilms = state.allFilms;

      if (action.payload !== DEFAULT_GENRE_ITEM) {
        filteredFilms = filteredFilms.filter((film) => film.genre === action.payload);
      }

      newState = {
        films: filteredFilms,
        filmsCount: filteredFilms.length,
        shownFilms: filteredFilms.slice(0, SHOWN_MOVIES_COUNT),
      };
      break;
    case ActionType.SELECT_FILM:
      newState = {selectedFilm: action.payload};
      break;
    case ActionType.CHANGE_SCREEN:
      newState = {screen: action.payload};
      break;
    case ActionType.CHANGE_SHOWN_FILMS_COUNT:
      newState = {shownMoviesCount: action.payload};
      break;
    case ActionType.SLICE_FILMS_BY_SHOWN_COUNT:
      newState = {
        shownFilms: state.films.slice(0, state.shownMoviesCount)
      };
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
