"use client";

import {
  Map,
  FlaskConical,
  TrendingUp,
  Award,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Map,
    title: "Structured Roadmaps",
    description:
      "Follow clear learning paths designed by industry experts. No more guessing what to learn next.",
    color: "primary",
  },
  {
    icon: FlaskConical,
    title: "Hands-on Labs",
    description:
      "Practice in real-world environments. Apply your knowledge with interactive lab exercises.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed analytics and milestone achievements.",
    color: "chart-3",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description:
      "Prepare for top certifications like Security+, CEH, and OSCP with focused content.",
    color: "chart-4",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from cybersecurity professionals with real-world experience in the field.",
    color: "chart-5",
  },
  {
    icon: Zap,
    title: "Career Support",
    description:
      "Get job placement assistance and career guidance to land your dream security role.",
    color: "primary",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  "chart-3": "bg-chart-3/10 text-chart-3",
  "chart-4": "bg-chart-4/10 text-chart-4",
  "chart-5": "bg-chart-5/10 text-chart-5",
};

export function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose CyberPath?
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide everything you need to build a successful career in
            cybersecurity, from structured learning to job placement.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClass =
              colorClasses[benefit.color as keyof typeof colorClasses] ||
              colorClasses.primary;

            return (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={cn(
                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110",
                    colorClass
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
