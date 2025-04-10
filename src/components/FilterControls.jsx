import { useState } from 'react';

const FilterControls = ({ todos, onFilterChange, onClearCompleted }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filter-controls">
      <div className="todo-stats">
        <span>{activeTodos} items left</span>
        {completedTodos > 0 && (
          <button onClick={onClearCompleted} className="clear-completed">
            Clear completed
          </button>
        )}
      </div>
      <div className="filter-buttons">
        <button
          className={activeFilter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={activeFilter === 'active' ? 'active' : ''}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </button>
        <button
          className={activeFilter === 'completed' ? 'active' : ''}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterControls; 