"use client";

import { CareerPath, getCourseProgress } from "@/data/mock-data";
import { cn } from "@/lib/utils";
import {
  Clock,
  BookOpen,
  CheckCircle2,
  Circle,
  LucideIcon,
  Target,
  Shield,
  Eye,
  Footprints,
  Network,
  Flame,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  shield: Shield,
  eye: Eye,
  Footprints: Footprints as LucideIcon,
  Network: Network as LucideIcon,
  Flame: Flame as LucideIcon,
  Trophy: Trophy as LucideIcon,
};

interface PathRoadmapProps {
  path: CareerPath;
  iconName: string;
}

const colorVariants = {
  primary: {
    iconBg: "bg-primary/20",
    iconText: "text-primary",
    badge: "bg-primary/20 text-primary",
    line: "bg-primary/30",
    activeDot: "bg-primary border-primary",
    button: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  accent: {
    iconBg: "bg-accent/20",
    iconText: "text-accent",
    badge: "bg-accent/20 text-accent",
    line: "bg-accent/30",
    activeDot: "bg-accent border-accent",
    button: "bg-accent text-accent-foreground hover:bg-accent/90",
  },
  "chart-3": {
    iconBg: "bg-chart-3/20",
    iconText: "text-chart-3",
    badge: "bg-chart-3/20 text-chart-3",
    line: "bg-chart-3/30",
    activeDot: "bg-chart-3 border-chart-3",
    button: "bg-chart-3 text-card hover:bg-chart-3/90",
  },
};

export function PathRoadmap({ path, iconName }: PathRoadmapProps) {
  const Icon = iconMap[iconName] || Target;
  const colors = colorVariants[path.color as keyof typeof colorVariants] || colorVariants.primary;

  return (
    <div className="relative">
      {/* Path header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl",
              colors.iconBg
            )}
          >
            <Icon className={cn("h-7 w-7", colors.iconText)} />
          </div>
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold text-foreground">
                {path.title}
              </h2>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-medium capitalize",
                  colors.badge
                )}
              >
                {path.difficulty}
              </span>
            </div>
            <p className="max-w-xl text-muted-foreground">{path.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{path.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            <span>{path.courses.length} courses</span>
          </div>
        </div>
      </div>

      {/* Vertical roadmap */}
      <div className="relative ml-7 border-l-2 border-border pl-8">
        {path.courses.map((course, courseIndex) => {
          const progress = getCourseProgress(course.id);
          const isCompleted = progress === 100;
          const isInProgress = progress > 0 && progress < 100;
          const totalLessons = course.modules.reduce(
            (acc, m) => acc + m.lessons.length,
            0
          );

          return (
            <div
              key={course.id}
              className="relative pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute -left-[2.6rem] flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background",
                  isCompleted
                    ? colors.activeDot
                    : isInProgress
                    ? "border-primary bg-primary/20"
                    : "border-border"
                )}
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                ) : (
                  <Circle
                    className={cn(
                      "h-3 w-3",
                      isInProgress ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                )}
              </div>

              {/* Course card */}
              <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        Level {courseIndex + 1}
                      </span>
                      {isCompleted && (
                        <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent">
                          Completed
                        </span>
                      )}
                      {isInProgress && (
                        <span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2 py-1">
                    {course.difficulty}
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-1">
                    {course.estimatedTime}
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-1">
                    {totalLessons} lessons
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-1">
                    {course.modules.length} modules
                  </span>
                </div>

                {/* Progress bar */}
                {progress > 0 && (
                  <div className="mb-4">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">
                        {progress}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className={cn(
                          "h-full transition-all",
                          isCompleted ? "bg-accent" : "bg-primary"
                        )}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <Link href={`/courses/${course.id}`}>
                  <Button
                    className={cn("w-full sm:w-auto", colors.button)}
                  >
                    {isCompleted
                      ? "Review Course"
                      : isInProgress
                      ? "Continue Learning"
                      : "Start Course"}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}