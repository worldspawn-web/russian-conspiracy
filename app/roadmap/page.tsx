'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ProfileCard } from './profile-card';
import { LevelInfo } from './level-info';

// Dynamically import Scene with no SSR
const Scene = dynamic(() => import('./scene'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-green-500 text-xl">Загрузка 3D сцены...</div>
    </div>
  ),
});

export default function RoadmapPage() {
  return (
    <div className="flex min-h-screen bg-black/90">
      <ProfileCard className="fixed top-4 left-4 z-10" />

      <div className="flex-1 h-screen pr-96">
        <ErrorBoundary>
          <Scene />
        </ErrorBoundary>
      </div>

      <LevelInfo level={1} className="w-96 fixed top-0 right-0 h-screen" />
    </div>
  );
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-green-500 text-xl">Ошибка при загрузке 3D сцены. Пожалуйста, обновите страницу.</div>
        </div>
      );
    }

    return this.props.children;
  }
}
