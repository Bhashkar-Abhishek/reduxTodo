import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TaskForm() {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: { name: newTask, completed: false } });
    setNewTask('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
