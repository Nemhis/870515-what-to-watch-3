import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({film, onFilmClick, renderVideoPlayer, onMouseEnter, onMouseLeave}) => {
  const {name} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        {renderVideoPlayer(film)}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#" onClick={(event) => {
          event.preventDefault();
          onFilmClick(film);
        }}>{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  renderVideoPlayer: PropTypes.func.isRequired,
};

export default FilmCard;
