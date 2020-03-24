import React from 'react';
import renderer from 'react-test-renderer';

import FilmsList from './films-list';

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
  {
    name: `Aviator`,
    previewImg: `img/aviator.jpg`,
  }
];

it(`Render correctly <FilmCard>`, () => {
  const tree = renderer
    .create(<FilmsList films={films} />).toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
