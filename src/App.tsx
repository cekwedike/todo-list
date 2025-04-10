import { TodoProvider } from './context/TodoContext';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Layout />
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App; 