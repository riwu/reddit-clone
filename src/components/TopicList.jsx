import React from 'react';
import Pagination from 'react-paginate';
import Topic from '../containers/TopicContainer';

const TopicList = ({ topics }) => {
  const topicsArr = Object.entries(topics);
  return (
    <div>
      {topicsArr
        // eslint-disable-next-line no-unused-vars
        .sort(([topicId1, topic1], [topicId2, topic2]) => topic2.upvoteCount - topic1.upvoteCount)
        .map(([topicId, topic]) => (
          <Topic
            key={topicId}
            topicId={topicId}
            topic={topic}
          />
        ))}
      <Pagination
        pageCount={Math.ceil(topicsArr.length / 20)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        breakLabel={<a href="">...</a>}
        breakClassName={'break-me'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

TopicList.defaultProps = {
  topics: [],
};

export default TopicList;
