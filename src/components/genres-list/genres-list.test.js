import React from 'react';
import renderer from 'react-test-renderer';

import {GenresList} from './genres-list.jsx';

const films = [
  {genre: `genre 1`},
  {genre: `genre 2`},
];

it(`Render correctly <GenresList>`, () => {
  const tree = renderer
    .create(<GenresList films={films} selectedGenre={`genre 2`} onSelectGenre={() => {
    }}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
