import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmCard from '../film-card/film-card.jsx';
import withVideoPreview from '../../hocs/with-video-preview/with-video-preview.jsx';

import {ActionCreator} from '../../reducer/operation/actions';
import {Screen} from '../../const';

const FilmCardWrapped = withVideoPreview(FilmCard);

const FilmsList = ({films, onFilmNameClick}) => (
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

FilmsList.defaultProps = {
  onFilmNameClick() {},
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  onFilmNameClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onFilmNameClick: (film) => {
    dispatch(ActionCreator.selectFilm(film));
    dispatch(ActionCreator.changeScreen(Screen.FILM_PAGE));
  }
});

export {FilmsList};
export default connect(() => ({}), mapDispatchToProps)(FilmsList);
