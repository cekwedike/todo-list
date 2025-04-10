import { TodoProvider } from './context/TodoContext';
import { MainLayout } from './components/layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard';
import { ActiveTasks } from './components/pages/ActiveTasks';
import { CompletedTasks } from './components/pages/CompletedTasks';

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/active" element={<ActiveTasks />} />
            <Route path="/completed" element={<CompletedTasks />} />
          </Routes>
        </MainLayout>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App; 