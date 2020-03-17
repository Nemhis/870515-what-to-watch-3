import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './film-card';


const film = {
  name: `test name`,
  picture: `/picture/src.jpg`,
};

it(`Render correctly <FilmCard>`, () => {
  const tree = renderer
    .create(
        <FilmCard
          film={film}
          onMouseEnter={() => {}}
          onFilmClick={() => {}}
        />
    ).toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
