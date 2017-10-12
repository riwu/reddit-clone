import React from 'react';
import { Route } from 'react-router-dom';
import SubmitTopic from '../containers/SubmitTopicContainer';
import TopicList from '../containers/TopicListContainer';

const HomePage = () => (
  <div>
    <SubmitTopic />
    <Route path="/:pageNum?" component={TopicList} />
  </div>
);

export default HomePage;
