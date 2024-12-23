// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.json());

// Comments data
let comments = [
  { id: 1, author: 'John', text: 'Hello!' },
  { id: 2, author: 'Amy', text: 'Good morning!' },
  { id: 3, author: 'Bob', text: 'How are you?' },
  { id: 4, author: 'Diana', text: 'Fine, thank you.' }
];

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,