import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import SubmitTopic from '../containers/SubmitTopicContainer';
import store from '../store';

test('SubmitTopicContainer', () => {
  const dom = mount((
    <Provider store={store}>
      <SubmitTopic />
    </Provider>
  ));
  dom.find('input').simulate('change', { target: { value: 'new 123' } });
  expect(dom.find('input').props().value).toEqual('new 123');

  dom.find('button').simulate('click');
  const state = store.getState();
  expect(dom.find('input').props().value).toEqual('');
  expect(state.topics).toEqual({ 0: {
    title: 'new 123',
    downvoteCount: 0,
    upvoteCount: 0,
  } });
  expect(state.newTopic).toEqual('');
});
