import { useState } from 'react';

const Todo = ({ todo, onDelete, onEdit, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
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