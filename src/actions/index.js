import * as types from './ActionTypes';

export const setNewTopicTitle = title => ({
  type: types.SET_NEW_TOPIC_TITLE,
  title,
});

export const createNewTopic = title => ({
  type: types.CREATE_NEW_TOPIC,
  title,
});

export const upvoteTopic = topicId => ({
  type: types.UPVOTE_TOPIC,
  topicId,
});

export const downvoteTopic = topicId => ({
  type: types.DOWNVOTE_TOPIC,
  topicId,
});
