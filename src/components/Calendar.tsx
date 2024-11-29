import React, { useState } from 'react';
import { getCurrentWeek, formatDate } from '../utils/dateUtils';
import type { TimeBlock } from '../types';
import { Plus } from 'lucide-react';

interface CalendarProps {
  timeBlocks: TimeBlock[];
  onAddTimeBlock: (block: Omit<TimeBlock, 'id'>) => void;
}

export function Calendar({ timeBlocks, onAddTimeBlock }: CalendarProps) {
  const weekDays = getCurrentWeek();
  const [showAddBlock, setShowAddBlock] = useState(false);
  const [newBlock, setNewBlock] = useState({
    title: '',
    startTime: new Date(),
    endTime: new Date(),
    color: '#4F46E5',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlock.title.trim()) return;

    onAddTimeBlock(newBlock);
    setNewBlock({
      title: '',
      startTime: new Date(),
      endTime: new Date(),
      color: '#4F46E5',
    });
    setShowAddBlock(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Calendar</h2>
        <button
          onClick={() => setShowAddBlock(!showAddBlock)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-4">
        {weekDays.map((date) => (
          <div
            key={date.toISOString()}
            className="text-center"
          >
            <div className="text-sm text-gray-500">{formatDate(date)}</div>
          </div>
        ))}
      </div>

      {showAddBlock && (
        <form onSubmit={handleSubmit} className="mb-4 space-y-3">
          <input
            type="text"
            value={newBlock.title}
            onChange={(e) => setNewBlock({ ...newBlock, title: e.target.value })}
            placeholder="Event title"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              type="datetime-local"
              value={newBlock.startTime.toISOString().slice(0, 16)}
              onChange={(e) => setNewBlock({ ...newBlock, startTime: new Date(e.target.value) })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
            <input
              type="datetime-local"
              value={newBlock.endTime.toISOString().slice(0, 16)}
              onChange={(e) => setNewBlock({ ...newBlock, endTime: new Date(e.target.value) })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <input
            type="color"
            value={newBlock.color}
            onChange={(e) => setNewBlock({ ...newBlock, color: e.target.value })}
            className="w-full h-10 rounded-lg cursor-pointer"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Event
          </button>
        </form>
      )}

      <div className="space-y-2">
        {timeBlocks.map((block) => (
          <div
            key={block.id}
            className="p-2 rounded-lg text-white text-sm"
            style={{ backgroundColor: block.color }}
          >
            {block.title}
          </div>
        ))}
      </div>
    </div>
  );
}