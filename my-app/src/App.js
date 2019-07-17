import React from 'react';
import './App.css';
import TodoItemHead from './components/TodoItemHead';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoForm addTodo={(todo) => console.log(todo)} />
    </div>
  );
}

export default App;
