import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main.jsx';
import FilmDetailInfo from '../film-detail-info/film-detail-info.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: null,
    };

    this._onFilmNameClick = this._onFilmNameClick.bind(this);
  }

  _onFilmNameClick(selectedFilm) {
    this.setState({
      currentFilm: selectedFilm,
    });
  }

  _renderApp(films) {
    let component = null;

    if (this.state.currentFilm) {
      component = <FilmDetailInfo film={this.state.currentFilm}/>;
    } else {
      component = <Main films={films} onFilmNameClick={this._onFilmNameClick} />;
    }

    return component;
  }

  render() {
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp(films)}
          </Route>
          <Route exact path="/dev-film-detail-info">
            <FilmDetailInfo film={films[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object)
};

export default App;
