import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import './SubmitTopic.css';

const SubmitTopic = ({ newTopicTitle, setNewTopicTitle, createNewTopic }) => (
  <div className="SubmitTopic">
    <FormControl
      className="input"
      type="text"
      value={newTopicTitle}
      maxLength={255}
      placeholder="Create a new topic"
      onChange={e => setNewTopicTitle(e.target.value)}
    />
    <Button bsStyle="primary" onClick={() => createNewTopic(newTopicTitle)}>Submit</Button>
  </div>
);

export default SubmitTopic;
