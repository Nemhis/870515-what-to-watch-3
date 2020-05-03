import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import dayjs from 'dayjs';

import {getCommentsForSelectedFilm} from '../../reducer/operation/selectors';
import {isOdd} from '../../utils';


class FilmReviews extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  _renderReview({id, comment, rating, date, user}) {
    const dayjsDate = dayjs(date);

    return (
      <div className="review" key={id}>
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={dayjsDate.format(`YYYY-MM-DD`)}>
              {dayjsDate.format(`MMMM D, YYYY`)}
            </time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
    );
  }

  _divideComments(comments) {
    const even = [];
    const odd = [];

    comments.forEach((review, index) => {
      if (isOdd(index)) {
        odd.push(review);
      } else {
        even.push(review);
      }
    });

    return [even, odd];
  }

  render() {
    const {comments} = this.props;
    const [leftColumn, rightColumn] = this._divideComments(comments);

    return (
      <div className="movie-card__reviews movie-card__row">
        {leftColumn.length &&
          <div className="movie-card__reviews-col">
            {leftColumn.map(this._renderReview)}
          </div>
        }

        {rightColumn.length &&
          <div className="movie-card__reviews-col">
            {rightColumn.map(this._renderReview)}
          </div>
        }
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
