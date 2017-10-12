import React from 'react';
import thumbUp from '../images/thumb_up.png';
import thumbDown from '../images/thumb_down.png';

const Topic = ({ topic, upvote, downvote }) => (
  <div>
    <button onClick={upvote}><img alt="Upvote" src={thumbUp} />Upvote</button>
    {topic.upvoteCount}
    <button onClick={downvote}><img alt="Downvote" src={thumbDown} />Downvote</button>
    {topic.downvoteCount}
    {topic.title}
  </div>
);

export default Topic;
