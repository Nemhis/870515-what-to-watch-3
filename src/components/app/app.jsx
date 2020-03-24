import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main.jsx';
import FilmDetailInfo from '../film-detail-info/film-detail-info.jsx';

const _renderApp = (films) => {
  return <Main films={films} />;
};

const App = ({films}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderApp(films)}
        </Route>
        <Route exact path="/dev-film-detail-info">
          <FilmDetailInfo film={films[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object)
};

export default App;
