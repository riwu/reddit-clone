import React from 'react';
import Pagination from 'react-paginate';
import Topic from '../containers/TopicContainer';

const POST_PER_PAGE = 20;

class TopicList extends React.Component {
  static defaultProps = {
    topics: [],
  };

  componentWillMount() {
    const { pageCount, pageNum, onPageChange } = this.getTopicsAndPage();
    if (this.props.match.params.pageNum !== undefined && (pageNum > pageCount ||
        (pageCount === 1 && pageNum === 1))) {
      onPageChange('/');
    }
  }

  getTopicsAndPage() {
    const { topics, match, onPageChange } = this.props;
    const topicsArr = Object.entries(topics);
    const pageCount = Math.ceil(topicsArr.length / POST_PER_PAGE);
    const pageNum = Number(match.params.pageNum) || 1;
    return { topicsArr, pageCount, pageNum, onPageChange };
  }

  render() {
    const { topicsArr, pageCount, pageNum, onPageChange } = this.getTopicsAndPage();
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
  }
}

export default TopicList;
