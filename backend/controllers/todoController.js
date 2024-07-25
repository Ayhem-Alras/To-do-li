const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send('Server Error');
  }
};

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).send('Server Error');
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ msg: 'Todo not found' });

    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).send('Server Error');
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    res.json({ msg: 'Todo removed' });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).send('Server Error');
  }
};
