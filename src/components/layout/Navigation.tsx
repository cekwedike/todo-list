import { NavLink } from 'react-router-dom';
import { useTodo } from '@/context/TodoContext';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Navigation({ isOpen, onClose }: NavigationProps) {
  const { state } = useTodo();
  const stats = {
    total: state.todos.length,
    active: state.todos.filter(todo => !todo.completed).length,
    completed: state.todos.filter(todo => todo.completed).length
  };

  const categories = [
    { name: 'Work', color: 'bg-blue-500' },
    { name: 'Personal', color: 'bg-purple-500' },
    { name: 'Shopping', color: 'bg-green-500' },
    { name: 'Health', color: 'bg-red-500' }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 lg:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out
          border-r border-gray-200 dark:border-gray-700 lg:translate-x-0 lg:static
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 p-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400">Active</p>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{stats.active}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400">Completed</p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">{stats.completed}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto">
            <div className="space-y-1 px-3">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                All Tasks
              </NavLink>

              <NavLink
                to="/active"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Active
                <span className="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                  {stats.active}
                </span>
              </NavLink>

              <NavLink
                to="/completed"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Completed
                <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                  {stats.completed}
                </span>
              </NavLink>
            </div>

            {/* Categories */}
            <div className="mt-6">
              <h3 className="px-6 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Categories
              </h3>
              <div className="mt-3 px-3 space-y-1">
                {categories.map((category) => (
                  <NavLink
                    key={category.name}
                    to={`/category/${category.name.toLowerCase()}`}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    <span className={`w-2 h-2 rounded-full mr-3 ${category.color}`} />
                    {category.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Total Tasks</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stats.total} tasks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 p-2 text-gray-500 lg:hidden"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </aside>
    </>
  );
} 