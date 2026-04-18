"use client";

import { courses, getCourseLessons } from "@/data/mock-data";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle2,
  Circle,
  Video,
  FileText,
  FlaskConical,
  HelpCircle,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/progress-bar";
import Link from "next/link";

const lessonTypeIcons = {
  video: Video,
  text: FileText,
  lab: FlaskConical,
  quiz: HelpCircle,
};

export default function LearnPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const lessonId = searchParams.get("lesson");

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  );

  const course = courses.find((c) => c.id === courseId);
  const allLessons = course ? getCourseLessons(courseId) : [];

  // Initialize completed lessons from mock data
  useEffect(() => {
    if (course) {
      const completed = new Set<string>();
      course.modules.forEach((m) =>
        m.lessons.forEach((l) => {
          if (l.completed) completed.add(l.id);
        })
      );
      setCompletedLessons(completed);
    }
  }, [course]);

  // Find current lesson
  const currentLessonIndex = lessonId
    ? allLessons.findIndex((l) => l.id === lessonId)
    : allLessons.findIndex((l) => !completedLessons.has(l.id));

  const currentLesson =
    allLessons[currentLessonIndex !== -1 ? currentLessonIndex : 0];
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex < allLessons.length - 1
      ? allLessons[currentLessonIndex + 1]
      : null;

  if (!course || !currentLesson) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Course not found</p>
      </div>
    );
  }

  const progress = Math.round(
    (completedLessons.size / allLessons.length) * 100
  );

  const handleMarkComplete = () => {
    const newCompleted = new Set(completedLessons);
    newCompleted.add(currentLesson.id);
    setCompletedLessons(newCompleted);

    // Auto-navigate to next lesson
    if (nextLesson) {
      router.push(`/courses/${courseId}/learn?lesson=${nextLesson.id}`);
    }
  };

  const navigateToLesson = (lessonId: string) => {
    router.push(`/courses/${courseId}/learn?lesson=${lessonId}`);
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Top bar */}
      <header className="flex h-14 items-center justify-between border-b border-border bg-card px-4">
        <div className="flex items-center gap-4">
          <Link
            href={`/courses/${courseId}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to course</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <h1 className="text-sm font-medium text-foreground">
            {course.title}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-sm text-muted-foreground">
              {completedLessons.size}/{allLessons.length}
            </span>
            <ProgressBar value={progress} className="w-32" size="sm" />
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-secondary lg:hidden"
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-auto">
          {/* Video placeholder */}
          <div className="relative aspect-video w-full bg-secondary">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 transition-transform hover:scale-110">
                <Play className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Click to play video
              </p>
            </div>
          </div>

          {/* Lesson content */}
          <div className="flex-1 p-6 lg:p-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium capitalize text-primary">
                  {currentLesson.type}
                </span>
                <span className="text-sm text-muted-foreground">
                  {currentLesson.duration}
                </span>
              </div>

              <h2 className="mb-6 text-2xl font-bold text-foreground">
                {currentLesson.title}
              </h2>

              {/* Lesson text content */}
              {currentLesson.content ? (
                <div className="prose prose-invert max-w-none">
                  <div
                    className="space-y-4 text-muted-foreground [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-foreground [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-foreground [&_li]:ml-4 [&_ol]:list-decimal [&_ol]:pl-4 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-4"
                    dangerouslySetInnerHTML={{
                      __html: currentLesson.content
                        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
                        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
                        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
                        .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
                        .replace(/^- (.*$)/gim, "<li>$1</li>")
                        .replace(/^(\d+)\. (.*$)/gim, "<li>$2</li>")
                        .replace(/\n\n/g, "</p><p>")
                        .replace(/^/gim, "<p>")
                        .replace(/$/gim, "</p>"),
                    }}
                  />
                </div>
              ) : (
                <p className="text-muted-foreground">
                  This lesson content is coming soon. Watch the video above to
                  learn more about this topic.
                </p>
              )}

              {/* Action buttons */}
              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  onClick={handleMarkComplete}
                  disabled={completedLessons.has(currentLesson.id)}
                  className={cn(
                    completedLessons.has(currentLesson.id)
                      ? "bg-accent text-accent-foreground"
                      : "glow-primary"
                  )}
                >
                  {completedLessons.has(currentLesson.id) ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Completed
                    </>
                  ) : (
                    "Mark as Complete"
                  )}
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    disabled={!prevLesson}
                    onClick={() => prevLesson && navigateToLesson(prevLesson.id)}
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    disabled={!nextLesson}
                    onClick={() => nextLesson && navigateToLesson(nextLesson.id)}
                  >
                    Next
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - lesson list */}
        <aside
          className={cn(
            "absolute right-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-80 border-l border-border bg-card transition-transform duration-300 lg:relative lg:top-0 lg:h-auto lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full overflow-y-auto p-4">
            <h3 className="mb-4 font-semibold text-foreground">
              Course Content
            </h3>

            <div className="space-y-2">
              {course.modules.map((module, moduleIndex) => (
                <div key={module.id} className="space-y-1">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Module {moduleIndex + 1}: {module.title}
                  </p>
                  {module.lessons.map((lesson) => {
                    const isActive = lesson.id === currentLesson.id;
                    const isCompleted = completedLessons.has(lesson.id);
                    const LessonIcon = lessonTypeIcons[lesson.type] || Video;

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => navigateToLesson(lesson.id)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg p-3 text-left text-sm transition-colors",
                          isActive
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            isCompleted
                              ? "bg-accent text-accent-foreground"
                              : "border border-current"
                          )}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-3 w-3" />
                          ) : (
                            <Circle className="h-2 w-2" />
                          )}
                        </div>
                        <div className="flex-1 truncate">{lesson.title}</div>
                        <LessonIcon className="h-4 w-4 shrink-0 opacity-50" />
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
