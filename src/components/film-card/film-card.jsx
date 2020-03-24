import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({film, onFilmClick, onMouseEnter}) => {
  const {name, previewImg} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter}>
      <div className="small-movie-card__image">
        <img src={previewImg} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#" onClick={onFilmClick}>{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
};

export default FilmCard;
