import React from 'react';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo._id} className="todo-item">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <div className="todo-actions">
            <button 
              onClick={() => updateTodo(todo._id, { ...todo, completed: !todo.completed })} 
              className="action-button complete-button">
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button 
              onClick={() => deleteTodo(todo._id)} 
              className="action-button delete-button">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
