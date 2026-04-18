import { careerPaths, getCourseProgress } from "@/data/mock-data";
import { ProgressBar } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  BookOpen,
  CheckCircle2,
  Circle,
  ArrowRight,
  Target, 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MyLearningPathPage() {
  // Get the user's current career path (Cybersecurity Analyst for demo)
  const currentPath = careerPaths[0];
  
  const totalCourses = currentPath.courses.length;
  const completedCourses = currentPath.courses.filter(
    (c) => getCourseProgress(c.id) === 100
  ).length;
  const overallProgress = Math.round(
    currentPath.courses.reduce((acc, c) => acc + getCourseProgress(c.id), 0) /
      totalCourses
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
            <Shield className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {currentPath.title}
            </h1>
            <p className="text-muted-foreground">{currentPath.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{currentPath.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            <span>{totalCourses} courses</span>
          </div>
        </div>
      </div>

      {/* Overall progress card */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">
            Path Progress
          </h2>
          <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
            {completedCourses}/{totalCourses} courses completed
          </span>
        </div>
        <ProgressBar value={overallProgress} showLabel variant="gradient" size="lg" />
      </div>

      {/* Learning roadmap */}
      <div>
        <h2 className="mb-6 text-lg font-semibold text-foreground">
          Your Learning Roadmap
        </h2>

        <div className="relative ml-4 border-l-2 border-border pl-8">
          {currentPath.courses.map((course, index) => {
            const progress = getCourseProgress(course.id);
            const isCompleted = progress === 100;
            const isInProgress = progress > 0 && progress < 100;
            const isLocked = index > 0 && getCourseProgress(currentPath.courses[index - 1].id) < 50;
            const totalLessons = course.modules.reduce(
              (acc, m) => acc + m.lessons.length,
              0
            );

            return (
              <div key={course.id} className="relative pb-8 last:pb-0">
                {/* Timeline node */}
                <div
                  className={cn(
                    "absolute -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full border-2",
                    isCompleted
                      ? "border-accent bg-accent"
                      : isInProgress
                      ? "border-primary bg-primary/20"
                      : "border-border bg-background"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-4 w-4 text-accent-foreground" />
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
                <div
                  className={cn(
                    "rounded-xl border bg-card p-6 transition-all",
                    isLocked
                      ? "border-border/50 opacity-60"
                      : "border-border hover:border-primary/30 hover:shadow-lg"
                  )}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      Step {index + 1}
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
                    {isLocked && (
                      <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        Locked
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {course.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {course.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{course.estimatedTime}</span>
                    <span>•</span>
                    <span>{totalLessons} lessons</span>
                    <span>•</span>
                    <span>{course.modules.length} modules</span>
                  </div>

                  {progress > 0 && (
                    <div className="mb-4">
                      <ProgressBar value={progress} showLabel variant="gradient" />
                    </div>
                  )}

                  <Link
                    href={isLocked ? "#" : `/courses/${course.id}`}
                    className={isLocked ? "pointer-events-none" : ""}
                  >
                    <Button
                      variant={isInProgress ? "default" : "outline"}
                      className={cn(
                        isInProgress && "glow-primary",
                        isLocked && "opacity-50"
                      )}
                      disabled={isLocked}
                    >
                      {isCompleted
                        ? "Review Course"
                        : isInProgress
                        ? "Continue Learning"
                        : isLocked
                        ? "Complete previous course first"
                        : "Start Course"}
                      {!isLocked && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Other paths suggestion */}
      <div className="rounded-xl border border-border bg-card/50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
            <Target className="h-6 w-6 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 font-semibold text-foreground">
              Explore Other Career Paths
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Interested in specializing further? Check out our Penetration
              Tester and SOC Analyst paths.
            </p>
            <Link href="/paths">
              <Button variant="outline" size="sm">
                View All Paths
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
