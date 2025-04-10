import { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { TodoFilters } from '@/types/todo';
import { motion } from 'framer-motion';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';

export function Sidebar() {
  const { state, dispatch } = useTodo();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilterChange = (filter: Partial<TodoFilters>) => {
    dispatch({ type: 'SET_FILTERS', payload: filter });
  };

  const stats = {
    total: state.todos.length,
    active: state.todos.filter(todo => !todo.completed).length,
    completed: state.todos.filter(todo => todo.completed).length
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      action: () => handleFilterChange({ status: 'all' }),
      active: state.filters.status === 'all',
    },
    {
      name: 'Active Tasks',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      action: () => handleFilterChange({ status: 'active' }),
      active: state.filters.status === 'active',
    },
    {
      name: 'Completed',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      action: () => handleFilterChange({ status: 'completed' }),
      active: state.filters.status === 'completed',
    },
  ];

  const categories = [
    { name: 'Work', value: 'work' },
    { name: 'Personal', value: 'personal' },
    { name: 'Shopping', value: 'shopping' },
    { name: 'Health', value: 'health' },
  ];

  return (
    <motion.aside
      initial={{ width: '288px' }}
      animate={{ width: isCollapsed ? '80px' : '288px' }}
      className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm border-r border-slate-200 dark:border-slate-700 flex flex-col"
    >
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Todo App
          </h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1 px-4 py-2">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.name.toLowerCase()}
              end
              className={({ isActive }) =>
                `w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                  isActive ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100' : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`
              }
            >
              {item.icon}
              {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
            </NavLink>
          ))}
        </div>

        {!isCollapsed && (
          <div className="mt-8">
            <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 px-4">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <NavLink
                  key={category.value}
                  to={`/category/${category.value}`}
                  className={({ isActive }) =>
                    `w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                      isActive ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100' : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                    }`
                  }
                >
                  <span className="text-sm font-medium">{category.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">U</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">User</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">user@example.com</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-auto pt-8">
        <div className="text-sm text-slate-400">
          <p>Total Tasks: {stats.total}</p>
        </div>
      </div>
    </motion.aside>
  );
} 