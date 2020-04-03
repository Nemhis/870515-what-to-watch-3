import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({tabs, onTabClick, activeTabIndex}) => (
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {tabs.map(({name}, index) => (
        <li key={index} className={`movie-nav__item ${index === activeTabIndex ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" onClick={(event) => {
            event.preventDefault();
            onTabClick(index);
          }}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

Tabs.propTypes = {
  activeTabIndex: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
