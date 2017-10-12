import { connect } from 'react-redux';
import SubmitTopic from '../components/SubmitTopic';
import { setNewTopicTitle, createNewTopic } from '../actions';

const mapStateToProps = state => ({
  newTopicTitle: state.newTopic,
});

export default connect(
  mapStateToProps,
  { setNewTopicTitle, createNewTopic },
)(SubmitTopic);
