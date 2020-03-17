import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({films}) => {
  return <Main films={films} />;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object)
};

export default App;
