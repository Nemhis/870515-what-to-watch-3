import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card.jsx';

const Main = ({films, onFilmNameClick, onFilmMouseEnter}) => {
  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <div className="catalog__movies-list">
      {films.map((film, index) => (
        <FilmCard
          key={index}
          film={film}
          onMouseEnter={onFilmMouseEnter}
          onFilmClick={onFilmNameClick}
        />
      ))}
    </div>
  </section>;
};

Main.defaultProps = {
  onFilmNameClick() {},
  onFilmMouseEnter() {},
};

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  onFilmNameClick: PropTypes.func,
  onFilmMouseEnter: PropTypes.func,
};

export default Main;
