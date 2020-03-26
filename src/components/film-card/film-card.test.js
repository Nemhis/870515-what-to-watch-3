import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './film-card';

const film = {
  name: `test name`,
  previewImg: `/picture/src.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Render correctly <FilmCard>`, () => {
  const tree = renderer
    .create(
        <FilmCard
          film={film}
          onMouseEnter={() => {}}
          onFilmClick={() => {}}
        />
    ).toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
