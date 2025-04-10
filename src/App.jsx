import { useState, useEffect } from 'react'
import Todo from './components/Todo'
import FilterControls from './components/FilterControls'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  const [newTodo, setNewTodo] = useState('')
  const [newDueDate, setNewDueDate] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim() === '') return
    
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      dueDate: newDueDate,
      category: newCategory
    }
    
    setTodos([...todos, todo])
    setNewTodo('')
    setNewDueDate('')
    setNewCategory('')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, updates) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updates } : todo
    ))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    const matchesFilter = filter === 'all' || 
      (filter === 'active' && !todo.completed) || 
      (filter === 'completed' && todo.completed)
    
    const matchesSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  return (
    <div className="app">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <input
          type="date"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
          className="date-input"
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="category-select"
        >
          <option value="">No Category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
        </select>
        <button type="submit" className="add-btn">Add</button>
      </form>
      
      <SearchBar onSearch={setSearchQuery} />
      
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onToggle={toggleTodo}
          />
        ))}
      </div>

      <FilterControls
        todos={todos}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />
    </div>
  )
}

export default App
