import React from 'react';
import Topic from '../containers/TopicContainer';

const TopicList = ({ topics }) => (
  <div>
    {Object.entries(topics).map(([topicId, topic]) => (
      <Topic
        key={topicId}
        topicId={topicId}
        topic={topic}
      />
    ))}
  </div>
);

TopicList.defaultProps = {
  topics: [],
};

export default TopicList;
