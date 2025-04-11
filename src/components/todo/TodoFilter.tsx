import React from 'react';
import { useTodo } from '@/context/TodoContext';
import { Priority } from '@/types/todo';

export function TodoFilter() {
  const { state, dispatch } = useTodo();
  const { filters } = state;

  const handleStatusChange = (status: 'all' | 'active' | 'completed') => {
    dispatch({ type: 'SET_FILTERS', payload: { status } });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FILTERS', payload: { searchQuery: event.target.value } });
  };

  const handlePriorityChange = (priority: Priority | undefined) => {
    dispatch({ type: 'SET_FILTERS', payload: { priority } });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 bg-white rounded-lg shadow-sm dark:bg-slate-800">
      <input
        type="text"
        placeholder="Search todos..."
        value={filters.searchQuery}
        onChange={handleSearchChange}
        className="w-full sm:w-64 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
      />
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => handleStatusChange('all')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filters.status === 'all'
                ? 'bg-blue-500 text-white dark:bg-blue-600'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleStatusChange('active')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filters.status === 'active'
                ? 'bg-blue-500 text-white dark:bg-blue-600'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => handleStatusChange('completed')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filters.status === 'completed'
                ? 'bg-blue-500 text-white dark:bg-blue-600'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
            }`}
          >
            Completed
          </button>
        </div>

        <div className="hidden sm:block h-6 w-px bg-gray-200 dark:bg-slate-600" />

        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => handlePriorityChange(undefined)}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filters.priority === undefined
                ? 'bg-blue-500 text-white dark:bg-blue-600'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => handlePriorityChange('high')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filters.priority === 'high'
                ? 'bg-red-500 text-white dark:bg-red-600'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
            }`}
          >
            High
          </button>
          <button
            onClick={() => handlePriorityChange('medium')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filters.priority === 'medium'
                ? 'bg-yellow-500 text-white dark:bg-yellow-600'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
            }`}
          >
            Med
          </button>
          <button
            onClick={() => handlePriorityChange('low')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filters.priority === 'low'
                ? 'bg-green-500 text-white dark:bg-green-600'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
            }`}
          >
            Low
          </button>
        </div>
      </div>
    </div>
  );
} 