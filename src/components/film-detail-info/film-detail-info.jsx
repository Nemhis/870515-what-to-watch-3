import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Tabs from '../tabs/tabs.jsx';
import FilmsList from '../films-list/films-list.jsx';
import FilmOverview from '../film-overview/film-overview.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import FilmReviews from '../film-reviews/film-reviews.jsx';

const tabs = [
  {
    name: `Overview`,
    component: FilmOverview,
  },
  {
    name: `Details`,
    component: FilmDetails,
  },
  {
    name: `Reviews`,
    component: FilmReviews,
  }
];

class FilmDetailInfo extends PureComponent {
  render() {
    const {
      film,
      similarFilms,
      activeItemIndex,
      onNameClick,
      onPosterClick,
      onFilmNameClick,
      onItemSelect
    } = this.props;
    const ActiveTabComponent = tabs[activeItemIndex].component;

    const {
      backgroundImg,
      posterImg,
      name,
      genre,
      released,
    } = film;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImg} alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title" onClick={onNameClick}>{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
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
                <Tabs activeTabIndex={activeItemIndex} tabs={tabs} onTabClick={onItemSelect}/>

                <ActiveTabComponent film={film} />
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

FilmDetailInfo.defaultProps = {
  onNameClick: () => {},
  onPosterClick: () => {},
  onFilmNameClick: () => {},
  similarFilms: [],
};

FilmDetailInfo.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImg: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,
  similarFilms: PropTypes.arrayOf(PropTypes.object),
  activeItemIndex: PropTypes.number.isRequired,

  onItemSelect: PropTypes.func.isRequired,
  onFilmNameClick: PropTypes.func,
  onNameClick: PropTypes.func,
  onPosterClick: PropTypes.func,
};

export default FilmDetailInfo;
