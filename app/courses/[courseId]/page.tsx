import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { courses, getCourseProgress } from "@/data/mock-data";
import { notFound } from "next/navigation";
import { ProgressBar } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Star,
  Users,
  BookOpen,
  Play,
  CheckCircle2,
  Circle,
  Video,
  FileText,
  FlaskConical,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

const lessonTypeIcons = {
  video: Video,
  text: FileText,
  lab: FlaskConical,
  quiz: HelpCircle,
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  const progress = getCourseProgress(courseId);
  const totalLessons = course.modules.reduce(
    (acc, m) => acc + m.lessons.length,
    0
  );
  const completedLessons = course.modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.completed).length,
    0
  );

  // Find next incomplete lesson
  let nextLesson = null;
  for (const module of course.modules) {
    for (const lesson of module.lessons) {
      if (!lesson.completed) {
        nextLesson = lesson;
        break;
      }
    }
    if (nextLesson) break;
  }

  const difficultyColors = {
    beginner: "bg-accent/20 text-accent",
    intermediate: "bg-chart-4/20 text-chart-4",
    advanced: "bg-chart-5/20 text-chart-5",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Course header */}
        <section className="border-b border-border bg-card/50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Course info */}
              <div className="lg:col-span-2">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-sm font-medium capitalize",
                      difficultyColors[course.difficulty]
                    )}
                  >
                    {course.difficulty}
                  </span>
                  {progress > 0 && (
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                      {progress === 100 ? "Completed" : "In Progress"}
                    </span>
                  )}
                </div>

                <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                  {course.title}
                </h1>
                <p className="mb-6 text-lg text-muted-foreground">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="mb-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{course.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-chart-4" />
                    <span>{course.rating} rating</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>
                      {(course.enrolledCount / 1000).toFixed(1)}k enrolled
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    <span>{totalLessons} lessons</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Taught by{" "}
                  <span className="font-medium text-foreground">
                    {course.instructor}
                  </span>
                </p>
              </div>

              {/* Progress card */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Your Progress
                </h3>

                <ProgressBar
                  value={progress}
                  showLabel
                  variant="gradient"
                  className="mb-4"
                />

                <p className="mb-6 text-sm text-muted-foreground">
                  {completedLessons} of {totalLessons} lessons completed
                </p>

                <Link href={`/courses/${courseId}/learn`}>
                  <Button className="w-full glow-primary gap-2">
                    <Play className="h-4 w-4" />
                    {progress === 0
                      ? "Start Course"
                      : progress === 100
                      ? "Review Course"
                      : "Continue Learning"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              Course Content
            </h2>

            <div className="space-y-4">
              {course.modules.map((module, moduleIndex) => {
                const moduleCompleted = module.lessons.every(
                  (l) => l.completed
                );
                const moduleLessonsCompleted = module.lessons.filter(
                  (l) => l.completed
                ).length;

                return (
                  <div
                    key={module.id}
                    className="overflow-hidden rounded-xl border border-border bg-card"
                  >
                    {/* Module header */}
                    <div className="flex items-center justify-between border-b border-border bg-secondary/50 p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-sm font-medium text-primary">
                          {moduleIndex + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {module.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {module.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>
                          {moduleLessonsCompleted}/{module.lessons.length}{" "}
                          lessons
                        </p>
                        <p>{module.estimatedTime}</p>
                      </div>
                    </div>

                    {/* Lessons */}
                    <div className="divide-y divide-border">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const LessonIcon =
                          lessonTypeIcons[lesson.type] || Video;
                        return (
                          <Link
                            key={lesson.id}
                            href={`/courses/${courseId}/learn?lesson=${lesson.id}`}
                            className="flex items-center gap-4 p-4 transition-colors hover:bg-secondary/30"
                          >
                            <div
                              className={cn(
                                "flex h-6 w-6 items-center justify-center rounded-full",
                                lesson.completed
                                  ? "bg-accent text-accent-foreground"
                                  : "border border-border"
                              )}
                            >
                              {lesson.completed ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <span className="text-xs text-muted-foreground">
                                  {lessonIndex + 1}
                                </span>
                              )}
                            </div>
                            <div className="flex-1">
                              <p
                                className={cn(
                                  "text-sm font-medium",
                                  lesson.completed
                                    ? "text-muted-foreground"
                                    : "text-foreground"
                                )}
                              >
                                {lesson.title}
                              </p>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <LessonIcon className="h-4 w-4" />
                              <span>{lesson.duration}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
