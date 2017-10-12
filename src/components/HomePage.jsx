import React from 'react';
import SubmitTopic from '../containers/SubmitTopicContainer';
import TopicList from '../containers/TopicListContainer';

const HomePage = () => (
  <div>
    <SubmitTopic />
    <TopicList />
  </div>
);

export default HomePage;
