import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      inFocus: false,
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
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

  render() {
    const {film, onFilmClick} = this.props;
    const {name, previewImg, previewVideoLink} = film;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        <div className="small-movie-card__image">
          <VideoPlayer src={previewVideoLink} poster={previewImg} isPlaying={this.state.isPlaying}/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="#" onClick={() => onFilmClick(film)}>{name}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }).isRequired,
  onFilmClick: PropTypes.func.isRequired,
};

export default FilmCard;
