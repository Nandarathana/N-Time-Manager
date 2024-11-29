import React, { useState } from 'react';
import { Plus, Calendar as CalendarIcon, Clock } from 'lucide-react';
import type { Task } from '../types';

interface QuickAddProps {
  onAddTask: (task: Omit<Task, 'id'>) => void;
}

export function QuickAdd({ onAddTask }: QuickAddProps) {
  const [title, setTitle] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dueDate, setDueDate] = useState<Date | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      title: title.trim(),
      priority: 'medium',
      completed: false,
      dueDate,
    });

    setTitle('');
    setDueDate(undefined);
    setShowDatePicker(false);
  };

  const handleDateClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(new Date(e.target.value));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
          <button
            type="button"
            onClick={handleDateClick}
            className={`p-2 ${dueDate ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 transition-colors`}
          >
            <CalendarIcon className="h-5 w-5" />
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        {showDatePicker && (
          <input
            type="date"
            onChange={handleDateChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        )}
      </form>
    </div>
  );
}