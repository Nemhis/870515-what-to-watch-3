import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';

const film = {
  name: `Best film`,
  genre: `comedy`,
  promoDate: new Date(),
};

ReactDom.render(
    <App film={film}/>,
    document.getElementById(`root`)
);
