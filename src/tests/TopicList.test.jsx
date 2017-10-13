import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';
import TopicList from '../containers/TopicListContainer';
import store, { history } from '../store';
import { createNewTopic } from '../actions';

test('TopicListContainer', () => {
  const dom = mount((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <TopicList match={{ params: 2 }} />
      </ConnectedRouter>
    </Provider>
  ));

  const findPagination = () => dom.find('.pagination').parent();

  store.dispatch(createNewTopic('test topic'));
  dom.update();
  // pagination should be absent when page count is <= 1
  expect(findPagination().exists()).toEqual(false);

  expect(dom.find('Topic').length).toEqual(1);

  [...Array(30).keys()].forEach(i => store.dispatch(createNewTopic(`test topic ${i}`)));
  dom.update();
  // topic count should not exceed 20 due to pagination
  expect(dom.find('Topic').length).toEqual(20);

  expect(findPagination().prop('pageCount')).toEqual(2);
  expect(findPagination().prop('initialPage')).toEqual(0);

  dom.unmount();
});
