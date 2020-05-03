import React from 'react';
import renderer from 'react-test-renderer';

import UserInfo from './user-info.jsx';

const user = {
  avatarUrl: `test/url.png`
};

describe(`Render correctly <UserInfo>`, () => {
  it(`<UserInfo> correctly render with no user`, () => {
    const tree = renderer
      .create(<UserInfo user={null}/>)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });

  it(`<UserInfo> correctly render with user`, () => {
    const tree = renderer
      .create(<UserInfo user={user}/>)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
