import { TodoList } from '../todo/TodoList';
import { useTodo } from '../../context/TodoContext';
import { useEffect } from 'react';

export function CompletedTasks() {
  const { dispatch } = useTodo();

  useEffect(() => {
    dispatch({ type: 'SET_FILTERS', payload: { status: 'completed' } });
    return () => {
      dispatch({ type: 'SET_FILTERS', payload: { status: 'all' } });
    };
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Completed Tasks</h1>
      <TodoList />
    </div>
  );
} 