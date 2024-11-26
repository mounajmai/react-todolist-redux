import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './redux/todoSlice';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">To-Do List</h1>
        
        {/* Composant pour ajouter une tâche */}
        <AddTask onAdd={(task) => dispatch(addTask(task))} />

        {/* Liste des tâches */}
        <TaskList
          tasks={tasks}
          onToggle={(id) => dispatch(toggleTask(id))}
          onDelete={(id) => dispatch(deleteTask(id))}
        />
      </div>
    </div>
  );
};

export default App;
