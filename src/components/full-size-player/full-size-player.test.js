import React from 'react';
import renderer from 'react-test-renderer';

import {FullSizePlayer} from './full-size-player.jsx';

const film = {
  name: `test film name`,
};

const playerMarkup = `<div> this is player </div>`;

it(`Render correctly <FullSizePlayer>`, () => {
  const options = {
    createNodeMock: () => ({}),
  };

  const tree = renderer
    .create(
        <FullSizePlayer
          film={film}
          renderPlayer={() => playerMarkup}
          onPlay={() => {}}
          onPause={() => {}}
          onRequestFullScreen={() => {}}
          onExit={() => {}}
          isPlaying={false}
          duration={0}
          elapsedTime={0}
        />, options
    ).toJSON(`test`);

  expect(tree).toMatchSnapshot();
});
