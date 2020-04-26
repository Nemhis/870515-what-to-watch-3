import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {PromoFilmCard} from './promo-film-card.jsx';

const film = {
  name: `The Grand Budapest Hotel`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  genre: `Comedy`,
  released: 2014,
};

it(`Render correctly <PromoFilmCard>`, () => {
  const shallowRenderer = new ShallowRenderer();
  const tree = shallowRenderer.render(<PromoFilmCard film={film} onPlayButtonClick={() => {}}> <div>children</div> </PromoFilmCard>);

  expect(tree).toMatchSnapshot();
});
