import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';

const App = ({films}) => {
  return <React.Fragment>
    <Main films={films} />
  </React.Fragment>;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string)
};

export default App;
