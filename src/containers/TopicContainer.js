import { connect } from 'react-redux';
import Topic from '../components/Topic';
import { upvoteTopic, downvoteTopic } from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  upvote: () => dispatch(upvoteTopic(ownProps.topicId)),
  downvote: () => dispatch(downvoteTopic(ownProps.topicId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Topic);
