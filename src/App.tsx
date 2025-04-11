import { TodoProvider } from './context/TodoContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { TodoList } from './components/pages/TodoList';

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoList />} />
            <Route path="active" element={<TodoList filter="active" />} />
            <Route path="completed" element={<TodoList filter="completed" />} />
            <Route path="category/:category" element={<TodoList />} />
          </Route>
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App; 