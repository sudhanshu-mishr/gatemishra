"use client";

import React from "react";
import { 
  Home, 
  Compass, 
  Calendar, 
  Bookmark, 
  Image as ImageIcon, 
  Telescope, 
  Cog, 
  Search, 
  Award, 
  HelpCircle, 
  BarChart3, 
  GraduationCap
} from "lucide-react";

interface DockProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export default function HeroDock() {
  const accent =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue("--hero-accent").trim()
      : "";

  const accentStyle: React.CSSProperties = accent
    ? ({ "--accent": accent } as React.CSSProperties)
    : ({} as React.CSSProperties);

  return (
    <div className="w-full relative rounded-2xl overflow-hidden border border-neutral-800 bg-black min-h-[500px]" style={accentStyle}>
      {/* Black Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.2), transparent 70%), #000000",
        }}
      />

      {/* Main Section */}
      <section className="relative isolate min-h-[500px] w-full overflow-hidden text-white px-4 sm:px-8 py-12 flex flex-col justify-center">
        {/* Vignette edges */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 [mask-image:radial-gradient(90%_70%_at_50%_45%,black,transparent_85%)]" />
          <div className="absolute inset-y-0 left-0 w-24 blur-xl opacity-40 sm:w-40 sm:blur-2xl sm:opacity-50 animate-marquee-left [background:linear-gradient(90deg,rgba(255,255,255,0.15),transparent)]" />
          <div className="absolute inset-y-0 right-0 w-24 blur-xl opacity-40 sm:w-40 sm:blur-2xl sm:opacity-50 animate-marquee-right [background:linear-gradient(270deg,rgba(255,255,255,0.15),transparent)]" />
        </div>

        {/* Subtle noise */}
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.03] [background-image:radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:12px_12px]" />

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center sm:gap-6">
          <h1 className="text-balance font-extrabold tracking-tight text-white/90 text-2xl sm:text-4xl">
            Elegant, minimal dock
          </h1>
          <p className="mx-auto max-w-xl text-pretty text-xs text-white/70 sm:text-sm">
            Black & white. Adaptive. Focused. Drag/hover to reveal the utility modules.
          </p>

          {/* Dock wrapper */}
          <div className="relative mt-6 w-full max-w-[95%] sm:max-w-[80%]">
            <div className="flex items-center justify-center">
              <Dock />
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        :root { --accent: hsl(0 0% 100% / 0.9); }
        .dark :root, .dark { --accent: hsl(0 0% 100% / 0.9); }
        .light :root, .light { --accent: hsl(0 0% 0% / 0.9); }

        @keyframes marqueeLeft { 0% { transform: translateX(-60%); } 100% { transform: translateX(0%); } }
        @keyframes marqueeRight { 0% { transform: translateX(60%); } 100% { transform: translateX(0%); } }
        .animate-marquee-left { animation: marqueeLeft 8s linear infinite alternate; }
        .animate-marquee-right { animation: marqueeRight 8s linear infinite alternate; }

        .hover-halo { position: relative }
        .hover-halo::after { content: ""; position: absolute; inset: -2px; border-radius: inherit; opacity: 0; transition: opacity .25s, transform .25s; box-shadow: 0 0 0 0 rgba(255,255,255,.18), 0 12px 30px -10px rgba(0,0,0,.7); pointer-events: none; }
        .hover-halo:hover::after { opacity: 1; }
        .tooltip { opacity: 0; transform: translateY(6px); transition: opacity .2s, transform .2s }
        .group:hover .tooltip { opacity: 1; transform: translateY(0) }
      `}</style>
    </div>
  );
}

export function Dock({ activeSection, onNavigate }: DockProps) {
  // Navigation structure mapping for the active GATE sections
  const items = [
    { id: "about", label: "About", icon: Home },
    { id: "journey", label: "Timeline", icon: Compass },
    { id: "branches", label: "Branches", icon: Telescope },
    { id: "schedules", label: "Planners", icon: Calendar, badge: "A/B" },
    { id: "score-strategy", label: "Predictor", icon: BarChart3 },
    { id: "star-strategy", label: "Strategy", icon: Award },
    { id: "faq-resources", label: "FAQs & Guides", icon: HelpCircle },
  ];

  const handleItemClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      // Fallback scroll behaviour if used statically
      const element = document.getElementById(id);
      if (element) {
        const offset = 85;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="relative flex items-center gap-2 sm:gap-4 scale-90 sm:scale-100 max-w-full">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-2xl sm:rounded-[36px] bg-neutral-900/90 px-3 py-2 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg md:px-5 md:py-2.5">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <DockIcon 
              key={item.id} 
              icon={item.icon} 
              label={item.label} 
              badge={item.badge} 
              isActive={isActive}
              onClick={() => handleItemClick(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

interface DockIconProps {
  key?: string;
  icon: any;
  label: string;
  badge?: string;
  isActive?: boolean;
  onClick?: () => void;
}

function DockIcon({ icon: Icon, label, badge, isActive, onClick }: DockIconProps) {
  return (
    <button
      onClick={onClick}
      className={`hover-halo group relative grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl ring-1 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.05] cursor-pointer ${
        isActive 
          ? "ring-indigo-500/80 bg-gradient-to-b from-indigo-950/80 to-neutral-900/90 text-indigo-400" 
          : "ring-white/5 bg-gradient-to-b from-neutral-800/40 to-neutral-900/60 hover:ring-white/20 text-neutral-300"
      }`}
      aria-label={label}
    >
      <Icon className={`h-4.5 w-4.5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-110 ${isActive ? "text-indigo-400" : "text-white/85"}`} strokeWidth={2.1} />
      {badge ? (
        <span className="absolute -right-1.5 -top-1.5 grid h-4 w-6 place-items-center rounded-full bg-indigo-600 text-[8px] font-bold text-white ring-1 ring-white/30">
          {badge}
        </span>
      ) : null}
      <span className="tooltip pointer-events-none absolute -bottom-7 translate-y-1/2 text-[9px] tracking-wide text-neutral-300 bg-neutral-950 px-1.5 py-0.5 rounded border border-neutral-800 shadow-lg whitespace-nowrap z-50">
        {label}
      </span>
    </button>
  );
}
