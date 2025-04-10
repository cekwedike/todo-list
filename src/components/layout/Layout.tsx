import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TodoList } from '../todo/TodoList';
import { Header } from './Header';
import { Navigation } from './Navigation';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Mobile Navigation Overlay */}
      <div 
        className={`
          fixed inset-0 bg-slate-800/60 backdrop-blur-sm z-20 lg:hidden
          ${isSidebarOpen ? 'block' : 'hidden'}
        `} 
        onClick={() => setIsSidebarOpen(false)} 
      />

      {/* Header */}
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Navigation */}
        <Navigation isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative">
          <div className="container mx-auto p-6">
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