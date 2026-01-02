'use client';

import { useEffect } from 'react';

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Suppress share-modal.js errors that don't affect functionality
    const originalError = console.error;
    console.error = (...args: any[]) => {
      if (
        args[0]?.includes?.('share-modal') ||
        args[0]?.includes?.('addEventListener') ||
        (args[0] instanceof Error && args[0].message?.includes?.('share-modal'))
      ) {
        return; // Silently suppress these errors
      }
      originalError(...args);
    };

    // Handle uncaught errors
    const handleError = (event: ErrorEvent) => {
      if (
        event.error?.message?.includes?.('share-modal') ||
        event.filename?.includes?.('share-modal')
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
      console.error = originalError;
    };
  }, []);

  return <>{children}</>;
}
