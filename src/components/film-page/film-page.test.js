import React from 'react';
import renderer from 'react-test-renderer';

import {FilmPage} from './film-page.jsx';

const film = {
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
};

const films = [
  {
    id: 1,
    genre: `Comedy`,
  },
  {
    id: 2,
    genre: `Drama`,
  },
];

it(`Render correctly <FilmDetailInfo>`, () => {
  const tree = renderer
    .create(<FilmPage films={films} film={film} activeItemIndex={0} onItemSelect={() => {}} />)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
