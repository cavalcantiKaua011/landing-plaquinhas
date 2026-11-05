import { Award, MessageCircle, Star, Target, TrendingUp, Zap, type LucideIcon } from 'lucide-react';

const map: Record<string, LucideIcon> = {
  star: Star,
  award: Award,
  trending: TrendingUp,
  message: MessageCircle,
  zap: Zap,
  target: Target,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Star;
  return <C className={className} strokeWidth={1.8} aria-hidden />;
}
