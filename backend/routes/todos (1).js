const express = require('express');
const todosController = require('../controllers/todos');

const router = express.Router();

// GET all todos
router.get('/', todosController.getAllTodos);

// GET a single todo by ID
router.get('/:id', todosController.getTodoById);

// POST create a new todo
router.post('/', todosController.createTodo);

// PUT update a todo by ID
router.put('/:id', todosController.updateTodo);

// DELETE delete a todo by ID
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
