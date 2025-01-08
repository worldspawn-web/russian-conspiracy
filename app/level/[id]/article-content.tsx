'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Volume2 } from 'lucide-react';
import level1Data from '@/app/data/level-1.json';
import level2Data from '@/app/data/level-2.json';
import level3Data from '@/app/data/level-3.json';
import { useParams } from 'next/navigation';

// TODO:
// Think about refactoring multiple imports and const defining
// which will be madness to do in the future (we have more than 200+ threads)

const levelsData = {
  '1': level1Data,
  '2': level2Data,
  '3': level3Data,
};

export function ArticleContent() {
  const params = useParams();
  const levelId = params.id as keyof typeof levelsData;
  const data = levelsData[levelId];

  if (!data) {
    return <div className="text-green-500">Уровень не найден</div>;
  }

  return (
    <article className="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-green-900/50">
      <h1 className="text-4xl font-bold text-green-500 mb-6">{data.title}</h1>

      <div className="flex gap-2 mb-8">
        <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-900">
          <BookOpen className="w-4 h-4 mr-2" />
          Время чтения: {data.readingTime} минут
        </Badge>
      </div>

      <div className="space-y-6 text-green-400/90">
        <p>{data.content.intro}</p>

        {data.content.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-bold text-green-500">{section.title}</h2>

            {section.image && (
              <Image
                src={section.image.url}
                alt={section.image.alt}
                width={section.image.width}
                height={section.image.height}
                className="rounded-lg my-8"
              />
            )}

            <div className="whitespace-pre-wrap">{section.content}</div>

            {section.audio && (
              <div className="bg-black/30 border border-green-900/50 rounded-lg p-4 flex items-center gap-4">
                <Volume2 className="w-6 h-6 text-green-500" />
                <div className="flex-1">
                  <div className="text-sm text-green-400/80 mb-2">{section.audio.title}</div>
                  <audio controls className="w-full">
                    <source src={section.audio.url} type="audio/mpeg" />
                    Ваш браузер не поддерживает аудио элемент.
                  </audio>
                </div>
              </div>
            )}
          </div>
        ))}

        <h2 className="text-2xl font-bold text-green-500">Список литературы</h2>
        <div className="bg-black/30 border border-green-900/50 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-green-500">Источники:</h3>
          <ol className="list-decimal list-inside space-y-2">
            {data.content.references.map((ref, index) => (
              <li key={index}>
                {ref.author} ({ref.year}) &quot;{ref.title}&quot;, {ref.publisher}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
