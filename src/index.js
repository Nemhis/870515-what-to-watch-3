import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app/app.jsx';
import reducer from './reducer/reducer';
import {createAPI} from './api';
import {ActionCreator} from './reducer/user/actions';
import {AuthorizationStatus} from './const';
import {Operation as DataOperations} from './reducer/data/actions';
import {Operation as UserOperations} from './reducer/user/actions';

const api = createAPI(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk.withExtraArgument(api)), devTools)
);

store.dispatch(DataOperations.loadFilms());
store.dispatch(DataOperations.loadPromoFilm());
store.dispatch(UserOperations.checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
