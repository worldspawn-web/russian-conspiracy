'use client';

import React, { useState } from 'react';
import { ProfileCard } from './profile-card';
import { LevelInfo } from './level-info';
import { LevelSquares } from './level-squares';

export default function RoadmapPage() {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(3); // lvl 3 for testing
  const totalLevels = 10;

  return (
    <div className="flex flex-col min-h-screen bg-black/90">
      <ProfileCard className="fixed top-4 left-4 z-10" />

      <div className="flex-1 flex flex-col justify-center items-center">
        <LevelSquares
          levels={totalLevels}
          currentLevel={currentLevel}
          selectedLevel={selectedLevel}
          onLevelSelect={setSelectedLevel}
        />
      </div>

      <LevelInfo level={selectedLevel} currentLevel={currentLevel} className="w-96 fixed top-0 right-0 h-screen" />
    </div>
  );
}
