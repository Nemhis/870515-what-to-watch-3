import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {App} from './app.jsx';
import {AuthorizationStatus, Screen} from '../../const';
import {DEFAULT_GENRE_ITEM, SHOWN_FILMS_COUNT} from '../../reducer/operation/actions';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImg: `img/the-grand-budapest-hotel.jpg`,
    backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false
  }
];

it(`Render correctly <App>`, () => {
  const options = {
    createNodeMock: () => ({}),
  };

  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: films,
      promoFilm: films[0],
    },
    [NameSpace.OPERATION]: {
      filmsCount: films.length,
      selectedFilm: null,
      screen: Screen.MAIN,
      selectedGenre: DEFAULT_GENRE_ITEM,
      shownFilmsCount: SHOWN_FILMS_COUNT,
    },
    [NameSpace.USER]: {
      user: null,
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(<Provider store={store}><App screen={Screen.MAIN} login={() => {}}/></Provider>, options)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
