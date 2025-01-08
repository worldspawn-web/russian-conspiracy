'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-green-500">
      <div className="space-y-4 text-center">
        <h2 className="text-xl font-bold">Что-то пошло не так</h2>
        <button
          onClick={reset}
          className="px-4 py-2 bg-green-900/20 hover:bg-green-900/40 rounded-md transition-colors"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
