import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TodoList } from '../todo/TodoList';
import { Header } from './Header';
import { Navigation } from './Navigation';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Navigation Overlay */}
      <div className={`
        fixed inset-0 bg-gray-800/60 backdrop-blur-sm z-20 lg:hidden
        ${isSidebarOpen ? 'block' : 'hidden'}
      `} onClick={() => setIsSidebarOpen(false)} />

      {/* Header */}
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex">
        {/* Navigation */}
        <Navigation isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 lg:pl-[300px]">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<TodoList filter="all" />} />
              <Route path="/active" element={<TodoList filter="active" />} />
              <Route path="/completed" element={<TodoList filter="completed" />} />
              <Route path="/category/:category" element={<TodoList filter="category" />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
} 