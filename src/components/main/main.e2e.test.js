import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});


const films = [`Test film`];

describe(`<Main> e2e tests`, () => {
  it(`Film name link should be pressed`, () => {
    const onFilmNameClick = jest.fn();
    const main = shallow(<Main films={films} onFilmNameClick={onFilmNameClick} />);

    main
      .find(`.small-movie-card__link`)
      .props()
      .onClick();

    expect(onFilmNameClick.mock.calls.length).toBe(1);
  });
});
