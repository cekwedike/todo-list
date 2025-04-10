import { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { TodoFilters } from '@/types/todo';
import { motion } from 'framer-motion';

export function Sidebar() {
  const { state, dispatch } = useTodo();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleFilterChange = (filter: Partial<TodoFilters>) => {
    dispatch({ type: 'SET_FILTERS', payload: filter });
  };

  return (
    <motion.aside
      initial={{ width: '280px' }}
      animate={{ width: isCollapsed ? '80px' : '280px' }}
      className="bg-white dark:bg-gray-800 shadow-lg flex flex-col"
    >
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Todo App</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1 px-4 py-2">
        <div className="space-y-2">
          <button
            onClick={() => handleFilterChange({ status: 'all' })}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              state.filters.status === 'all'
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {!isCollapsed && 'All Tasks'}
          </button>
          <button
            onClick={() => handleFilterChange({ status: 'active' })}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              state.filters.status === 'active'
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {!isCollapsed && 'Active'}
          </button>
          <button
            onClick={() => handleFilterChange({ status: 'completed' })}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              state.filters.status === 'completed'
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {!isCollapsed && 'Completed'}
          </button>
        </div>

        {!isCollapsed && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
              Categories
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => handleFilterChange({ category: 'work' })}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  state.filters.category === 'work'
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Work
              </button>
              <button
                onClick={() => handleFilterChange({ category: 'personal' })}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  state.filters.category === 'personal'
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => handleFilterChange({ category: 'shopping' })}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  state.filters.category === 'shopping'
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Shopping
              </button>
              <button
                onClick={() => handleFilterChange({ category: 'health' })}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  state.filters.category === 'health'
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Health
              </button>
            </div>
          </div>
        )}
      </nav>
    </motion.aside>
  );
} 