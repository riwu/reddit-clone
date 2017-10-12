import { CREATE_NEW_TOPIC } from '../actions/ActionTypes';

const topics = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_TOPIC:
      return [
        ...state,
        {
          title: action.title,
          id: state.count,
        },
      ];
    default:
      return state;
  }
};

export default topics;
