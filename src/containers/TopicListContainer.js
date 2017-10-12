import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TopicList from '../components/TopicList';

const mapStateToProps = state => ({
  topics: state.topics,
});

export default connect(
  mapStateToProps,
  { onPageChange: push },
)(TopicList);
