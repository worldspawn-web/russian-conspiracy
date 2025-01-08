'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Volume2 } from 'lucide-react';
import level1Data from '@/app/data/level-1.json';
import level2Data from '@/app/data/level-2.json';
import level3Data from '@/app/data/level-3.json';
import { useParams } from 'next/navigation';
import { CodeBlock } from '@/app/components/syntax-highlighter';
import { useTranslation } from 'react-i18next';

// TODO:
// Think about refactoring multiple imports and const defining
// which will be madness to do in the future (we have more than 200+ threads)
const levelsData = {
  '1': level1Data,
  '2': level2Data,
  '3': level3Data,
};

export function ArticleContent() {
  const { t } = useTranslation();
  const params = useParams();
  const levelId = params.id as keyof typeof levelsData;
  const data = levelsData[levelId];

  if (!data) {
    return <div className="text-green-500">{t('level.notFound')}</div>;
  }

  const renderContent = (content: string) => {
    const codeBlockRegex = /```(\w+)\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push(
          <div key={lastIndex} className="whitespace-pre-wrap">
            {content.slice(lastIndex, match.index)}
          </div>
        );
      }

      // Add code block
      const [, language, code] = match;
      parts.push(<CodeBlock key={match.index} language={language} value={code.trim()} />);

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(
        <div key={lastIndex} className="whitespace-pre-wrap">
          {content.slice(lastIndex)}
        </div>
      );
    }

    return parts;
  };

  return (
    <article className="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-green-900/50">
      <h1 className="text-4xl font-bold text-green-500 mb-6">{data.title}</h1>

      <div className="flex gap-2 mb-8">
        <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-900">
          <BookOpen className="w-4 h-4 mr-2" />
          {t('article.readingTime', { minutes: data.readingTime })}
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

            <div>{renderContent(section.content)}</div>

            {section.audio && (
              <div className="bg-black/30 border border-green-900/50 rounded-lg p-4 flex items-center gap-4">
                <Volume2 className="w-6 h-6 text-green-500" />
                <div className="flex-1">
                  <div className="text-sm text-green-400/80 mb-2">{section.audio.title}</div>
                  <audio controls className="w-full">
                    <source src={section.audio.url} type="audio/mpeg" />
                    {t('common.audioNotSupported')}
                  </audio>
                </div>
              </div>
            )}
          </div>
        ))}

        <h2 className="text-2xl font-bold text-green-500">{t('article.references')}</h2>
        <div className="bg-black/30 border border-green-900/50 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-green-500">{t('article.sources')}:</h3>
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
