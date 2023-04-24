import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>To-Do List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
