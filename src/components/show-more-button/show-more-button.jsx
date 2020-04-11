import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator, SHOWN_MOVIES_COUNT} from '../../actions';

const ShowMoreButton = ({isVisible, onClick, shownMoviesCount}) => {
  return isVisible ?
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => {
        onClick(shownMoviesCount + SHOWN_MOVIES_COUNT);
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

const mapStateToProps = ({filmsCount, shownFilms, shownMoviesCount}) => ({
  isVisible: filmsCount > shownFilms.length,
  shownMoviesCount,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(shownMoviesCount) {
    dispatch(ActionCreator.changeShownFilmsCount(shownMoviesCount));
    dispatch(ActionCreator.sliceFilmsByShownCount());
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
