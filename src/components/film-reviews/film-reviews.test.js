import React from 'react';
import renderer from 'react-test-renderer';

import FilmReviews from './film-reviews.jsx';

it(`Render correctly <FilmReviews>`, () => {
  const tree = renderer
    .create(<FilmReviews />)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
