import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import FullSizePlayer from '../full-size-player/full-size-player.jsx';
import SignInPage from '../sign-in-page/sign-in-page.jsx';

import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';
import withErrorMessage from '../../hocs/with-error-message/with-error-message.jsx';

import {Screen} from '../../const';
import {getScreen, getPlayedFilm} from '../../reducer/operation/selectors';
import {Operation as UserOperation} from '../../reducer/user/actions';

const FullSizePlayerWrapped = withVideoPlayer(FullSizePlayer);
const SignInPageWrapped = withErrorMessage(SignInPage);

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
    const {screen, playedFilm, login} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp(screen)}
            {playedFilm && <FullSizePlayerWrapped film={playedFilm} />}
          </Route>
          <Route exact path="/dev-film-detail-info">
            <FilmPage />
          </Route>
          <Route exact path="/full-size-player">
            <FullSizePlayerWrapped />
          </Route>
          <Route exact path="/sign-in-page">
            <SignInPageWrapped onSubmit={login}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  screen: PropTypes.oneOf([Screen.MAIN, Screen.FILM_PAGE]),
  login: PropTypes.func.isRequired,
  playedFilm: PropTypes.object,
};

const mapStateToProps = (state) => ({
  screen: getScreen(state),
  playedFilm: getPlayedFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    return dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
