import React from 'react';
import renderer from 'react-test-renderer';

import {ShowMoreButton} from './show-more-button.jsx';


describe(`Render correctly <ShowMoreButton>`, () => {
  it(`Should render when visible is true`, () => {
    const tree = renderer
      .create(<ShowMoreButton isVisible={true} onClick={() => {}} shownMoviesCount={1} />).toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });

  it(`Shouldn't render when visible is false`, () => {
    const tree = renderer
      .create(<ShowMoreButton isVisible={false} onClick={() => {}} shownMoviesCount={1} />).toJSON(`test`);

    expect(tree).toMatchSnapshot();
  });
});
