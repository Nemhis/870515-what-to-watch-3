import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const film = {
  previewImg: `/picture/src.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Render correctly <VideoPlayer>`, () => {
  const options = {
    createNodeMock: () => ({}),
  };

  const tree = renderer
    .create(
        <VideoPlayer
          isPlaying={false}
          src={film.previewVideoLink}
          poster={film.previewImg}
          width={`100`}
          height={`100`}
        />, options
    ).toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
