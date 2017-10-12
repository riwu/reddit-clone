import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

const SubmitTopic = ({ newTopicTitle, setNewTopicTitle, createNewTopic }) => (
  <div>
    <FormControl
      type="text"
      value={newTopicTitle}
      maxLength={255}
      placeholder="Create a new topic"
      onChange={e => setNewTopicTitle(e.target.value)}
    />
    <Button onClick={() => createNewTopic(newTopicTitle)}>Submit</Button>
  </div>
);

export default SubmitTopic;
