import MockAdapter from 'axios-mock-adapter';

import {ActionType, ActionCreator, Operation} from './actions';
import {createAPI} from '../../api';
import Film from '../../adapter/film';
import Comment from '../../adapter/comment';

const api = createAPI(() => {});
const filmsRaw = [{
  'id': 1,
  'name': `The Grand Budapest Hotel`,
  'poster_image': `img/the-grand-budapest-hotel-poster.jpg`,
  'preview_image': `img/the-grand-budapest-hotel.jpg`,
  'background_image': `img/bg-the-grand-budapest-hotel.jpg`,
  'background_color': `#ffffff`,
  'video_link': `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  'preview_video_link': `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  'description': `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  'rating': 8.9,
  'scores_count': 240,
  'director': `Wes Andreson`,
  'starring': [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  'run_time': 99,
  'genre': `Comedy`,
  'released': 2014,
  'is_favorite': false
}];
const films = [
  new Film({
    'id': 1,
    'name': `The Grand Budapest Hotel`,
    'poster_image': `img/the-grand-budapest-hotel-poster.jpg`,
    'preview_image': `img/the-grand-budapest-hotel.jpg`,
    'background_image': `img/bg-the-grand-budapest-hotel.jpg`,
    'background_color': `#ffffff`,
    'video_link': `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    'preview_video_link': `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    'description': `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    'rating': 8.9,
    'scores_count': 240,
    'director': `Wes Andreson`,
    'starring': [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    'run_time': 99,
    'genre': `Comedy`,
    'released': 2014,
    'is_favorite': false
  })
];

const commentsRaw = [
  {
    'id': 1,
    'rating': 8.1,
    'comment': `test comment`,
    'date': `2018-04-04T16:00:00.000Z`,
    'user': {
      'id': 2,
      'name': `User name`,
    }
  }
];

const comments = [
  new Comment({
    'id': 1,
    'rating': 8.1,
    'comment': `test comment`,
    'date': `2018-04-04T16:00:00.000Z`,
    'user': {
      'id': 2,
      'name': `User name`,
    },
  })
];

describe(`Action creators work correctly`, () => {
  it(`Load films action return correct value`, () => {
    expect(ActionCreator.loadFilms(filmsRaw))
      .toEqual({
        type: ActionType.LOAD_FILMS,
        payload: films,
      });
  });

  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, filmsRaw);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: films
        });
      });
  });

  it(`Load films action return correct value`, () => {
    expect(ActionCreator.loadPromoFilm(filmsRaw[0]))
      .toEqual({
        type: ActionType.LOAD_PROMO_FILM,
        payload: films[0],
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, filmsRaw[0]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: films[0]
        });
      });
  });

  it(`Load comments action return correct value`, () => {
    expect(ActionCreator.loadComments(2, commentsRaw))
      .toEqual({
        type: ActionType.LOAD_COMMENTS,
        payload: {
          filmId: 2,
          comments
        },
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadComments(2);

    apiMock
      .onGet(`/comments/2`)
      .reply(200, commentsRaw);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: {
            filmId: 2,
            comments,
          }
        });
      });
  });
});
