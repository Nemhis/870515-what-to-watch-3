import React from 'react';
import PropTypes from 'prop-types';

const Header = ({children}) => (
  <header className="page-header movie-card__head">
    <div className="logo">
      <a className="logo__link" href="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    {children || ``}
  </header>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
