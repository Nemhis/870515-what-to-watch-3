import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const getTextEstimation = (rating) => {
  rating = rating >= 0 && rating <= 10 ? rating : -1;
  let textEstimation = ``;

  switch (true) {
    case rating > 0 && rating < 3:
      textEstimation = `Bad`;
      break;
    case rating < 5:
      textEstimation = `Normal`;
      break;
    case rating < 8:
      textEstimation = `Good`;
      break;
    case rating < 10:
      textEstimation = `Very good`;
      break;
    case rating === 10:
      textEstimation = `Awesome`;
      break;
  }

  return textEstimation;
};

const FilmOverview = ({film}) => {
  const {rating, scoresCount, description, director, starring} = film;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getTextEstimation(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `) }</strong></p>
      </div>
    </Fragment>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired
};

export default FilmOverview;
