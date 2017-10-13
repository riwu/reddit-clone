import { SET_NEW_TOPIC_TITLE } from '../actions/ActionTypes';

// for now newTopic is simply the topic title for simplicity
// can be changed to object to contain more fields (description, image etc)
const newTopic = (state = '', action) => {
  switch (action.type) {
    case SET_NEW_TOPIC_TITLE:
      return action.title;
    default:
      return state;
  }
};

export default newTopic;
