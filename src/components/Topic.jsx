import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './Topic.css';

const Topic = ({ topic, upvote, downvote }) => (
  <div className="Topic">
    <span className="buttons">
      <Button className="voteButton" onClick={upvote}>
        <Glyphicon className="glyph" glyph="thumbs-up" />
        <span className="upvoteCount">{topic.upvoteCount}</span>
      </Button>
      <Button className="voteButton" onClick={downvote}>
        <Glyphicon className="glyph" glyph="thumbs-down" />
        <span className="downvoteCount">{topic.downvoteCount}</span>
      </Button>
    </span>
    <span className="title">{topic.title}</span>
  </div>
);

export default Topic;
