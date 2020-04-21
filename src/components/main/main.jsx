import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmsList from '../films-list/films-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import PromoFilmCard from '../promo-film-card/promo-film-card.jsx';

const Main = ({films}) => {
  return (
    <React.Fragment>
      <PromoFilmCard film={films[0]}/>

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
};

const mapStateToProps = ({shownFilms}) => ({
  films: shownFilms,
});

export {Main};
export default connect(mapStateToProps)(Main);
