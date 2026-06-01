"use client";

import React from "react";
import { Calendar, BookOpen, Cpu, ClipboardCheck, Award } from "lucide-react";
import RadialOrbitalTimeline, { type TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { WavePath } from "@/components/ui/wave-path";
import HeroDock from "@/components/ui/dock";
import { cn } from "@/lib/utils";

// Original timeline data
const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "1. Syllabus Base",
    date: "Feb - Apr",
    content: "Map core vs. superficial subjects. Master Linear Algebra and Engineering Mathematics bedrock (28% marks guaranteed).",
    category: "Baseline",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "2. Concepts Grind",
    date: "May - Aug",
    content: "Deep dive into heavy technical subjects. Solve chapter-wise PYQs of the past 15 years immediately after finishing each chapter.",
    category: "Heavy Study",
    icon: BookOpen,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "3. Subject Sprints",
    date: "Sep - Nov",
    content: "Initiate daily cyclic revision. Write clean revision cards and start subject-wise mock tests (aiming for >70% accuracy).",
    category: "Sectional Mocks",
    icon: Cpu,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "4. Full Mock Sprints",
    date: "Dec - Jan",
    content: "Solve 10-15 full-length mock tests using the standard virtual calculator. Catalog every mistake inside your Error Journal.",
    category: "Simulation",
    icon: ClipboardCheck,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "5. GATE D-Day",
    date: "February",
    content: "Calm execution in the exam center. Focus strictly on accuracy, avoid wildcard speculative guesses, and lock your elite rank.",
    category: "Execution",
    icon: Award,
    relatedIds: [4],
    status: "pending" as const,
    energy: 25,
  },
];

// Original timeline demo export
export function RadialOrbitalTimelineDemo() {
  return (
    <div className="w-full">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}

// User-specified WavePath Demo component
export function Demo() {
  return (
    <div className="relative w-full flex min-h-[400px] flex-col items-center justify-center p-8 bg-neutral-900/30 rounded-3xl border border-neutral-800/60 overflow-hidden">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <div className="flex w-[70vw] flex-col items-end relative z-10">
        <WavePath className="mb-10 text-indigo-500/60 dark:text-indigo-400/50" />
        <div className="flex w-full flex-col items-end">
          <div className="flex justify-end">
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-sm font-mono tracking-wider uppercase">Art of Strategy</p>
            <p className="text-neutral-800 dark:text-neutral-200 ml-8 w-3/4 text-xl md:text-3xl font-light leading-relaxed">
              Experience the clarity of structure through meticulous mapping. Let the progress of your milestones inspire you and steady your preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DemoOne() {
  return <HeroDock />;
}

export default Demo;
