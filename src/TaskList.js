import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleToggle(name) {
    dispatch({ type: 'TOGGLE_TASK', payload: name });
  }

  function handleDelete(name) {
    dispatch({ type: 'DELETE_TASK', payload: name });
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.name}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => handleDelete(task.name)}>Delete</button>
            <button onClick={() => handleToggle(task.name)}>{task.completed?"completed":"complete"}</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
