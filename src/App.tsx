import { TodoProvider } from './context/TodoContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Todo from './components/Todo';

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Todo />} />
            <Route path="active" element={<Todo filter="active" />} />
            <Route path="completed" element={<Todo filter="completed" />} />
            <Route path="category/:category" element={<Todo />} />
          </Route>
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App; 