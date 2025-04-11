import { useParams } from 'react-router-dom';
import { useTodo } from '@/context/TodoContext';
import Todo from '../Todo';

interface TodoListProps {
  filter?: 'active' | 'completed';
}

export function TodoList({ filter }: TodoListProps) {
  const { state, dispatch } = useTodo();
  const { category } = useParams();

  let filteredTodos = state.todos;

  // Apply filters
  if (filter === 'active') {
    filteredTodos = filteredTodos.filter(todo => !todo.completed);
  } else if (filter === 'completed') {
    filteredTodos = filteredTodos.filter(todo => todo.completed);
  }

  if (category) {
    filteredTodos = filteredTodos.filter(todo => 
      todo.category?.toLowerCase() === category.toLowerCase()
    );
  }

  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleEdit = (id: string, updates: any) => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, updates } });
  };

  return (
    <div className="space-y-4">
      {filteredTodos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
      {filteredTodos.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No tasks found
        </p>
      )}
    </div>
  );
} 