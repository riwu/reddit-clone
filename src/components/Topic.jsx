import React from 'react';
import { Button } from 'react-bootstrap';
import thumbUp from '../images/thumb_up.png';
import thumbDown from '../images/thumb_down.png';

const Topic = ({ topic, upvote, downvote }) => (
  <div>
    <Button onClick={upvote}><img alt="Upvote" src={thumbUp} />Upvote</Button>
    {topic.upvoteCount}
    <Button onClick={downvote}><img alt="Downvote" src={thumbDown} />Downvote</Button>
    {topic.downvoteCount}
    {topic.title}
  </div>
);

export default Topic;
