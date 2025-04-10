import { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  const { state } = useTodo();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const stats = {
    total: state.todos.length,
    active: state.todos.filter(todo => !todo.completed).length,
    completed: state.todos.filter(todo => todo.completed).length
  };

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-slate-800 text-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <h1 className="text-xl font-bold">Todo App</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
              isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50'
            }`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/active"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
              isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50'
            }`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span>Active Tasks</span>
          <span className="ml-auto bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-xs">
            {stats.active}
          </span>
        </NavLink>

        <NavLink
          to="/completed"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
              isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50'
            }`
          }
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Completed</span>
          <span className="ml-auto bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full text-xs">
            {stats.completed}
          </span>
        </NavLink>

        {/* Categories Section */}
        <div className="mt-8">
          <h3 className="px-4 mb-2 text-sm font-medium text-slate-400">Categories</h3>
          <div className="space-y-1">
            {['Work', 'Personal', 'Shopping', 'Health'].map((category) => (
              <NavLink
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm rounded-lg transition-colors ${
                    isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50'
                  }`
                }
              >
                {category}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer Stats */}
      <div className="p-4 border-t border-slate-700">
        <div className="text-sm text-slate-400">
          <p>Total Tasks: {stats.total}</p>
        </div>
      </div>
    </aside>
  );
} 