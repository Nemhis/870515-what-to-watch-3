import React from 'react';
import renderer from 'react-test-renderer';

import FilmDetails from './film-details';

const film = {
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
};

it(`Render correctly <FilmDetails>`, () => {
  const tree = renderer
    .create(<FilmDetails film={film}/>)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
