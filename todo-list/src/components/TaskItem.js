import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
      <span
        onClick={() => onToggle(task.id)}
        className={`flex-1 cursor-pointer ${
          task.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {task.text}
      </span>
      <div className="space-x-2">
        <button
          onClick={() => onToggle(task.id)}
          className={`px-3 py-1 rounded-lg ${
            task.completed
              ? 'bg-yellow-500 text-white hover:bg-yellow-600'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
