import React from 'react';
import Pagination from 'react-paginate';
import Topic from '../containers/TopicContainer';
import './TopicList.css';

const POST_PER_PAGE = 20; // could extract this to a Constants file

// Presents the list of topics based on current pagination
class TopicList extends React.Component {
  static defaultProps = {
    topics: [],
  };

  // if route page num is more than page count, redirect route to first page
  // if page count <= 1, first page is simply '/'
  componentWillMount() {
    const { pageCount, pageNum, onPageChange } = this.getTopicsAndPage();
    if (this.props.match.params.pageNum !== undefined &&
        (pageNum > pageCount || pageCount <= 1)) {
      onPageChange(pageCount <= 1 ? '/' : '/1');
    }
  }

  // compute the properties for componentWillMount and render
  getTopicsAndPage() {
    const { topics, match, onPageChange } = this.props;
    const topicsArr = Object.entries(topics);
    const pageCount = Math.ceil(topicsArr.length / POST_PER_PAGE);
    const pageNum = Number(match.params.pageNum) || 1;
    return { topicsArr, pageCount, pageNum, onPageChange };
  }

  render() {
    const { topicsArr, pageCount, pageNum, onPageChange } = this.getTopicsAndPage();
    // for slicing the cooresponding topics to display
    const startPost = (pageNum - 1) * POST_PER_PAGE;
    return (
      <div className="TopicList">
        {topicsArr
          // eslint-disable-next-line no-unused-vars
          .sort(([topicId1, topic1], [topicId2, topic2]) => topic2.upvoteCount - topic1.upvoteCount)
          .slice(startPost, startPost + POST_PER_PAGE)
          .map(([topicId, topic]) => (
            <div className="topic" key={topicId}>
              <Topic
                topicId={topicId}
                topic={topic}
              />
            </div>
          ))}
        {pageCount > 1 && // hide pagination if page count is <= 1
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
