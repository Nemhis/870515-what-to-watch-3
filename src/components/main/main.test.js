import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

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

it(`Render correctly <Main>`, () => {
  const tree = renderer
    .create(<Main films={films}/>)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
