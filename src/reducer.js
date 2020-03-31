import {ActionType, ActionCreator, DEFAULT_GENRE_ITEM} from './actions';
import films from './mocks/films';
import {extend} from './utils';

// TODO: пока не большой хак, не понимаю куда положить этот функционал
// по смыслу это должно делаться на каком-то бутстрапе приложения, после загрузки списка фильмов
const genres = ActionCreator.updateGenresList(films).payload;

const initialState = {
  films,
  selectedGenre: DEFAULT_GENRE_ITEM,
  genres,
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
    case ActionType.UPDATE_GENRES_LIST:
      newState = {genres: action.payload};
      break;
  }

  if (newState) {
    state = extend(state, newState);
  }

  return state;
};

export {reducer};
