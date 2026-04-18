import { CourseCard } from "@/components/course-card";
import { ProgressBar } from "@/components/progress-bar";
import { userProgress, courses, getCourseProgress } from "@/data/mock-data";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/stat-card";

export default function DashboardPage() {
  const currentCourse = userProgress.currentCourse;
  const currentLesson = userProgress.currentLesson;

  const recommendedCourses = courses
    .filter((c) => c.id !== currentCourse?.id)
    .slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Welcome back, John
        </h1>
        <p className="text-muted-foreground">
          Continue your cybersecurity journey where you left off.
        </p>
      </div>

      {/* Stats (FIXED: string icons only) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Courses Completed"
          value={`${userProgress.coursesCompleted}/${userProgress.totalCourses}`}
          subtitle="Keep going!"
          icon="book"
        />

        <StatCard
          title="Current Track"
          value={userProgress.currentTrack}
          icon="target"
        />

        <StatCard
          title="Overall Progress"
          value={`${userProgress.overallProgress}%`}
          subtitle="Nice progress"
          icon="trending"
        />

        <StatCard
          title="Study Time"
          value="24h"
          subtitle="This month"
          icon="clock"
        />
      </div>

      {/* Continue learning */}
      {currentCourse && currentLesson && (
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              Continue Learning
            </h2>

            <Link
              href={`/courses/${currentCourse.id}`}
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View Course
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-secondary lg:w-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90">
                  <Play className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <span className="mb-2 inline-block rounded-full bg-primary/20 px-2.5 py-1 text-xs font-medium text-primary">
                In Progress
              </span>

              <h3 className="mb-1 text-xl font-semibold text-foreground">
                {currentCourse.title}
              </h3>

              <p className="mb-4 text-sm text-muted-foreground">
                Current lesson: {currentLesson.title}
              </p>

              <div className="mb-4">
                <ProgressBar
                  value={getCourseProgress(currentCourse.id)}
                  showLabel
                  variant="gradient"
                />
              </div>

              <Link href={`/courses/${currentCourse.id}/learn`}>
                <Button className="glow-primary gap-2">
                  <Play className="h-4 w-4" />
                  Continue Lesson
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Recommended */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">
            Recommended For You
          </h2>

          <Link
            href="/courses"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              progress={getCourseProgress(course.id)}
              showProgress
            />
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="mb-6 text-lg font-semibold text-foreground">
          Recent Achievements
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {userProgress.achievements.slice(0, 4).map((achievement) => (
            <div
              key={achievement.id}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <span className="text-lg">
                  {achievement.type === "milestone" && "🏆"}
                  {achievement.type === "skill" && "⚡"}
                  {achievement.type === "streak" && "🔥"}
                </span>
              </div>

              <h3 className="mb-1 text-sm font-semibold text-foreground">
                {achievement.title}
              </h3>

              <p className="text-xs text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}