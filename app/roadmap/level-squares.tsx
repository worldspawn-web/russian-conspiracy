import React from 'react';
import { cn } from '@/lib/utils';

interface LevelSquareProps {
  level: number;
  isActive: boolean;
  isSelected: boolean;
  isLocked: boolean;
  distanceFromCenter: number;
  onClick: () => void;
}

const LevelSquare: React.FC<LevelSquareProps> = ({
  level,
  isActive,
  isSelected,
  isLocked,
  distanceFromCenter,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'w-16 h-16 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300',
        isActive ? 'bg-green-500 text-black' : 'bg-gray-800 text-white',
        isSelected ? 'ring-2 ring-green-300' : '',
        isLocked ? 'opacity-50' : '',
        distanceFromCenter === 0 ? 'opacity-100' : distanceFromCenter === 1 ? 'opacity-80' : 'opacity-60'
      )}
      onClick={onClick}
    >
      <span className="text-2xl font-bold">{level}</span>
    </div>
  );
};

interface LevelSquaresProps {
  levels: number;
  currentLevel: number;
  selectedLevel: number;
  onLevelSelect: (level: number) => void;
}

export const LevelSquares: React.FC<LevelSquaresProps> = ({ levels, currentLevel, selectedLevel, onLevelSelect }) => {
  const visibleLevels = 5; // Current + 2 right&left
  const halfVisible = Math.floor(visibleLevels / 2);

  // Centering by current level
  const startLevel = Math.max(1, Math.min(selectedLevel - halfVisible, levels - visibleLevels + 1));
  const endLevel = Math.min(levels, startLevel + visibleLevels - 1);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex justify-center items-center space-x-4 py-8">
        {Array.from({ length: endLevel - startLevel + 1 }, (_, index) => {
          const level = startLevel + index;
          const distanceFromCenter = Math.abs(level - selectedLevel);

          return (
            <LevelSquare
              key={level}
              level={level}
              isActive={level === currentLevel}
              isSelected={level === selectedLevel}
              isLocked={level > currentLevel}
              distanceFromCenter={distanceFromCenter}
              onClick={() => onLevelSelect(level)}
            />
          );
        })}
      </div>
    </div>
  );
};
