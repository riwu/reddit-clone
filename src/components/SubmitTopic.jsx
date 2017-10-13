import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import './SubmitTopic.css';

// This should probably be a modal or separate page for extensibility
// (eg. allowing more than just title input)
// but it's left as a text input + submit button in this app for simplicity
const SubmitTopic = ({ newTopicTitle, setNewTopicTitle, createNewTopic }) => (
  <div className="SubmitTopic">
    <FormControl
      className="input"
      type="text"
      value={newTopicTitle}
      maxLength={255}
      placeholder="Enter a new topic title"
      onChange={e => setNewTopicTitle(e.target.value)}
    />
    <Button
      bsStyle="primary"
      onClick={() => {
        setNewTopicTitle(''); // Clear topic title once submitted
        createNewTopic(newTopicTitle); // title will be trimmed in reducer
      }}
    >
      Submit
    </Button>
  </div>
);

export default SubmitTopic;
