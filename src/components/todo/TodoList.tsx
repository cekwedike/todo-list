import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTodo } from '@/context/TodoContext';
import { Todo } from '@/types/todo';
import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import { getTodoStats } from '@/utils/todoUtils';

export function TodoList() {
  const { state } = useTodo();
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const stats = getTodoStats(state.todos);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Tasks</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.active}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Completed</h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Overdue</h3>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.overdue}</p>
        </motion.div>
      </div>

      {/* Add Todo Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsAddingTodo(true)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Add New Task
      </motion.button>

      {/* Todo Form */}
      <AnimatePresence>
        {isAddingTodo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <TodoForm onClose={() => setIsAddingTodo(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Todo List */}
      <div className="space-y-4">
        <AnimatePresence>
          {state.todos.map((todo: Todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2 }}
            >
              <TodoItem todo={todo} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 