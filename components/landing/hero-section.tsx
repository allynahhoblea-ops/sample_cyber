"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Lock, Eye } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Shield className="h-4 w-4" />
            <span>Trusted by 50,000+ cybersecurity professionals</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cybersecurity
            </span>{" "}
            Career Path
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Stop taking random courses. Follow structured career paths designed
            by industry experts. From beginner to advanced, we guide your
            journey to becoming a cybersecurity professional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/dashboard">
              <Button size="lg" className="glow-primary group gap-2">
                Start Learning
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/paths">
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                Explore Paths
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-foreground">50K+</p>
              <p className="text-sm text-muted-foreground">Active Learners</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">200+</p>
              <p className="text-sm text-muted-foreground">Expert Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">95%</p>
              <p className="text-sm text-muted-foreground">Job Placement</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Floating icons decoration */}
        <div className="pointer-events-none absolute -right-20 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative h-64 w-64">
            <div className="animate-pulse-glow absolute left-0 top-0 rounded-xl border border-border bg-card p-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute bottom-0 right-0 rounded-xl border border-border bg-card p-4">
              <Lock className="h-8 w-8 text-accent" />
            </div>
            <div className="absolute right-8 top-8 rounded-xl border border-border bg-card p-4">
              <Eye className="h-8 w-8 text-chart-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
