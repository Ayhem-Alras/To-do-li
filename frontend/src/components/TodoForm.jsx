import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-input"
      ></textarea>
      <button type="submit" className="form-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
