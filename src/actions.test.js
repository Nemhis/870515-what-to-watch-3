import {ActionType, ActionCreator} from './actions';
import {Screen} from './const';

describe(`Action creators work correctly`, () => {
  it(`Change filter action return correct value`, () => {
    expect(ActionCreator.changeGenreFilter(`test genre`))
      .toEqual({
        type: ActionType.CHANGE_GENRE_FILTER,
        payload: `test genre`,
      });
  });

  it(`Apply genre filter action return correct value`, () => {
    expect(ActionCreator.applyGenreFilter(`test genre`))
      .toEqual({
        type: ActionType.APPLY_GENRE_FILTER,
        payload: `test genre`,
      });
  });

  it(`Select film action return correct value`, () => {
    const film = {id: 1};

    expect(ActionCreator.selectFilm({id: 1}))
      .toEqual({
        type: ActionType.SELECT_FILM,
        payload: film,
      });
  });

  it(`Change screen action return correct value`, () => {
    expect(ActionCreator.changeScreen(Screen.FILM_PAGE))
      .toEqual({
        type: ActionType.CHANGE_SCREEN,
        payload: Screen.FILM_PAGE,
      });
  });

  it(`Change shown films count action return correct value`, () => {
    expect(ActionCreator.changeShownFilmsCount(10))
      .toEqual({
        type: ActionType.CHANGE_SHOWN_FILMS_COUNT,
        payload: 10,
      });
  });

  it(`Slice films by shown count action return correct value`, () => {
    expect(ActionCreator.sliceFilmsByShownCount())
      .toEqual({
        type: ActionType.SLICE_FILMS_BY_SHOWN_COUNT,
      });
  });

  it(`Set current film action return correct value`, () => {
    expect(ActionCreator.setPlayedFilm({name: `test film`}))
      .toEqual({
        type: ActionType.SET_PLAYED_FILM,
        payload: {name: `test film`},
      });
  });
});
