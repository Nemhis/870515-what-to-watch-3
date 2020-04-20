import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {formatDuration} from '../../utils';

class FullSizePlayer extends PureComponent {
  componentDidMount() {
    this.props.onPlay();
  }

  _renderPlayButton() {
    const {isPlaying, onPlay, onPause} = this.props;
    let button;

    if (isPlaying) {
      button = (
        <button type="button" className="player__play" onClick={onPause}>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </button>
      );
    } else {
      button = (
        <button type="button" className="player__play" onClick={onPlay}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
        </button>
      );
    }

    return button;
  }

  render() {
    const {film, renderPlayer, elapsedTime, duration} = this.props;
    const {name} = film;
    let elapsedTimePercent = 0;
    let formattedElapsedTime = ``;

    if (duration > 0) {
      formattedElapsedTime = formatDuration(duration - elapsedTime);
      elapsedTimePercent = Math.floor((elapsedTime / duration) * 100);
    }

    return (
      <div className="player">
        {renderPlayer(film)}

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={elapsedTimePercent} max="100" />
              <div className="player__toggler" style={{left: elapsedTimePercent + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value" style={{color: `black`}}>{formattedElapsedTime}</div>
          </div>

          <div className="player__controls-row">
            {this._renderPlayButton()}

            <div className="player__name">{name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

FullSizePlayer.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  elapsedTime: PropTypes.number,
  duration: PropTypes.number.isRequired,
};

const mapStateToProps = ({playedFilm}) => ({
  film: playedFilm,
});

export {FullSizePlayer};
export default connect(mapStateToProps)(FullSizePlayer);
