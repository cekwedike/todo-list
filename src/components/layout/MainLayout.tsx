import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative flex h-screen">
        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 w-64 z-10">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col ml-64">
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
            <div className="max-w-7xl mx-auto">
              <div className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 rounded-2xl shadow-xl p-6">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 