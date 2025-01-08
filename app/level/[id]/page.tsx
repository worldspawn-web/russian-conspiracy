'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { ArticleContent } from './article-content';

export default function LevelPage() {
  const params = useParams();
  const levelId = params.id;

  return (
    <div className="min-h-screen bg-black/90 py-8">
      <Card className="max-w-4xl mx-auto bg-black/50 backdrop-blur-lg border-green-900/50">
        <div className="p-8">
          <ArticleContent />

          <div className="mt-12 flex justify-end">
            <Button
              onClick={() => (window.location.href = `/level/${levelId}/test`)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Продолжить
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
