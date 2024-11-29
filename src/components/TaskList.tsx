import React from 'react';
import { CheckCircle2, Circle, Clock, Flag } from 'lucide-react';
import type { Task } from '../types';

const priorityColors = {
  low: 'text-gray-500',
  medium: 'text-orange-500',
  high: 'text-red-500',
};

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-xl p-4 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => onToggleTask(task.id)}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            {task.completed ? (
              <CheckCircle2 className="h-6 w-6 text-blue-600" />
            ) : (
              <Circle className="h-6 w-6" />
            )}
          </button>
          <div className="flex-1">
            <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-500 mt-1">{task.description}</p>
            )}
          </div>
          {task.dueDate && (
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
          )}
          <Flag className={`h-5 w-5 ${priorityColors[task.priority]}`} />
        </div>
      ))}
    </div>
  );
}