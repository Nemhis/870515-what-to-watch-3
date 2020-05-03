import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header.jsx';

const children = <div>This is children</div>;

describe(`Render correctly <Header>`, () => {
  it(`<Header> correctly render with children`, () => {
    const tree = renderer
      .create(<Header>{children}</Header>)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
