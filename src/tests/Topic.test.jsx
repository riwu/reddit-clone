import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Topic from '../containers/TopicContainer';
import store from '../store';
import { createNewTopic } from '../actions';

test('Topic', () => {
  const dom = mount((
    <Provider store={store}>
      <Topic
        topic={{
          title: 'test topic',
          upvoteCount: 0,
          downvoteCount: 0,
        }}
        topicId={0}
      />
    </Provider>
  ));
  expect(dom.find('.title').text()).toEqual('test topic');
  expect(dom.find('.upvoteCount').text()).toEqual('0');
  expect(dom.find('.downvoteCount').text()).toEqual('0');

  // must update store to check store states in response to update
  // can't test on dom directly as it's not retrieving from store
  store.dispatch(createNewTopic('test topic'));
  dom.find('button').first().simulate('click');
  expect(store.getState().topics['0'].upvoteCount).toEqual(1);

  dom.find('button').first().simulate('click');
  expect(store.getState().topics['0'].upvoteCount).toEqual(2);
  expect(store.getState().topics['0'].downvoteCount).toEqual(0);

  dom.find('button').last().simulate('click');
  expect(store.getState().topics['0'].downvoteCount).toEqual(1);

  dom.find('button').last().simulate('click');
  expect(store.getState().topics['0'].downvoteCount).toEqual(2);
  // making sure clicking downvote is not affecting upvote count
  expect(store.getState().topics['0'].upvoteCount).toEqual(2);

  dom.unmount();
});
