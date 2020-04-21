import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PromoFilmCard from './promo-film-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  name: `The Grand Budapest Hotel`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  genre: `Comedy`,
  released: 2014,
};

it(`<PromoFilmCard> should call onPlayButtonClick`, () => {
  const onPlayButtonClick = jest.fn();
  const promoFilmCardWrapper = shallow(
      <PromoFilmCard film={film} onPlayButtonClick={onPlayButtonClick} />
  );

  promoFilmCardWrapper
    .find(`.movie-card__button`)
    .at(0)
    .simulate(`click`);

  expect(onPlayButtonClick.mock.calls.length).toBe(1);
});
