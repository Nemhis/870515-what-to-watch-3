import {ActionType, ActionCreator} from './actions';

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Comedy`,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Comedy`,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

describe(`Action creators work correctly`, () => {
  it(`Load films action return correct value`, () => {
    expect(ActionCreator.loadFilms(films))
      .toEqual({
        type: ActionType.LOAD_FILMS,
        payload: films,
      });
  });
});
