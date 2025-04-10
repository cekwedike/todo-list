import { TodoProvider } from './context/TodoContext';
import { MainLayout } from './components/layout/MainLayout';
import { TodoList } from './components/todo/TodoList';

function App() {
  return (
    <TodoProvider>
      <MainLayout>
        <TodoList />
      </MainLayout>
    </TodoProvider>
  );
}

export default App; 