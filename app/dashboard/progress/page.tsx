import { userProgress, courses, getCourseProgress } from "@/data/mock-data";
import { ProgressBar } from "@/components/progress-bar";
import { StatCard } from "@/components/stat-card";
import {
  Trophy,
  Target,
  Flame,
  Clock,
  BookOpen,
  TrendingUp,
  Award,
  Zap,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProgressTrackerPage() {
  // Calculate weekly activity data (mock)
  const weeklyActivity = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 1.5 },
    { day: "Wed", hours: 3 },
    { day: "Thu", hours: 2 },
    { day: "Fri", hours: 0.5 },
    { day: "Sat", hours: 4 },
    { day: "Sun", hours: 1 },
  ];
  const maxHours = Math.max(...weeklyActivity.map((d) => d.hours));

  // Calculate course progress for all enrolled courses
  const courseProgressData = courses.slice(0, 4).map((course) => ({
    course,
    progress: getCourseProgress(course.id),
  }));

  const achievementIcons = {
    milestone: Trophy,
    skill: Zap,
    streak: Flame,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Progress Tracker</h1>
        <p className="text-muted-foreground">
          Track your learning journey and celebrate your achievements.
        </p>
      </div>

      {/* Overview stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Overall Progress"
          value={`${userProgress.overallProgress}%`}
          icon={TrendingUp}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Lessons Completed"
          value={`${userProgress.lessonsCompleted}/${userProgress.totalLessons}`}
          icon={BookOpen}
        />
        <StatCard
          title="Learning Streak"
          value="7 days"
          subtitle="Keep it up!"
          icon={Flame}
        />
        <StatCard
          title="Achievements"
          value={userProgress.achievements.length}
          subtitle="badges earned"
          icon={Award}
        />
      </div>

      {/* Main content grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly activity chart */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              Weekly Activity
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>14.5 hours total</span>
            </div>
          </div>

          {/* Simple bar chart */}
          <div className="flex h-48 items-end justify-between gap-2">
            {weeklyActivity.map((day) => (
              <div key={day.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="relative w-full">
                  <div
                    className="mx-auto w-8 rounded-t-lg bg-linear-to-t from-primary to-accent transition-all hover:opacity-80"
                    style={{
                      height: `${(day.hours / maxHours) * 160}px`,
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{day.day}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-linear-to-r from-primary to-accent" />
              <span className="text-muted-foreground">Study hours</span>
            </div>
          </div>
        </div>

        {/* Overall completion ring */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-6 text-lg font-semibold text-foreground">
            Overall Completion
          </h2>

          <div className="flex flex-col items-center">
            {/* Circular progress ring */}
            <div className="relative mb-6">
              <svg className="h-48 w-48 -rotate-90 transform">
                {/* Background circle */}
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-secondary"
                />
                {/* Progress circle */}
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="url(#progressGradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 80}
                  strokeDashoffset={
                    2 * Math.PI * 80 * (1 - userProgress.overallProgress / 100)
                  }
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient
                    id="progressGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="oklch(0.75 0.18 180)" />
                    <stop offset="100%" stopColor="oklch(0.7 0.2 145)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-foreground">
                  {userProgress.overallProgress}%
                </span>
                <span className="text-sm text-muted-foreground">Complete</span>
              </div>
            </div>

            <div className="grid w-full grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {userProgress.coursesCompleted}
                </p>
                <p className="text-xs text-muted-foreground">
                  Courses Completed
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {userProgress.lessonsCompleted}
                </p>
                <p className="text-xs text-muted-foreground">
                  Lessons Completed
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">24h</p>
                <p className="text-xs text-muted-foreground">Total Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course progress */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-6 text-lg font-semibold text-foreground">
          Course Progress
        </h2>

        <div className="space-y-6">
          {courseProgressData.map(({ course, progress }) => (
            <div key={course.id}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {course.modules.reduce(
                        (acc, m) => acc + m.lessons.length,
                        0
                      )}{" "}
                      lessons • {course.estimatedTime}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-sm font-medium",
                    progress === 100
                      ? "bg-accent/20 text-accent"
                      : progress > 0
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {progress === 100
                    ? "Completed"
                    : progress > 0
                    ? "In Progress"
                    : "Not Started"}
                </span>
              </div>
              <ProgressBar value={progress} variant="gradient" />
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="mb-6 text-lg font-semibold text-foreground">
          Achievements
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {userProgress.achievements.map((achievement) => {
            const AchievementIcon =
              achievementIcons[achievement.type] || Trophy;

            return (
              <div
                key={achievement.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20">
                  <AchievementIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {achievement.title}
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {achievement.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  Earned on{" "}
                  {new Date(achievement.earnedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>

                {/* Decorative star */}
                <Star className="absolute -right-2 -top-2 h-16 w-16 text-primary/5 transition-all group-hover:text-primary/10" />
              </div>
            );
          })}
        </div>

        {/* Locked achievements preview */}
        <div className="mt-6">
          <h3 className="mb-4 text-sm font-medium text-muted-foreground">
            Upcoming Achievements
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Course Champion", desc: "Complete 5 courses" },
              { title: "Speed Learner", desc: "Finish a course in under a week" },
              { title: "Perfect Score", desc: "Get 100% on 5 quizzes" },
              { title: "Dedication", desc: "30-day learning streak" },
            ].map((locked, i) => (
              <div
                key={i}
                className="rounded-xl border border-dashed border-border bg-card/50 p-5 opacity-60"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <Trophy className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-muted-foreground">
                  {locked.title}
                </h3>
                <p className="text-sm text-muted-foreground/70">{locked.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
