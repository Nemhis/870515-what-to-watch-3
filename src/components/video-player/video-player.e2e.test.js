import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  previewImg: `/picture/src.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

describe(`<VideoPlayer> e2e tests`, () => {
  it(`VideoPlayer should play video`, () => {
    const onPlay = jest.fn();
    const onLoad = jest.fn();

    const videoPlayerWrapper = shallow(
        <VideoPlayer
          src={film.previewVideoLink}
          poster={film.previewImg}
          isPlaying={false}
          width={`100`}
          height={`100`}
        />
    );

    videoPlayerWrapper.instance()._videoRef.current = {
      play() {
        onPlay();
      },
      load() {
        onLoad();
      },
    };

    videoPlayerWrapper.setProps({
      isPlaying: true,
    });

    expect(onPlay.mock.calls.length).toBe(1);

    videoPlayerWrapper.setProps({
      isPlaying: false,
    });

    expect(onLoad.mock.calls.length).toBe(1);
  });
});
