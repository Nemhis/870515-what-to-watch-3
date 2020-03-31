import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../../components/video-player/video-player.jsx';

const withVideoPreview = (Component) => {
  class WithVideoPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        inFocus: false,
      };

      this._onMouseEnter = this._onMouseEnter.bind(this);
      this._onMouseLeave = this._onMouseLeave.bind(this);
      this._renderVideoPlayer = this._renderVideoPlayer.bind(this);
    }

    _onMouseEnter() {
      this.setState({
        inFocus: true
      });

      setTimeout(() => {
        if (this.state.inFocus) {
          this.setState({isPlaying: true});
        }
      }, 1000);
    }

    _onMouseLeave() {
      this.setState({
        inFocus: false,
        isPlaying: false,
      });
    }

    _renderVideoPlayer({previewImg, previewVideoLink}) {
      return <VideoPlayer
        src={previewVideoLink}
        poster={previewImg}
        isPlaying={this.state.isPlaying}
        width={`100%`}
        height={`100%`}
        muted={true}
      />;
    }

    render() {
      return (
        <Component
          {...this.props}
          renderVideoPlayer={this._renderVideoPlayer}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
        />
      );
    }
  }

  WithVideoPreview.propTypes = {
    film: PropTypes.shape({
      previewImg: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    }).isRequired,
  };

  return WithVideoPreview;
};

export default withVideoPreview;
