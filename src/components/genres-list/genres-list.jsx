import React from 'react';
import PropTypes from 'prop-types';

const GenresList = ({genres, onSelectGenre, selectedGenre}) => {
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${selectedGenre === null ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={() => onSelectGenre(null)}>All genres</a>
      </li>

      ${genres.map((genre, index) => (
        <li key={index}
          className={`catalog__genres-item ${genre === selectedGenre ? `catalog__genres-item--active` : ``}`}>

          <a href="#" className="catalog__genres-link" onClick={() => onSelectGenre(genre)}>{genre}</a>
        </li>
      ))}
    </ul>);
};

GenresList.defaultProps = {
  selectedGenre: null,
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
};

export default GenresList;
