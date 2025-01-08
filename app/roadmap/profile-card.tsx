import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
  return (
    <Card className={cn('bg-black/50 backdrop-blur-lg border-green-900/50', className)}>
      <CardContent className="p-6 text-green-500">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Agent Smith</h3>
          <div className="text-sm space-y-1 text-green-400/80">
            <p>Регистрация: 01.01.2024</p>
            <p>Пройдено тем: 3/10</p>
            <p>Ранг: Неофит</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
