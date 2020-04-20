import React, {PureComponent} from 'react';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        isFullScreen: false,
        elapsedTime: 0,
        timeLeft: 0,
        duration: 0,
      };

      this._renderVideoPlayer = this._renderVideoPlayer.bind(this);
    }

    _renderVideoPlayer({previewImg, videoLink}) {
      return <VideoPlayer
        src={videoLink}
        poster={previewImg}
        isPlaying={this.state.isPlaying}
        isFullScreen={this.state.isFullScreen}
        onTimeUpdate={({elapsedTime, timeLeft, duration}) => {
          this.setState({elapsedTime, timeLeft, duration});
        }}
        onEnded={() => {
          this.setState({
            isPlaying: false
          });
        }}
        width={`100%`}
        height={`100%`}
      />;
    }

    render() {
      return (
        <Component
          {...this.props}
          duration={this.state.duration}
          elapsedTime={this.state.elapsedTime}
          renderPlayer={this._renderVideoPlayer}
          isPlaying={this.state.isPlaying}
          onPlay={() => {
            this.setState({
              isPlaying: true,
            });
          }}
          onPause={() => {
            this.setState({
              isPlaying: false,
            });
          }}
          onRequestFullScreen={() => {
            this.setState({
              isFullScreen: true,
            });
          }}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
