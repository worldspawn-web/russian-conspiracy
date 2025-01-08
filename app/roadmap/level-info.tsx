import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import level1Data from '@/app/data/level-1.json';
import level2Data from '@/app/data/level-2.json';
import level3Data from '@/app/data/level-3.json';

// TODO:
// Think about refactoring multiple imports and const defining
// which will be madness to do in the future (we have more than 200+ threads)

const levelsData = {
  1: level1Data,
  2: level2Data,
  3: level3Data,
};

interface LevelInfoProps {
  level: number;
  currentLevel: number;
  className?: string;
}

export function LevelInfo({ level, currentLevel, className }: LevelInfoProps) {
  const isLocked = level > currentLevel;

  if (isLocked) {
    return (
      <Card className={cn('bg-black/50 backdrop-blur-lg border-green-900/50 h-full', className)}>
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-3xl font-bold text-green-500 text-center">Доступ запрещён</div>
        </CardContent>
      </Card>
    );
  }

  const levelData = levelsData[level as keyof typeof levelsData];

  return (
    <Card className={cn('bg-black/50 backdrop-blur-lg border-green-900/50 h-full', className)}>
      <CardHeader>
        <CardTitle className="text-green-500">Уровень {level}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-green-400">{levelData.title}</h2>
          <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-900">
            Время чтения: {levelData.readingTime} минут
          </Badge>
        </div>

        {levelData.content.sections[0].image && (
          <Image
            src={levelData.content.sections[0].image.url}
            alt={levelData.content.sections[0].image.alt}
            width={400}
            height={200}
            className="rounded-lg w-full object-cover"
          />
        )}

        <div className="flex gap-2 flex-wrap">
          {levelData.content.sections.slice(0, 3).map((section, index) => (
            <Badge key={index} variant="secondary" className="bg-green-900/20 text-green-400">
              {section.title}
            </Badge>
          ))}
        </div>

        <p className="text-green-400/80">{levelData.content.intro}</p>

        <div className="text-sm text-green-400/60">Количество разделов: {levelData.content.sections.length}</div>

        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={() => (window.location.href = `/level/${level}`)}
        >
          Начать урок
        </Button>
      </CardContent>
    </Card>
  );
}
