import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div className="mb-4 flex items-center space-x-2">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-lg p-2"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
