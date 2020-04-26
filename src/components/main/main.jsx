import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmsList from '../films-list/films-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import PromoFilmCard from '../promo-film-card/promo-film-card.jsx';
import {getPromoFilm, getShownFilms} from '../../reducer/data/selectors';

const Main = ({films, promoFilm}) => {
  return (
    <React.Fragment>
      {promoFilm && <PromoFilmCard film={promoFilm}/> }

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmsList films={films} />

          <ShowMoreButton />
        </section>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  promoFilm: PropTypes.object,
};

const mapStateToProps = (state) => ({
  films: getShownFilms(state),
  promoFilm: getPromoFilm(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
