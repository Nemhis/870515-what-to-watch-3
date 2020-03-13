import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const films = [`Test film 1`, `Test film 2`];

describe(`<App>`, () => {
  it(`Render <App>`, () => {
    const tree = renderer
      .create(<App films={films} />)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
