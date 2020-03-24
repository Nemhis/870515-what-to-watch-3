import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    name: `Bohemian Rhapsody`,
    previewImg: `img/bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    previewImg: `img/macbeth.jpg`,
  },
];

it(`Render correctly <Main>`, () => {
  const tree = renderer
    .create(<Main films={films}/>)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
