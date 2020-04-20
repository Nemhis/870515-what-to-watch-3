import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {FullSizePlayer} from './full-size-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  name: `test film name`,
};

const playerMarkup = `<div> this is player </div>`;

describe(`<FullSizePlayer> e2e tests`, () => {
  it(`FullSizePlayer should call callbacks`, () => {
    const onPlay = jest.fn();
    const onPause = jest.fn();
    const onRequestFullScreen = jest.fn();
    const onExit = jest.fn();

    const videoPlayerWrapper = shallow(
        <FullSizePlayer
          film={film}
          renderPlayer={() => playerMarkup}
          onPlay={onPlay}
          onPause={onPause}
          onRequestFullScreen={onRequestFullScreen}
          onExit={onExit}
          isPlaying={false}
          duration={0}
          elapsedTime={0}
        />
    );

    videoPlayerWrapper.find(`.player__play`).simulate(`click`);
    expect(onPlay.mock.calls.length).toBe(1);

    videoPlayerWrapper.setProps({
      isPlaying: true,
    });

    videoPlayerWrapper.find(`.player__play`).simulate(`click`);
    expect(onPause.mock.calls.length).toBe(1);

    videoPlayerWrapper.find(`.player__full-screen`).simulate(`click`);
    expect(onRequestFullScreen.mock.calls.length).toBe(1);

    videoPlayerWrapper.find(`.player__exit`).simulate(`click`);
    expect(onExit.mock.calls.length).toBe(1);
  });
});
