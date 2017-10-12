import { CREATE_NEW_TOPIC, UPVOTE_TOPIC, DOWNVOTE_TOPIC } from '../actions/ActionTypes';

const topics = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_TOPIC:
      return {
        ...state,
        [Object.keys(state).length]: {
          title: action.title,
          upvoteCount: 0,
          downvoteCount: 0,
        },
      };
    case UPVOTE_TOPIC: {
      const topic = state[action.topicId];
      return {
        ...state,
        [action.topicId]: {
          ...topic,
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
