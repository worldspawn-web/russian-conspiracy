import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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

  const levelData = {
    title: 'Теория Плоской Земли',
    difficulty: 'Средняя',
    image: '/placeholder.svg',
    tags: ['Земля', 'NASA', 'Космос'],
    description: 'Изучите основные аргументы сторонников теории плоской Земли и научитесь их анализировать.',
    questionCount: 5,
  };

  return (
    <Card className={cn('bg-black/50 backdrop-blur-lg border-green-900/50 h-full', className)}>
      <CardHeader>
        <CardTitle className="text-green-500">Уровень {level}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-green-400">{levelData.title}</h2>
          <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-900">
            {levelData.difficulty}
          </Badge>
        </div>

        <Image
          src={levelData.image}
          alt={levelData.title}
          width={400}
          height={200}
          className="rounded-lg w-full object-cover"
        />

        <div className="flex gap-2 flex-wrap">
          {levelData.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-green-900/20 text-green-400">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-green-400/80">{levelData.description}</p>

        <div className="text-sm text-green-400/60">Количество вопросов: {levelData.questionCount}</div>

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
