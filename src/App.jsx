import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducers';
import HomePage from './components/HomePage';

const middleware = [routerMiddleware(history)];
const store = createStore(reducer, applyMiddleware(...middleware));

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
