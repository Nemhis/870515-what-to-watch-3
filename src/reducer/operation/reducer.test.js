import {reducer} from './reducer.js';
import {ActionType, DEFAULT_GENRE_ITEM, SHOWN_FILMS_COUNT} from './actions';
import {Screen} from '../../const';

describe(`Reducer tests`, () => {
  it(`Default store state`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        selectedFilm: null,
        screen: Screen.MAIN,
        selectedGenre: DEFAULT_GENRE_ITEM,
        shownMoviesCount: SHOWN_FILMS_COUNT,
        playedFilm: null,
      });
  });

  it(`Reducer should change genre filter`, () => {
    expect(reducer({
      selectedGenre: DEFAULT_GENRE_ITEM,
      selectedFilm: null,
    }, {
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `test genre`
    })).toEqual({
      selectedGenre: `test genre`,
      selectedFilm: null,
    });
  });

  it(`Reducer should apply genre filter`, () => {
    expect(reducer({
      allFilms: [
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 2`},
      ],
    }, {
      type: ActionType.APPLY_GENRE_FILTER,
      payload: `genre 1`
    })).toEqual({
      allFilms: [
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 2`},
      ],
      films: [
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
      ],
      filmsCount: 9,
      shownFilms: [
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
        {genre: `genre 1`},
      ],
    });
  });

  it(`Reducer should select film`, () => {
    const film = {id: 1};

    expect(reducer({}, {
      type: ActionType.SELECT_FILM,
      payload: film
    })).toEqual({
      selectedFilm: film,
    });
  });

  it(`Reducer should change screen`, () => {
    expect(reducer({
      screen: Screen.MAIN
    }, {
      type: ActionType.CHANGE_SCREEN,
      payload: Screen.FILM_PAGE
    })).toEqual({
      screen: Screen.FILM_PAGE,
    });
  });

  it(`Reducer should change shown films count`, () => {
    expect(reducer({
      shownMoviesCount: 10
    }, {
      type: ActionType.CHANGE_SHOWN_FILMS_COUNT,
      payload: 20
    })).toEqual({
      shownMoviesCount: 20,
    });
  });

  it(`Reducer should slice films by shown count`, () => {
    expect(reducer({
      films: [1, 2, 3, 4],
      shownMoviesCount: 2
    }, {
      type: ActionType.SLICE_FILMS_BY_SHOWN_COUNT,
    })).toEqual({
      films: [1, 2, 3, 4],
      shownFilms: [1, 2],
      shownMoviesCount: 2,
    });
  });

  it(`Reducer should set played film`, () => {
    expect(reducer({
      playedFilm: null,
    }, {
      type: ActionType.SET_PLAYED_FILM,
      payload: {name: `test film`},
    })).toEqual({
      playedFilm: {name: `test film`},
    });
  });
});
