import {reducer} from './reducer.js';
import {ActionType, DEFAULT_GENRE_ITEM, SHOWN_MOVIES_COUNT} from './actions';
import {Screen} from './const';

const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImg: `img/the-grand-budapest-hotel.jpg`,
    backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Comedy`,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Bohemian Rhapsody`,
    genre: `Comedy`,
    previewImg: `img/bohemian-rhapsody.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Macbeth`,
    genre: `Crime`,
    previewImg: `img/macbeth.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Aviator`,
    genre: `Documentary`,
    previewImg: `img/aviator.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `We need to talk about Kevin`,
    genre: `Horror`,
    previewImg: `img/we-need-to-talk-about-kevin.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `What We Do in the Shadows`,
    genre: `Romance`,
    previewImg: `img/what-we-do-in-the-shadows.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Revenant`,
    genre: `Sci-Fi`,
    previewImg: `img/revenant.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Johnny English`,
    genre: `Thrillers`,
    previewImg: `img/johnny-english.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Kids & Family`,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Documentary`,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Test genre 1`,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Test genre 2`,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
];

describe(`Reducer tests`, () => {
  it(`Default store state`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        shownFilms: films.slice(0, SHOWN_MOVIES_COUNT),
        films,
        filmsCount: films.length,
        allFilms: films,
        selectedFilm: null,
        screen: Screen.MAIN,
        selectedGenre: DEFAULT_GENRE_ITEM,
        shownMoviesCount: SHOWN_MOVIES_COUNT,
      });
  });

  it(`Reducer should change genre filter`, () => {
    expect(reducer({
      films,
      selectedGenre: DEFAULT_GENRE_ITEM,
      selectedFilm: null,
    }, {
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `test genre`
    })).toEqual({
      films,
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
});
