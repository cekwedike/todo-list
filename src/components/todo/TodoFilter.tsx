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
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm dark:bg-slate-800">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search todos..."
          value={filters.searchQuery}
          onChange={handleSearchChange}
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleStatusChange('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filters.status === 'all'
              ? 'bg-blue-500 text-white dark:bg-blue-600'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleStatusChange('active')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filters.status === 'active'
              ? 'bg-blue-500 text-white dark:bg-blue-600'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => handleStatusChange('completed')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filters.status === 'completed'
              ? 'bg-blue-500 text-white dark:bg-blue-600'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
          }`}
        >
          Completed
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handlePriorityChange(undefined)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filters.priority === undefined
              ? 'bg-blue-500 text-white dark:bg-blue-600'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
          }`}
        >
          All Priorities
        </button>
        <button
          onClick={() => handlePriorityChange('high')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filters.priority === 'high'
              ? 'bg-red-500 text-white dark:bg-red-600'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
          }`}
        >
          High
        </button>
        <button
          onClick={() => handlePriorityChange('medium')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filters.priority === 'medium'
              ? 'bg-yellow-500 text-white dark:bg-yellow-600'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
          }`}
        >
          Medium
        </button>
        <button
          onClick={() => handlePriorityChange('low')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filters.priority === 'low'
              ? 'bg-green-500 text-white dark:bg-green-600'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white'
          }`}
        >
          Low
        </button>
      </div>
    </div>
  );
} 