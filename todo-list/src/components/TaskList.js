import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul className="space-y-3">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks added yet.</p>
      )}
    </ul>
  );
};

export default TaskList;
