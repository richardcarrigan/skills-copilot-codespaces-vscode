// Create web server

// Import packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// Create web server
const app = express();

// Configure web server
app.use(bodyParser.json());
app.use(cors());

// Create comments array
const comments = [];

// Route handlers
app.get("/posts/:id/comments", (req, res) => {
  // Get comments for post
  const postComments = comments.filter(
    (comment) => comment.postId === req.params.id
  );

  // Send comments
  res.status(200).send(postComments);
});

app.post("/posts/:id/comments", (req, res) => {
  // Get comment text
  const { text } = req.body;

  // Create comment
  const comment = {
    id: uuidv4(),
    postId: req.params.id,
    text,
  };

  // Add comment to comments array
  comments.push(comment);

  // Send comment
  res.status(201).send(comment);
});

// Listen for requests
app.listen(4001, () => {
  console.log("Listening on port 4001");
});