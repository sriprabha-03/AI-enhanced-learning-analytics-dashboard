const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todos');

const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/mytodoapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Parse JSON request bodies
app.use(bodyParser.json());

// Mount the todos router
app.use('/todos', todosRouter);

// Start the server
const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));
