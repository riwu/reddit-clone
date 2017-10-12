import { CREATE_NEW_TOPIC } from '../actions/ActionTypes';

const topics = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_TOPIC:
      return [
        ...state,
        action.title,
      ];
    default:
      return state;
  }
};

export default topics;
