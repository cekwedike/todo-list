import { TodoProvider } from './context/TodoContext';
import { MainLayout } from './components/layout/MainLayout';
import { TodoList } from './components/todo/TodoList';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <MainLayout>
          <TodoList />
        </MainLayout>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App; 