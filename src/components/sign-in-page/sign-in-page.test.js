import React from 'react';
import renderer from 'react-test-renderer';

import SignInPage from './sign-in-page.jsx';

describe(`Render correctly <SignInPage>`, () => {
  it(`<SignInPage> correctly render`, () => {
    const tree = renderer
      .create(<SignInPage setErrorMessage={() => {}} onSubmit={Promise.resolve()} errorMessage={`Error message`}/>)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
