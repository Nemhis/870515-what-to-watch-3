import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';

import {Screen} from '../../const';

class App extends PureComponent {
  _renderApp(screen) {
    let component = null;

    switch (screen) {
      case Screen.MAIN:
        component = <Main />;
        break;
      case Screen.FILM_PAGE:
        component = <FilmPage />;
    }

    return component;
  }

  render() {
    const {screen} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp(screen)}
          </Route>
          <Route exact path="/dev-film-detail-info">
            <FilmPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  screen: PropTypes.oneOf([Screen.MAIN, Screen.FILM_PAGE]),
};

const mapStateToProps = (state) => ({
  screen: state.screen,
});

export {App};
export default connect(mapStateToProps)(App);
