import React from 'react';
import renderer from 'react-test-renderer';

import SignInPage from './sign-in-page.jsx';

describe(`Render correctly <SignInPage>`, () => {
  it(`<SignInPage> correctly render`, () => {
    const tree = renderer
      .create(<SignInPage
        setErrorMessage={() => {}}
        unsetErrorMessage={() => {}}
        errorMessage={`Error message`}
        onSubmit={() => Promise.resolve()}
      />)
      .toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
