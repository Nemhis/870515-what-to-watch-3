import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

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
  const tree = renderer
    .create(<App films={films}/>)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
