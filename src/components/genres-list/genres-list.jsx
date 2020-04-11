import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator, DEFAULT_GENRE_ITEM, SHOWN_MOVIES_COUNT} from '../../actions';
import {arrayUnique} from '../../utils';

const MAX_GENRES_COUNT = 9;

const GenresList = ({genres, onSelectGenre, selectedGenre}) => (
  <ul className="catalog__genres-list">
    {genres.map((genre, index) => (
      <li key={index}
        className={`catalog__genres-item ${genre === selectedGenre ? `catalog__genres-item--active` : ``}`}>

        <a href="#" className="catalog__genres-link" onClick={(event) => {
          event.preventDefault();
          onSelectGenre(genre);
        }}>
          {genre}
        </a>
      </li>
    ))}
  </ul>
);

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectGenre: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

const getGenresByFilms = (films) => {
  let genres = films.map((film) => film.genre);
  genres = arrayUnique(genres);
  genres = genres.slice(0, MAX_GENRES_COUNT);
  genres.unshift(DEFAULT_GENRE_ITEM);

  return genres;
};

const mapStateToProps = ({allFilms, selectedGenre}) => {
  const genres = getGenresByFilms(allFilms);

  return {
    genres,
    selectedGenre,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre(selectedGenre) {
    dispatch(ActionCreator.changeGenreFilter(selectedGenre));
    dispatch(ActionCreator.changeShownFilmsCount(SHOWN_MOVIES_COUNT));
    dispatch(ActionCreator.applyGenreFilter(selectedGenre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
