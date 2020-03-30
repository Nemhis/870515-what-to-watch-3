import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from './genres-list.jsx';

const genres = [
  `genre 1`,
  `genre 2`,
];

describe(`Render correctly <GenresList>`, () => {
  it(`Default active item`, () => {
    const tree = renderer
      .create(<GenresList genres={genres} selectedGenre={null} onSelectGenre={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Genre active items`, () => {
    const tree = renderer
      .create(<GenresList genres={genres} selectedGenre={`genre 2`} onSelectGenre={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
