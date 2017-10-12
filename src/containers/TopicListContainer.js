import { connect } from 'react-redux';
import TopicList from '../components/TopicList';

const mapStateToProps = state => ({
  topics: state.topics,
});

export default connect(
  mapStateToProps,
)(TopicList);
