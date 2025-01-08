'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface LevelCircleProps {
  position: [number, number, number];
  isActive: boolean;
  isSelected: boolean;
  isLocked: boolean;
  number: number;
  onClick?: () => void;
}

const LevelCircle = ({ position, isActive, isSelected, isLocked, number, onClick }: LevelCircleProps) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += 0.005;
    }
  });

  const color = isLocked ? '#4a4a4a' : isActive ? '#00ff00' : '#1a472a';
  const emissive = isSelected ? '#00ff00' : '#000000';

  return (
    <group position={position} onClick={isLocked ? undefined : onClick}>
      <mesh ref={ref}>
        <torusGeometry args={[1, 0.1, 16, 32]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={2} transparent opacity={0.8} />
      </mesh>
      <Text position={[0, 0, 0.2]} fontSize={0.5} color={isLocked ? '#4a4a4a' : '#ffffff'}>
        {number}
      </Text>
    </group>
  );
};

interface LevelCirclesProps {
  currentLevel: number;
  selectedLevel: number;
  onLevelSelect: (level: number) => void;
}

export function LevelCircles({ currentLevel, selectedLevel, onLevelSelect }: LevelCirclesProps) {
  const levels = 10;
  const spacing = 4;

  return (
    <group position={[-2, 10, 0]}>
      {Array.from({ length: levels }).map((_, index) => {
        const row = Math.floor(index / 2);
        const isEvenRow = row % 2 === 0;
        const column = index % 2;

        const x = (isEvenRow ? column : 1 - column) * spacing;
        const y = -row * spacing;

        return (
          <LevelCircle
            key={index}
            position={[x, y, 0]}
            isActive={index + 1 === currentLevel}
            isSelected={index + 1 === selectedLevel}
            isLocked={index + 1 > currentLevel}
            number={index + 1}
            onClick={() => index + 1 <= currentLevel && onLevelSelect(index + 1)}
          />
        );
      })}
    </group>
  );
}
