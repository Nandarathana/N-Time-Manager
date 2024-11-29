import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function FocusTimer() {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number;

    if (isActive && time > 0) {
      interval = window.setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Focus Timer</h2>
      <div className="text-4xl font-bold mb-6">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          {isActive ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-100 text-gray-600 p-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          <RotateCcw className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}