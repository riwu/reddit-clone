import topics from '../reducers/topics';
import { CREATE_NEW_TOPIC, UPVOTE_TOPIC, DOWNVOTE_TOPIC } from '../actions/ActionTypes';

test('topics reducer', () => {
  let state = topics([], {
    type: CREATE_NEW_TOPIC,
    title: 'topic trailing ',
  });
  expect(state).toEqual({ 0: {
    title: 'topic trailing',
    downvoteCount: 0,
    upvoteCount: 0,
  } });

  state = topics(state, {
    type: UPVOTE_TOPIC,
    topicId: 0,
  });
  expect(state).toEqual({ 0: {
    title: 'topic trailing',
    downvoteCount: 0,
    upvoteCount: 1,
  } });

  state = topics(state, {
    type: DOWNVOTE_TOPIC,
    topicId: 0,
  });
  expect(state).toEqual({ 0: {
    title: 'topic trailing',
    downvoteCount: 1,
    upvoteCount: 1,
  } });

  state = topics(state, {
    type: DOWNVOTE_TOPIC,
    topicId: 0,
  });
  expect(state).toEqual({ 0: {
    title: 'topic trailing',
    downvoteCount: 2,
    upvoteCount: 1,
  } });
});
