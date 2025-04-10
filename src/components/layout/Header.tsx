import { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { TodoFilters } from '@/types/todo';
import { motion } from 'framer-motion';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { state, dispatch } = useTodo();
  const [searchQuery, setSearchQuery] = useState(state.filters.searchQuery);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_FILTERS', payload: { searchQuery } });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu Button & Logo */}
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 -ml-2 text-gray-500 lg:hidden hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={onMenuClick}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center ml-2 lg:ml-0">
              <span className="text-xl font-semibold text-gray-800 dark:text-white">TaskMaster</span>
            </div>
          </div>

          {/* Right: Search & User */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-64 pl-10 pr-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-gray-300 dark:placeholder-gray-400"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">JD</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 