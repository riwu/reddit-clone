import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducers';
import HomePage from './components/HomePage';

const history = createHistory();
const middleware = [routerMiddleware(history)];
const store = createStore(reducer, applyMiddleware(...middleware));

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HomePage />
    </ConnectedRouter>
  </Provider>
);

export default App;
