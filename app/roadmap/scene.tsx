'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import dynamic from 'next/dynamic';

// Dynamically import LevelCircles with no SSR
const LevelCircles = dynamic(() => import('./level-circles').then((mod) => mod.LevelCircles), {
  ssr: false,
  loading: () => null,
});

export default function Scene() {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(1);

  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]} legacy={false}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={75} />
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <color attach="background" args={['#000000']} />
          <LevelCircles currentLevel={currentLevel} selectedLevel={selectedLevel} onLevelSelect={setSelectedLevel} />
        </Suspense>
      </Canvas>
    </div>
  );
}
