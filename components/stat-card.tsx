import { LucideIcon, BookOpen, Target, TrendingUp, Clock } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  target: Target,
  trending: TrendingUp,
  clock: Clock,
};

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: string | LucideIcon;
};

export function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  const Icon = typeof icon === "string" ? iconMap[icon] || BookOpen : icon;

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xl font-semibold text-foreground">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}