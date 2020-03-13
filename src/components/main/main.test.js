import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

const films = [`Test film 1`, `Test film 2`];

describe(`<Main>`, () => {
  it(`Render <Main>`, () => {
    const tree = renderer
      .create(<Main films={films} />)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
