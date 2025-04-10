import { Todo, TodoFilters } from '@/types/todo';

export function filterTodos(todos: Todo[], filters: TodoFilters): Todo[] {
  return todos.filter((todo) => {
    // Filter by status
    if (filters.status === 'active' && todo.completed) return false;
    if (filters.status === 'completed' && !todo.completed) return false;

    // Filter by category
    if (filters.category && todo.category !== filters.category) return false;

    // Filter by priority
    if (filters.priority && todo.priority !== filters.priority) return false;

    // Filter by search query
    if (filters.searchQuery) {
      const searchLower = filters.searchQuery.toLowerCase();
      return (
        todo.text.toLowerCase().includes(searchLower) ||
        todo.notes?.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });
}

export function sortTodos(todos: Todo[]): Todo[] {
  return [...todos].sort((a, b) => {
    // Sort by completion status (uncompleted first)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }

    // Sort by due date (earlier dates first)
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (a.dueDate) return -1;
    if (b.dueDate) return 1;

    // Sort by priority (high to low)
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

export function getTodoStats(todos: Todo[]) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const active = total - completed;
  const overdue = todos.filter(
    (todo) => !todo.completed && todo.dueDate && new Date(todo.dueDate) < new Date()
  ).length;

  return {
    total,
    completed,
    active,
    overdue,
    completionRate: total > 0 ? (completed / total) * 100 : 0,
  };
} 