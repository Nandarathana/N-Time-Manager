import React, { useState } from 'react';
import { Header } from './components/Header';
import { QuickAdd } from './components/QuickAdd';
import { TaskList } from './components/TaskList';
import { Calendar } from './components/Calendar';
import { FocusTimer } from './components/FocusTimer';
import type { Task, TimeBlock } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete project presentation',
      description: 'Prepare slides for the client meeting',
      priority: 'high',
      completed: false,
      dueDate: new Date('2024-03-20'),
    },
    {
      id: '2',
      title: 'Review team updates',
      priority: 'medium',
      completed: false,
    },
  ]);

  const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([
    {
      id: '1',
      title: 'Team Meeting',
      startTime: new Date(),
      endTime: new Date(),
      color: '#4F46E5',
    },
  ]);

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = (newTask: Omit<Task, 'id'>) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(),
    };
    setTasks([task, ...tasks]);
  };

  const handleAddTimeBlock = (newBlock: Omit<TimeBlock, 'id'>) => {
    const block: TimeBlock = {
      ...newBlock,
      id: Date.now().toString(),
    };
    setTimeBlocks([...timeBlocks, block]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tasks Column */}
            <div className="lg:col-span-2 space-y-6">
              <QuickAdd onAddTask={handleAddTask} />
              <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Calendar 
                timeBlocks={timeBlocks} 
                onAddTimeBlock={handleAddTimeBlock}
              />
              <FocusTimer />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} N Time Manager. Stay productive.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;