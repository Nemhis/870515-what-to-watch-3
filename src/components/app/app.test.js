import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    name: `Bohemian Rhapsody`,
    picture: `img/bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    picture: `img/macbeth.jpg`,
  },
];

it(`Render correctly <App>`, () => {
  const tree = renderer
    .create(<App films={films}/>)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
