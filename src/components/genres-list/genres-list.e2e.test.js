import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GenresList} from './genres-list.jsx';
import {DEFAULT_GENRE_ITEM} from '../../actions';

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [
  {genre: `genre 1`},
  {genre: `genre 2`},
];

it(`<GenresList> pass correct value on select genre`, () => {
  const onGenreSelect = jest.fn((...args) => [args]);
  const genreListWrapper = shallow(
      <GenresList
        films={films}
        onSelectGenre={onGenreSelect}
        selectedGenre={DEFAULT_GENRE_ITEM}
      />
  );

  genreListWrapper
    .find(`.catalog__genres-link`)
    .at(1)
    .simulate(`click`, {
      preventDefault() {},
    });

  expect(onGenreSelect.mock.calls[0][0]).toBe(`genre 1`);
});
