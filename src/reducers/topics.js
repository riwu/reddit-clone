import { CREATE_NEW_TOPIC, UPVOTE_TOPIC, DOWNVOTE_TOPIC } from '../actions/ActionTypes';

// topics are identified by an unique id
// which would be assigned by and fetch from the server in an actual app
// to avoid race condition and ensure data consistency between client and server
// for now the unique id is simply the current count of topics for simplicity
const topics = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_TOPIC:
      return {
        ...state,
        [Object.keys(state).length]: {
          // trim title in reducer for multiple actions in the future (create, update)
          title: action.title.trim(),
          upvoteCount: 0,
          downvoteCount: 0,
        },
      };
    case UPVOTE_TOPIC: {
      const topic = state[action.topicId];
      return {
        ...state,
        [action.topicId]: {
          ...topic, // always create a new copy, no direct mutation of state
          upvoteCount: topic.upvoteCount + 1,
        },
      };
    }
    case DOWNVOTE_TOPIC: {
      const topic = state[action.topicId];
      return {
        ...state,
        [action.topicId]: {
          ...topic,
          downvoteCount: topic.downvoteCount + 1,
        },
      };
    }
    default:
      return state;
  }
};

export default topics;
