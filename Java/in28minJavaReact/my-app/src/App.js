import React, { Component } from 'react';

import './App.css';
import './bootstrap.css';
import CounterButton from './components/counter/Counter';
import CounterComponent from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp></TodoApp>
    </div>
  );  
}

export default App;
