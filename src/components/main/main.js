import React from 'react';
import PropTypes from 'prop-types';

const Main = ({films}) => {
  const filmsList = films.map((filmName, index) => (
    <article key={index} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={filmName} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">{filmName}</a>
      </h3>
    </article>
  ));

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <div className="catalog__movies-list">{filmsList}</div>
  </section>;
};

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string)
};

export default Main;
