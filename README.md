## About
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  
Ejected to allow hot reloading and other custom configurations.  
Everything else was written manually for the purpose of the challenge.  
App is accessible via https://reddit-clone.netlify.com/

## Commands (self-explanatory)
- npm install
- npm start
- npm run build
- npm run test

## Main packages
- React.js
- Redux for state management (and caching via redux-persist if desirable)
- Eslint for linting
- Jest/Enzyme for testing
- react-router-redux for routing (pagination)
- Twitter Bootstrap

## Functionalities
- Maintain a list of topics and its upvotes/downvotes
- Allow the user to submit topics. For this challenge, a “topic” is simply a string that does not exceed 255 characters.
- Allow the user to upvote or downvote a topic. For this challenge, the user may upvote or downvote the same topic multiple times.
- Always return a list of top 20 topics (sorted by upvotes, descending) on the homepage
- Data is not persisted
