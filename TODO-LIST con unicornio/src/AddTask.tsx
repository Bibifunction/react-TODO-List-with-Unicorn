import type React from 'react';

import { type ChangeEvent, useState } from 'react';
import type { Task } from './task.models';

interface AddTaskProps {
  addTask: (task: Task) => void;
}

export const AddTask = (props: AddTaskProps) => {
  const [taskText, setTaskText] = useState('');
  const { addTask } = props;

  const handleAddTask = () => {
    addTask({ text: taskText, isCompleted: false, id: Math.random() });
    setTaskText('');
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && taskText.trim().length > 0) {
      handleAddTask();
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        onChange={handleInput}
        onKeyDown={handleKeyPress}
        value={taskText}
        placeholder="Escribe una nueva tarea..."
      />
      <button onClick={handleAddTask} disabled={!taskText.trim().length}>
        Añadir tarea
      </button>
    </div>
  );
};
