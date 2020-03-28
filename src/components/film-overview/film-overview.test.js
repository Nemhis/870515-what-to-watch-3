import React from 'react';
import renderer from 'react-test-renderer';

import FilmOverview from './film-overview';

const film = {
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
};

it(`Render correctly <FilmOverview>`, () => {
  const tree = renderer
    .create(<FilmOverview film={film}/>)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
