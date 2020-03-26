import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card.jsx';
import withVideoPreview from '../../hocs/with-video-preview';

const FilmCardWrapped = withVideoPreview(FilmCard);

const FilmsList = ({films, onFilmNameClick}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, index) => (
        <FilmCardWrapped
          key={index}
          film={film}
          onFilmClick={onFilmNameClick}
        />
      ))}
    </div>
  );
};

FilmsList.defaultProps = {
  onFilmNameClick() {},
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  onFilmNameClick: PropTypes.func,
};

export default FilmsList;
