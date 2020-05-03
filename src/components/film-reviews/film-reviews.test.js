import React from 'react';
import renderer from 'react-test-renderer';

import {FilmReviews} from './film-reviews.jsx';
import Comment from '../../adapter/comment';

const comments = [
  new Comment({
    'id': 1,
    'rating': 8.1,
    'comment': `test comment`,
    'date': `2018-04-04T16:00:00.000Z`,
    'user': {
      'id': 2,
      'name': `User name`,
    },
  }),
];

it(`Render correctly <FilmReviews>`, () => {
  const tree = renderer
    .create(<FilmReviews onMount={() => {}} comments={comments}/>)
    .toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
