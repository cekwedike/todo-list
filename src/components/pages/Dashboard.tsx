import { TodoList } from '../todo/TodoList';

export function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Dashboard</h1>
      <TodoList />
    </div>
  );
} 