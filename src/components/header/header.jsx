import React from 'react';
import PropTypes from 'prop-types';

const Header = ({children, additionalClass}) => {
  let classes = `page-header`;

  if (additionalClass) {
    classes += ` ${additionalClass}`;
  }

  return (
    <header className={classes}>
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
};

Header.propTypes = {
  children: PropTypes.node,
  additionalClass: PropTypes.string,
};

export default Header;
