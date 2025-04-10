import React from 'react';
import { useTodo } from '@/context/TodoContext';
import { Priority } from '@/types/todo';

export function TodoFilter() {
  const { state, dispatch } = useTodo();
  const { filters } = state;

  const handleStatusChange = (status: 'all' | 'active' | 'completed') => {
    dispatch({ type: 'SET_FILTERS', payload: { status } });
  };

  const handleSearchChange = (searchQuery: string) => {
    dispatch({ type: 'SET_FILTERS', payload: { searchQuery } });
  };

  const handlePriorityChange = (priority: Priority | undefined) => {
    dispatch({ type: 'SET_FILTERS', payload: { priority } });
  };

  return (
    <div className="space-y-4">
      {/* Status Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleStatusChange('all')}
          className={`px-3 py-1 text-sm font-medium rounded-md ${
            filters.status === 'all'
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleStatusChange('active')}
          className={`px-3 py-1 text-sm font-medium rounded-md ${
            filters.status === 'active'
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => handleStatusChange('completed')}
          className={`px-3 py-1 text-sm font-medium rounded-md ${
            filters.status === 'completed'
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          Completed
        </button>
      </div>

      {/* Search Filter */}
      <div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={filters.searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
        />
      </div>

      {/* Priority Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handlePriorityChange(undefined)}
          className={`px-3 py-1 text-sm font-medium rounded-md ${
            filters.priority === undefined
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          All Priorities
        </button>
        <button
          onClick={() => handlePriorityChange('high')}
          className={`px-3 py-1 text-sm font-medium rounded-md ${
            filters.priority === 'high'
              ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          High
        </button>
        <button
          onClick={() => handlePriorityChange('medium')}
          className={`px-3 py-1 text-sm font-medium rounded-md ${
            filters.priority === 'medium'
              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          Medium
        </button>
        <button
          onClick={() => handlePriorityChange('low')}
          className={`px-3 py-1 text-sm font-medium rounded-md ${
            filters.priority === 'low'
              ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          Low
        </button>
      </div>
    </div>
  );
} 