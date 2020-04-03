import PropTypes from 'prop-types';

const Tab = (props) => props.children;

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
};

export default Tab;
