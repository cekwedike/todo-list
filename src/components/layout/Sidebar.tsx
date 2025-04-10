import { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { TodoFilters } from '@/types/todo';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

export function Sidebar() {
  const { state, dispatch } = useTodo();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilterChange = (filter: Partial<TodoFilters>) => {
    dispatch({ type: 'SET_FILTERS', payload: filter });
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      action: () => handleFilterChange({ status: 'all' }),
      active: state.filters.status === 'all',
    },
    {
      name: 'Active Tasks',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      action: () => handleFilterChange({ status: 'active' }),
      active: state.filters.status === 'active',
    },
    {
      name: 'Completed',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      initial={{ width: '256px' }}
      animate={{ width: isCollapsed ? '80px' : '256px' }}
      className="h-full backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 shadow-lg flex flex-col"
    >
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Todo App
          </h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1 px-4 py-2">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={item.action}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                item.active
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'hover:bg-white/20 dark:hover:bg-gray-700/50'
              }`}
            >
              {item.icon}
              {!isCollapsed && <span>{item.name}</span>}
            </motion.button>
          ))}
        </div>

        {!isCollapsed && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 px-4">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleFilterChange({ category: category.value as any })}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                    state.filters.category === category.value
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'hover:bg-white/20 dark:hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
              <span className="text-lg font-bold">U</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">User</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">user@example.com</p>
            </div>
          </div>
        </div>
      )}
    </motion.aside>
  );
} 