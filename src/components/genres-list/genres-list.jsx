import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_ITEM = `All genres`;

const GenresList = ({genres, onSelectGenre, selectedGenre}) => {
  genres.unshift(DEFAULT_ITEM);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li key={index}
          className={`catalog__genres-item ${genre === selectedGenre ? `catalog__genres-item--active` : ``}`}>

          <a href="#" className="catalog__genres-link" onClick={() => {
            if (genre === DEFAULT_ITEM) {
              onSelectGenre(null);
            } else {
              onSelectGenre(genre);
            }
          }}>
            {genre}
          </a>
        </li>
      ))}
    </ul>);
};

GenresList.defaultProps = {
  selectedGenre: DEFAULT_ITEM,
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
};

export default GenresList;
