import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative flex h-screen">
        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 w-72 z-10">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col ml-72">
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-700">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 