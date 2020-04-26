import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer/operation/actions';
import {connect} from 'react-redux';

const PromoFilmCard = ({film, onPlayButtonClick, children}) => {
  const {
    backgroundImg,
    posterImg,
    name,
    genre,
    released,
  } = film;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImg} alt={name} />
      </div>

      {children}

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImg} alt={name + ` poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                onPlayButtonClick(film);
              }}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImg: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick(film) {
    dispatch(ActionCreator.setPlayedFilm(film));
  }
});

export {PromoFilmCard};
export default connect(() => ({}), mapDispatchToProps)(PromoFilmCard);
