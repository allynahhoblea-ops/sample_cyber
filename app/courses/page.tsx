import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CourseCard } from "@/components/course-card";
import { courses, getCourseProgress } from "@/data/mock-data";

export default function CoursesPage() {
  const beginnerCourses = courses.filter((c) => c.difficulty === "beginner");
  const intermediateCourses = courses.filter(
    (c) => c.difficulty === "intermediate"
  );
  const advancedCourses = courses.filter((c) => c.difficulty === "advanced");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-card/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                All Courses
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse our comprehensive library of cybersecurity courses.
                From fundamentals to advanced techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Course sections */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
            {/* Beginner */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">Beginner</h2>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
                  {beginnerCourses.length} courses
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {beginnerCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    progress={getCourseProgress(course.id)}
                    showProgress
                  />
                ))}
              </div>
            </div>

            {/* Intermediate */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">
                  Intermediate
                </h2>
                <span className="rounded-full bg-chart-4/20 px-3 py-1 text-sm font-medium text-chart-4">
                  {intermediateCourses.length} courses
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {intermediateCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    progress={getCourseProgress(course.id)}
                    showProgress
                  />
                ))}
              </div>
            </div>

            {/* Advanced */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">Advanced</h2>
                <span className="rounded-full bg-chart-5/20 px-3 py-1 text-sm font-medium text-chart-5">
                  {advancedCourses.length} courses
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {advancedCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    progress={getCourseProgress(course.id)}
                    showProgress
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
