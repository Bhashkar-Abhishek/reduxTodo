import { createStore } from 'redux';

const initialState = {
  tasks: [],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload],
      };
    case 'TOGGLE_TASK':
      const updatedTasks = state.tasks.map((task) => {
        if (task.name === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
      return {
        tasks: updatedTasks,
      };
    case 'DELETE_TASK':
      const remainingTasks = state.tasks.filter(
        (task) => task.name !== action.payload
      );
      return {
        tasks: remainingTasks,
      };
    default:
      return state;
  }
}

const store = createStore(taskReducer);

export default store;
