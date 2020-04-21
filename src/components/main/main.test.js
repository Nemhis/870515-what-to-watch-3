import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {Main} from './main.jsx';

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `Comedy`,
    released: 2014,
    previewImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Bohemian Rhapsody`,
    previewImg: `img/bohemian-rhapsody.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Macbeth`,
    previewImg: `img/macbeth.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];
const genres = [`Genre 1`, `Genre 2`];

it(`Render correctly <Main>`, () => {
  const shallowRenderer = new ShallowRenderer();
  const tree = shallowRenderer.render(<Main films={films} genres={genres} onSelectGenre={() => {}} />);

  expect(tree).toMatchSnapshot();
});
