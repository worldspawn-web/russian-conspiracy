'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Volume2 } from 'lucide-react';

export function ArticleContent() {
  return (
    <article className="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-green-900/50">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Теория заговора: Lorem Ipsum</h1>

      <div className="flex gap-2 mb-8">
        <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-900">
          <BookOpen className="w-4 h-4 mr-2" />
          Время чтения: 10 минут
        </Badge>
      </div>

      <div className="space-y-6 text-green-400/90">
        <p>
          Добро пожаловать в увлекательное исследование одной из самых интригующих теорий заговора нашего времени.
          Сегодня мы рассмотрим тайну, известную как &quot;Lorem Ipsum&quot;.
        </p>

        <h2 className="text-2xl font-bold text-green-500">Происхождение теории</h2>

        <Image
          src="/placeholder.svg"
          alt="Ancient Lorem Ipsum manuscript"
          width={800}
          height={400}
          className="rounded-lg my-8"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua:
        </p>

        <ul>
          <li>Древние манускрипты указывают на тайное общество типографов</li>
          <li>Закодированные послания в классических текстах</li>
          <li>Связь с древними цивилизациями</li>
        </ul>

        <h2 className="text-2xl font-bold text-green-500">Технические доказательства</h2>

        <div className="bg-black/30 border border-green-900/50 rounded-lg p-4 my-6">
          <pre className="language-javascript">
            <code>
              {`
function decodeLoremIpsum(text) {
  const secret = text.split('')
    .reverse()
    .join('')
    .replace(/[aeiou]/g, '');
  
  return secret;
}
          `.trim()}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-green-500">Аудио свидетельства</h2>

        <div className="bg-black/30 border border-green-900/50 rounded-lg p-4 flex items-center gap-4">
          <Volume2 className="w-6 h-6 text-green-500" />
          <div className="flex-1">
            <div className="text-sm text-green-400/80 mb-2">Запись древнего ритуала типографов</div>
            <audio controls className="w-full">
              <source src="/sample-audio.mp3" type="audio/mpeg" />
              Ваш браузер не поддерживает аудио элемент.
            </audio>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-green-500">Современные исследования</h2>

        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:
        </p>

        <blockquote className="border-l-4 border-green-500 pl-4 my-4">
          &quot;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.&quot;
          <footer className="text-green-400/60">— Аноним, 1500-е годы</footer>
        </blockquote>

        <h2 className="text-2xl font-bold text-green-500">Список литературы</h2>

        <div className="bg-black/30 border border-green-900/50 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-green-500">Источники:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Ancient Typography Society (1969) &quot;The Lorem Ipsum Conspiracy&quot;</li>
            <li>Smith, J. (1985) &quot;Hidden Messages in Classical Texts&quot;</li>
            <li>Johnson, R. (1992) &quot;Decoding the Printer&apos;s Secret Society&quot;</li>
            <li>Brown, D. (2001) &quot;The Typography Code&quot;</li>
          </ol>
        </div>
      </div>
    </article>
  );
}
