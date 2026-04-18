"use client";

import { cn } from "@/lib/utils";
import { Course } from "@/data/mock-data";
import { Clock, Star, Users, BookOpen } from "lucide-react";
import { ProgressBar } from "./progress-bar";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
  progress?: number;
  className?: string;
  showProgress?: boolean;
}

export function CourseCard({
  course,
  progress = 0,
  className,
  showProgress = false,
}: CourseCardProps) {
  const difficultyColors = {
    beginner: "bg-accent/20 text-accent",
    intermediate: "bg-chart-4/20 text-chart-4",
    advanced: "bg-chart-5/20 text-chart-5",
  };

  const totalLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  );

  return (
    <Link href={`/courses/${course.id}`}>
      <div
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5",
          className
        )}
      >
        {/* Thumbnail placeholder */}
        <div className="relative h-40 overflow-hidden bg-secondary">
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-muted-foreground/50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-medium capitalize",
                difficultyColors[course.difficulty]
              )}
            >
              {course.difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {course.title}
          </h3>
          <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">
            {course.description}
          </p>

          {/* Stats */}
          <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{course.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-chart-4" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>{(course.enrolledCount / 1000).toFixed(1)}k</span>
            </div>
          </div>

          {/* Lessons count */}
          <div className="mb-3 flex items-center gap-2 text-sm">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              {totalLessons} lessons • {course.modules.length} modules
            </span>
          </div>

          {/* Progress bar */}
          {showProgress && (
            <ProgressBar
              value={progress}
              showLabel
              size="sm"
              variant="gradient"
            />
          )}
        </div>

        {/* Hover glow effect */}
        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
        </div>
      </div>
    </Link>
  );
}
