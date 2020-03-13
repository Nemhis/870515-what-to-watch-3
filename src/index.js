import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';

import {films} from './data';

ReactDom.render(
    <App films={films}/>,
    document.getElementById(`root`)
);
