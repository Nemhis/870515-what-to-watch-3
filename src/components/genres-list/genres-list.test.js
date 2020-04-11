import React from 'react';
import renderer from 'react-test-renderer';

import {GenresList} from './genres-list.jsx';

const genres = [`genre 1`, `genre 2`];

it(`Render correctly <GenresList>`, () => {
  const tree = renderer
    .create(<GenresList genres={genres} selectedGenre={`genre 2`} onSelectGenre={() => {
    }}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
