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

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.defaultProps = {
  muted: false,
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,

  muted: PropTypes.bool
};

export default VideoPlayer;
