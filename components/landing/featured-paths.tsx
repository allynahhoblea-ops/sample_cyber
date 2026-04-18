"use client";

import { careerPaths } from "@/data/mock-data";
import { cn } from "@/lib/utils";
import { Shield, Target, Eye, ArrowRight, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Shield: Shield,
  Target: Target,
  Eye: Eye,
};

const colorMap = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30 hover:border-primary",
    icon: "text-primary",
    badge: "bg-primary/20 text-primary",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30 hover:border-accent",
    icon: "text-accent",
    badge: "bg-accent/20 text-accent",
  },
  "chart-3": {
    bg: "bg-chart-3/10",
    border: "border-chart-3/30 hover:border-chart-3",
    icon: "text-chart-3",
    badge: "bg-chart-3/20 text-chart-3",
  },
};

export function FeaturedPaths() {
  return (
    <section className="border-t border-border bg-card/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Career Paths
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your specialization and follow a structured roadmap to
            success. Each path is designed by industry experts.
          </p>
        </div>

        {/* Career path cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careerPaths.map((path) => {
            const Icon = iconMap[path.icon as keyof typeof iconMap] || Shield;
            const colors = colorMap[path.color as keyof typeof colorMap] || colorMap.primary;

            return (
              <Link
                key={path.id}
                href={`/paths#${path.id}`}
                className="group"
              >
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-lg",
                    colors.border
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg",
                      colors.bg
                    )}
                  >
                    <Icon className={cn("h-6 w-6", colors.icon)} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {path.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm text-muted-foreground">
                    {path.description}
                  </p>

                  {/* Meta info */}
                  <div className="mb-4 flex flex-wrap gap-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium capitalize",
                        colors.badge
                      )}
                    >
                      {path.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {path.estimatedTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                      <BookOpen className="h-3 w-3" />
                      {path.courses.length} courses
                    </span>
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    View path details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Decorative gradient */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100",
                      colors.bg,
                      "opacity-0"
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/paths"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all career paths
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
