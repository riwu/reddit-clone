import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';

export const history = createHistory();
const middleware = [routerMiddleware(history)];
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
