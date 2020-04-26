import {getShownFilms, getFilteredFilmsCount, getGenresListByFilms, getFilmsByCurrentGenre} from './selectors';
import {DEFAULT_GENRE_ITEM} from './actions';

const films = [
  {id: 1, genre: `genre 1`},
  {id: 1, genre: `genre 2`},
  {id: 1, genre: `genre 3`},
  {id: 1, genre: `genre 4`},
  {id: 1, genre: `genre 4`},
  {id: 1, genre: `genre 4`},
  {id: 1, genre: `genre 5`},
  {id: 1, genre: `genre 6`},
  {id: 1, genre: `genre 7`},
  {id: 1, genre: `genre 8`},
  {id: 1, genre: `genre 9`},
  {id: 1, genre: `genre 10`},
  {id: 1, genre: `genre 11`},
  {id: 1, genre: `genre 12`},
  {id: 1, genre: `genre 13`},
  {id: 1, genre: `genre 14`},
];

describe(`Selectors should correct select data`, () => {
  it(`getShownFilms should correct slice films`, () => {
    expect(getShownFilms.resultFunc(films, 8)).toEqual([
      {id: 1, genre: `genre 1`},
      {id: 1, genre: `genre 2`},
      {id: 1, genre: `genre 3`},
      {id: 1, genre: `genre 4`},
      {id: 1, genre: `genre 4`},
      {id: 1, genre: `genre 4`},
      {id: 1, genre: `genre 5`},
      {id: 1, genre: `genre 6`},
    ]);
  });

  it(`getFilteredFilmsCount should correct return count`, () => {
    expect(getFilteredFilmsCount.resultFunc(films)).toEqual(16);
  });

  it(`getGenresListByFilms should correct calc genres list`, () => {
    expect(getGenresListByFilms.resultFunc(films)).toEqual([
      DEFAULT_GENRE_ITEM,
      `genre 1`,
      `genre 2`,
      `genre 3`,
      `genre 4`,
      `genre 5`,
      `genre 6`,
      `genre 7`,
      `genre 8`,
      `genre 9`,
    ]);
  });

  it(`getFilmsByCurrentGenre should correct filter films by default genre`, () => {
    expect(getFilmsByCurrentGenre.resultFunc(films, DEFAULT_GENRE_ITEM)).toEqual(films);
  });

  it(`getFilmsByCurrentGenre should correct filter films by selected genre`, () => {
    expect(getFilmsByCurrentGenre.resultFunc(films, `genre 4`)).toEqual([
      {id: 1, genre: `genre 4`},
      {id: 1, genre: `genre 4`},
      {id: 1, genre: `genre 4`},
    ]);
  });
});
