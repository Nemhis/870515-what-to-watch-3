import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCommentsForSelectedFilm} from '../../reducer/operation/selectors';


class FilmReviews extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const {comments} = this.props;

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                Mittel-European kitsch of one of the director`s funniest and most exquisitely designed movies in
                years.</p>

              <footer className="review__details">
                <cite className="review__author">Kate Muir</cite>
                <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,9</div>
          </div>
        </div>
      </div>
    );
  }
}

FilmReviews.propTypes = {
  onMount: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  comments: getCommentsForSelectedFilm(state),
});

export {FilmReviews};
export default connect(mapStateToProps)(FilmReviews);
