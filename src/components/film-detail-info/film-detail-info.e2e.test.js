import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmDetailInfo from './film-detail-info.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImg: `img/the-grand-budapest-hotel.jpg`,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://some-link`,
  previewVideoLink: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false
};

describe(`<FilmCard> e2e tests`, () => {
  it(`Film name should be pressed`, () => {
    const onFilmClick = jest.fn();
    const filmDetail = shallow(
        <FilmDetailInfo
          film={film}
          onNameClick={onFilmClick}
          activeItemIndex={0}
          onItemSelect={() => {}}
        />
    );

    filmDetail
      .find(`.movie-card__title`)
      .at(0)
      .simulate(`click`);

    expect(onFilmClick.mock.calls.length).toBe(1);
  });

  it(`Film poster should be pressed`, () => {
    const onPosterClick = jest.fn();
    const filmDetail = shallow(
        <FilmDetailInfo
          film={film}
          onPosterClick={onPosterClick}
          activeItemIndex={0}
          onItemSelect={() => {}}
        />
    );

    filmDetail
      .find(`.movie-card__poster img`)
      .at(0)
      .simulate(`click`);

    expect(onPosterClick.mock.calls.length).toBe(1);
  });
});
