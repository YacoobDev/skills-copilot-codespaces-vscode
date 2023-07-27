// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto'); // Generate random id
const cors = require('cors'); // Cross-Origin Resource Sharing

const app = express();
app.use(bodyParser.json());
app.use(cors());

// In-memory database
const commentsByPostId = {};

// Get comments by post id
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []); // Return empty array if no comments
});

// Create comment by post id
app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex'); // Generate random id
  const { content } = req.body; // Get content from request body

  // Get comments array for post id or create new array if none exists
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content }); // Push new comment to array
  commentsByPostId[req.params.id] = comments; // Assign comments to post id

  res.status(201).send(comments); // Return comments array
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});