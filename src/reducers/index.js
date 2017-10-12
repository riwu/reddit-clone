import { combineReducers } from 'redux';
import newTopic from './newTopic';
import topics from './topics';

const reducer = combineReducers({
  newTopic,
  topics,
});

export default reducer;
