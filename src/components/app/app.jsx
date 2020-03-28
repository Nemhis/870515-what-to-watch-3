import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main.jsx';
import FilmDetailInfo from '../film-detail-info/film-detail-info.jsx';

const MAX_SIMILAR_FILMS_COUNT = 4;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: null,
    };

    this._onFilmNameClick = this._onFilmNameClick.bind(this);
  }

  _collectSimilarFilms(film) {
    // TODO: бизнес логика ?
    let similarFilms = this.props.films.filter((filmItem) => filmItem.genre === film.genre);
    similarFilms = similarFilms.slice(0, MAX_SIMILAR_FILMS_COUNT);

    return similarFilms;
  }

  _onFilmNameClick(selectedFilm) {
    this.setState({
      currentFilm: selectedFilm,
    });
  }

  _renderApp(films) {
    let component = null;
    const {currentFilm} = this.state;

    if (currentFilm) {
      component = <FilmDetailInfo
        film={currentFilm}
        similarFilms={this._collectSimilarFilms(currentFilm)}
        onFilmNameClick={this._onFilmNameClick}
      />;
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
            <FilmDetailInfo
              film={films[0]}
              similarFilms={this._collectSimilarFilms(films[0])}
              onFilmNameClick={this._onFilmNameClick}
            />
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
