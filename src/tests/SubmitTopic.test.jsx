import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import SubmitTopic from '../containers/SubmitTopicContainer';
import store from '../store';

test('Topic render', () => {
  const topic = mount((
    <Provider store={store}>
      <SubmitTopic />
    </Provider>
  ));
  topic.find('FormControl').simulate('change', { target: { value: 'new 123' } });
  expect(topic.find('FormControl').props().value).toEqual('new 123');
});
