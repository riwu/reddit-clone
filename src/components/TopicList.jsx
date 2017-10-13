import React from 'react';
import Pagination from 'react-paginate';
import Topic from '../containers/TopicContainer';

const POST_PER_PAGE = 3;

const TopicList = ({ topics, onPageChange, match }) => {
  const topicsArr = Object.entries(topics);
  const pageCount = Math.ceil(topicsArr.length / POST_PER_PAGE);
  const pageNum = Number(match.params.pageNum) || 1;
  const startPost = (pageNum - 1) * POST_PER_PAGE;
  return (
    <div>
      {topicsArr
        // eslint-disable-next-line no-unused-vars
        .sort(([topicId1, topic1], [topicId2, topic2]) => topic2.upvoteCount - topic1.upvoteCount)
        .slice(startPost, startPost + POST_PER_PAGE)
        .map(([topicId, topic]) => (
          <Topic
            key={topicId}
            topicId={topicId}
            topic={topic}
          />
        ))}
      {pageCount > 1 &&
        <Pagination
          onPageChange={({ selected }) => onPageChange(`/${selected + 1}`)}
          pageCount={pageCount}
          initialPage={pageNum - 1}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          breakLabel={<a href="">...</a>}
          breakClassName={'break-me'}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      }
    </div>
  );
};

TopicList.defaultProps = {
  topics: [],
};

export default TopicList;
