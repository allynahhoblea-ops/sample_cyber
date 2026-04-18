"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { careerPaths, courses } from "@/data/mock-data";
import { PathRoadmap } from "@/components/path-roadmap";

export default function CareerPathsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HEADER */}
        <section className="border-b border-border bg-card/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Cybersecurity Career Paths
            </h1>
            <p className="mt-2 text-muted-foreground">
              Choose your specialization and follow structured learning paths.
            </p>
          </div>
        </section>

        {/* CAREER PATHS */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

            {careerPaths.map((path) => {
              return (
                <div key={path.id} id={path.id}>
                  <PathRoadmap
                    path={path}
                    iconName={path.icon}
                  />
                </div>
              );
            })}

          </div>
        </section>

        {/* COURSES */}
        <section className="border-t border-border bg-card/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              All Available Courses
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => {
                const totalLessons = course.modules.reduce(
                  (acc, m) => acc + m.lessons.length,
                  0
                );

                return (
                  <a
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition"
                  >
                    <h3 className="font-semibold text-foreground">
                      {course.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {course.description}
                    </p>

                    <div className="mt-3 flex gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-secondary px-2 py-1">
                        {course.difficulty}
                      </span>
                      <span className="rounded-full bg-secondary px-2 py-1">
                        {course.estimatedTime}
                      </span>
                      <span className="rounded-full bg-secondary px-2 py-1">
                        {totalLessons} lessons
                      </span>
                    </div>
                  </a>
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