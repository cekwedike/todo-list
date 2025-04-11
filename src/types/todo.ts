export type Priority = 'high' | 'medium' | 'low';
export type Category = 'work' | 'personal' | 'shopping' | 'health';
export type Recurrence = 'none' | 'daily' | 'weekly' | 'monthly';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  dueDate?: string;
  category?: Category;
  priority: Priority;
  recurrence: Recurrence;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoFormData {
  text: string;
  dueDate?: string;
  category?: Category;
  priority: Priority;
  recurrence: Recurrence;
  notes?: string;
}

export interface TodoFilters {
  status: 'all' | 'active' | 'completed';
  category?: Category;
  priority?: Priority;
  searchQuery: string;
}

export interface TodoState {
  todos: Todo[];
  filters: TodoFilters;
  isLoading: boolean;
  error: string | null;
} 