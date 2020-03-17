import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card.jsx';

const FilmsList = ({films, onFilmNameClick, onFilmMouseEnter}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, index) => (
        <FilmCard
          key={index}
          film={film}
          onMouseEnter={onFilmMouseEnter}
          onFilmClick={onFilmNameClick}
        />
      ))}
    </div>
  );
};

FilmsList.defaultProps = {
  onFilmNameClick() {},
  onFilmMouseEnter() {},
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  onFilmNameClick: PropTypes.func,
  onFilmMouseEnter: PropTypes.func,
};

export default FilmsList;
