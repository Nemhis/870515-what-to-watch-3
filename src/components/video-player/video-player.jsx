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

    video.onended = this.props.onEnded;
  }

  componentDidUpdate() {
    const {isPlaying, isFullScreen, isStopped} = this.props;
    const video = this._videoRef.current;

    if (isStopped) {
      video.load();
    } else if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    if (isFullScreen) {
      video.requestFullscreen();
    }
  }
}

VideoPlayer.defaultProps = {
  onTimeUpdate: () => {},
  onEnded: () => {},
  isFullScreen: false,
  muted: false,
  isStopped: false,
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,

  isFullScreen: PropTypes.bool,
  onTimeUpdate: PropTypes.func,
  onEnded: PropTypes.func,
  muted: PropTypes.bool,
  isStopped: PropTypes.bool,
};

export default VideoPlayer;
