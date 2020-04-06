import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './film-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  name: `test name`,
  previewImg: `/picture/src.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const renderVideoPlayer = () => <div>This is video player</div>;

describe(`<FilmCard> e2e tests`, () => {
  it(`Film name link should be pressed`, () => {
    const onFilmClick = jest.fn();
    const filmCard = shallow(
        <FilmCard
          film={film}
          onFilmClick={onFilmClick}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          renderVideoPlayer={renderVideoPlayer}
        />
    );

    filmCard
      .find(`.small-movie-card__link`)
      .at(0)
      .simulate(`click`, {preventDefault() {}});

    expect(onFilmClick.mock.calls.length).toBe(1);
  });

  it(`OnMouseEnter and OnMouseLeave callback should be triggered`, () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    const filmCard = shallow(
        <FilmCard
          film={film}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          renderVideoPlayer={renderVideoPlayer}
          onFilmClick={() => {}}
        />
    );

    const cardWrapped = filmCard
      .find(`.small-movie-card`)
      .at(0);

    cardWrapped.simulate(`mouseEnter`);
    expect(onMouseEnter.mock.calls.length).toBe(1);

    cardWrapped.simulate(`mouseLeave`);
    expect(onMouseEnter.mock.calls.length).toBe(1);
  });
});
