exports.validateTodo = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ msg: 'Title is required' });
  }
  next();
};
