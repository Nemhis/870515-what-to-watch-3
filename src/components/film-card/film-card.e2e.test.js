import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './film-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  name: `test name`,
  picture: `/picture/src.jpg`,
};

describe(`<Main> e2e tests`, () => {
  it(`Film name link should be pressed`, () => {
    const onFilmClick = jest.fn();
    const main = shallow(
        <FilmCard
          film={film}
          onFilmClick={onFilmClick}
          onMouseEnter={() => {}}
        />
    );

    main
      .find(`.small-movie-card__link`)
      .at(0)
      .simulate(`click`);

    expect(onFilmClick.mock.calls.length).toBe(1);
  });

  it(`OnMouseEnter callback should be triggered`, () => {
    const onMouseEnter = jest.fn();
    const main = shallow(
        <FilmCard
          film={film}
          onMouseEnter={onMouseEnter}
          onFilmClick={() => {}}
        />
    );

    main
      .find(`.small-movie-card`)
      .at(0)
      .simulate(`mouseEnter`);

    expect(onMouseEnter.mock.calls.length).toBe(1);
  });
});
