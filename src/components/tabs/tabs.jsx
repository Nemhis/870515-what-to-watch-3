import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Tabs = ({children, activeItemIndex, onActiveItemChange}) => (
  <Fragment>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {children.map((child, index) => (
          <li key={index} className={`movie-nav__item ${index === activeItemIndex ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={(event) => {
              event.preventDefault();
              onActiveItemChange(index);
            }}>
              {child.props.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {children[activeItemIndex]}
  </Fragment>
);

Tabs.propTypes = {
  activeItemIndex: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.elementType),
    PropTypes.elementType.isRequired,
  ]).isRequired,
};

export default Tabs;
