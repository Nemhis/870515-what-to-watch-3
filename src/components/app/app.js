import React from 'react';

import Main from '../main/main';

// eslint-disable-next-line react/prop-types
const App = ({film}) => {
  return <React.Fragment>
    <Main film={film} />
  </React.Fragment>;
};

export default App;
