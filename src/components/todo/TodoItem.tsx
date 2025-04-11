import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTodo } from '@/context/TodoContext';
import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { dispatch } = useTodo();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  const getPriorityColor = (priority: Todo['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low':
        return 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-slate-50 text-slate-600 dark:bg-slate-900/20 dark:text-slate-400';
    }
  };

  const getCategoryColor = (category: Todo['category']) => {
    switch (category) {
      case 'work':
        return 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400';
      case 'personal':
        return 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400';
      case 'shopping':
        return 'bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400';
      case 'health':
        return 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-slate-50 text-slate-600 dark:bg-slate-900/20 dark:text-slate-400';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle}
            className={`flex-shrink-0 w-5 h-5 rounded border ${
              todo.completed
                ? 'border-green-500 bg-green-500'
                : 'border-slate-300 dark:border-slate-600'
            } flex items-center justify-center mt-0.5`}
          >
            {todo.completed && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </motion.button>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3
                className={`text-base font-medium ${
                  todo.completed
                    ? 'text-slate-400 dark:text-slate-500 line-through'
                    : 'text-slate-900 dark:text-slate-100'
                }`}
              >
                {todo.text}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-md ${getPriorityColor(
                    todo.priority
                  )}`}
                >
                  {todo.priority}
                </span>
                {todo.category && (
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-md ${getCategoryColor(
                      todo.category
                    )}`}
                  >
                    {todo.category}
                  </span>
                )}
              </div>
            </div>

            {todo.dueDate && (
              <div className="mt-1 flex items-center text-sm text-slate-500 dark:text-slate-400">
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Due: {new Date(todo.dueDate).toLocaleDateString()}
              </div>
            )}

            {isExpanded && todo.notes && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 rounded-md p-3"
              >
                {todo.notes}
              </motion.p>
            )}

            <div className="mt-3 flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={isExpanded ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                  />
                </svg>
                {isExpanded ? 'Show Less' : 'Show More'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDelete}
                className="text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 