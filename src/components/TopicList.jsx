import React from 'react';
import Topic from './Topic';

const TopicList = ({ topics }) => (
  <div>
    {topics.map(topic => (
      <Topic
        key={topic.id}
        title={topic.title}
      />
    ))}
  </div>
);

TopicList.defaultProps = {
  topics: [],
};

export default TopicList;
