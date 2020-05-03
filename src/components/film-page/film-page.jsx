import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Tabs from '../tabs/tabs.jsx';
import Tab from '../tab/tab.jsx';
import FilmsList from '../films-list/films-list.jsx';
import FilmOverview from '../film-overview/film-overview.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import FilmReviews from '../film-reviews/film-reviews.jsx';
import Header from '../header/header.jsx';
import UserInfo from '../user-info/user-info.jsx';

import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

import {ActionCreator} from '../../reducer/operation/actions';
import {getAllFilms} from '../../reducer/data/selectors';
import {getSelectedFilm} from '../../reducer/operation/selectors';
import {Operation} from '../../reducer/data/actions';

const TabsWrapped = withActiveItem(Tabs, 0);
const MAX_SIMILAR_FILMS_COUNT = 4;

class FilmPage extends PureComponent {
  _collectSimilarFilms({id, genre}) {
    let similarFilms = this.props.films.filter((film) => film.genre === genre && film.id !== id);
    similarFilms = similarFilms.slice(0, MAX_SIMILAR_FILMS_COUNT);

    return similarFilms;
  }

  render() {
    const {
      film,
      onReviewPageMount,
      onNameClick,
      onPosterClick,
      onFilmNameClick,
      onPlayButtonClick,
    } = this.props;

    const {
      backgroundImg,
      posterImg,
      name,
      genre,
      released,
    } = film;

    const similarFilms = this._collectSimilarFilms(film);

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImg} alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header additionalClass={`movie-card__head`}>
              <UserInfo />
            </Header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title" onClick={onNameClick}>{name}</h2>
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
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImg} alt="The Grand Budapest Hotel poster" width="218"
                  height="327" onClick={onPosterClick}/>
              </div>

              <div className="movie-card__desc">
                <TabsWrapped>
                  <Tab name={`Overview`}> <FilmOverview film={film}/> </Tab>
                  <Tab name={`Details`}> <FilmDetails film={film}/> </Tab>
                  <Tab name={`Reviews`}>
                    <FilmReviews onMount={() => onReviewPageMount(film)} />
                  </Tab>
                </TabsWrapped>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          {similarFilms.length ?
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <FilmsList films={similarFilms} onFilmNameClick={onFilmNameClick}/>
            </section>
            : ``
          }

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

FilmPage.defaultProps = {
  onNameClick: () => {},
  onPosterClick: () => {},
  onFilmNameClick: () => {},
};

FilmPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImg: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,

  onPlayButtonClick: PropTypes.func.isRequired,
  onReviewPageMount: PropTypes.func.isRequired,
  onFilmNameClick: PropTypes.func,
  onNameClick: PropTypes.func,
  onPosterClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  film: getSelectedFilm(state),
  films: getAllFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick(film) {
    dispatch(ActionCreator.setPlayedFilm(film));
  },

  onReviewPageMount(film) {
    dispatch(Operation.loadComments(film.id));
  }
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
