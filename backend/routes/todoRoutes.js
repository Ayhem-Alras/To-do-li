const express = require('express');
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const { validateTodo } = require('../middleware/validationMiddleware');

router.get('/', getTodos);
router.post('/', validateTodo, createTodo);
router.put('/:id', validateTodo, updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
