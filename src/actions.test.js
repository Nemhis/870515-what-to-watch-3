import {ActionType, ActionCreator} from './actions';
import {Screen} from './const';

const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImg: `img/the-grand-budapest-hotel.jpg`,
    backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
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
});
