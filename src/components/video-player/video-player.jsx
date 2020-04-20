import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  render() {
    const {poster, src, muted, width, height} = this.props;

    return <video width={width} height={height} poster={poster} src={src} muted={muted} ref={this._videoRef} />;
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.ontimeupdate = () => {
      this.props.onTimeUpdate({
        elapsedTime: Math.floor(video.currentTime),
        duration: Math.floor(video.duration),
        timeLeft: Math.floor(video.duration - video.currentTime)
      });
    };
  }

  componentDidUpdate() {
    const {isPlaying, isFullScreen} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    if (isFullScreen) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }
}

VideoPlayer.defaultProps = {
  onTimeUpdate: () => {},
  isFullScreen: false,
  muted: false,
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,

  isFullScreen: PropTypes.bool,
  onTimeUpdate: PropTypes.func,
  muted: PropTypes.bool
};

export default VideoPlayer;
