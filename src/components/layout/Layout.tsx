import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TodoList } from '../todo/TodoList';
import { Header } from './Header';
import { Navigation } from './Navigation';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Layout */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Navigation */}
        <Navigation isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Mobile Navigation Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 w-full lg:w-[calc(100%-18rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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