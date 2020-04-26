import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header.jsx';

const user = {
  avatarUrl: `test/url.png`
};

describe(`Render correctly <Header>`, () => {
  it(`<Header> correctly render with no user`, () => {
    const tree = renderer
      .create(<Header user={null}/>)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });

  it(`<Header> correctly render with user`, () => {
    const tree = renderer
      .create(<Header user={user}/>)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
