import React from 'react';
import { Clock, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Clock className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              N Time Manager
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#calendar" className="text-gray-600 hover:text-gray-900 transition-colors">
              Calendar
            </a>
            <a href="#tasks" className="text-gray-600 hover:text-gray-900 transition-colors">
              Tasks
            </a>
            <a href="#focus" className="text-gray-600 hover:text-gray-900 transition-colors">
              Focus Timer
            </a>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}