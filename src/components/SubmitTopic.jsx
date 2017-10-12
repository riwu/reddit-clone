import React from 'react';

const SubmitTopic = ({ newTopicTitle, setNewTopicTitle, createNewTopic }) => (
  <div>
    <input
      type="text"
      value={newTopicTitle}
      maxLength={255}
      placeholder="Create a new topic"
      onChange={e => setNewTopicTitle(e.target.value)}
    />
    <button onClick={() => createNewTopic(newTopicTitle)}>Submit</button>
  </div>
);

export default SubmitTopic;
