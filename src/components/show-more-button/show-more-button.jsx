import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator, SHOWN_FILMS_COUNT} from '../../reducer/operation/actions';
import {getFilteredFilmsCount, getShownFilms} from '../../reducer/data/selectors';
import {getShownFilmsCount} from '../../reducer/operation/selectors';

const ShowMoreButton = ({isVisible, onClick, shownMoviesCount}) => {
  return isVisible ?
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => {
        onClick(shownMoviesCount + SHOWN_FILMS_COUNT);
      }}>Show more</button>
    </div>
    :
    null;
};

ShowMoreButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  shownMoviesCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  isVisible: getFilteredFilmsCount(state) > getShownFilms(state).length,
  shownMoviesCount: getShownFilmsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(shownMoviesCount) {
    dispatch(ActionCreator.changeShownFilmsCount(shownMoviesCount));
    dispatch(ActionCreator.sliceFilmsByShownCount());
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
