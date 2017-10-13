import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import HomePage from './components/HomePage';
import store, { history } from './store';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HomePage />
    </ConnectedRouter>
  </Provider>
);

export default App;
