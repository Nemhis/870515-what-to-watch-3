import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator, SHOWN_FILMS_COUNT} from '../../reducer/operation/actions';
import {getGenresListByFilms, getSelectedGenre} from '../../reducer/operation/selectors';

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

const mapStateToProps = (state) => ({
  genres: getGenresListByFilms(state),
  selectedGenre: getSelectedGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre(selectedGenre) {
    dispatch(ActionCreator.changeGenreFilter(selectedGenre));
    dispatch(ActionCreator.changeShownFilmsCount(SHOWN_FILMS_COUNT));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
