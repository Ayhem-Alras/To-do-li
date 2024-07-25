import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/todos');
        setTodos(res.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    try {
      const res = await axios.post('http://localhost:5000/api/todos', todo);
      setTodos([...todos, res.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="app">
      <h1 className="app-title">Futuristic TODO App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
