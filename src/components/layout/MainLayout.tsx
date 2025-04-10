import { ReactNode } from 'react';
import { Sidebar } from '../layout/Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
} 