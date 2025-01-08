import { Check, Lock } from 'lucide-react';

interface CompletedOverlayProps {
  isActive: boolean;
}

export function CompletedOverlay({ isActive }: CompletedOverlayProps) {
  if (isActive) return null;

  return (
    <div className="absolute right-1 bottom-1">
      <Check className="w-4 h-4 text-green-400" />
    </div>
  );
}

export function LockedOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" />
      <Lock className="w-6 h-6 text-gray-400 absolute right-1 bottom-1" />
      <div
        className="absolute inset-0 border-2 border-gray-600 rounded-lg"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 5px,
            rgba(75, 75, 75, 0.1) 5px,
            rgba(75, 75, 75, 0.1) 10px
          )`,
        }}
      />
    </div>
  );
}
