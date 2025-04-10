import { useState } from 'react';
import { format } from 'date-fns';

const Todo = ({ todo, onDelete, onEdit, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate || '');
  const [editCategory, setEditCategory] = useState(todo.category || '');

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, {
        text: editText,
        dueDate: editDueDate,
        category: editCategory
      });
    }
    setIsEditing(!isEditing);
  };

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <input
            type="date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
            className="date-input"
          />
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="category-select"
          >
            <option value="">No Category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="shopping">Shopping</option>
            <option value="health">Health</option>
          </select>
        </div>
      ) : (
        <div className="todo-content">
          <span className="todo-text">{todo.text}</span>
          {todo.dueDate && (
            <span className={`due-date ${isOverdue ? 'overdue' : ''}`}>
              Due: {format(new Date(todo.dueDate), 'MMM dd, yyyy')}
            </span>
          )}
          {todo.category && (
            <span className={`category-tag ${todo.category}`}>
              {todo.category}
            </span>
          )}
        </div>
      )}
      <div className="todo-actions">
        <button onClick={() => onToggle(todo.id)} className="toggle-btn">
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button onClick={handleEdit} className="edit-btn">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => onDelete(todo.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo; 