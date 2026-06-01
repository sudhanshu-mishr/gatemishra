import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BranchExplorer from './components/BranchExplorer';
import SchedulesSection from './components/SchedulesSection';
import MarksEstimator from './components/MarksEstimator';
import StrategyHub from './components/StrategyHub';
import FaqSection from './components/FaqSection';
import { RadialOrbitalTimelineDemo, Demo as WavePathDemo } from '@/components/ui/demo';
import { SparklesCore } from '@/components/ui/sparkles';
import { 
  Award, BookOpen, Clock, Target, Calendar, HelpCircle, ArrowUp, Zap, 
  CheckCircle, ShieldAlert, Check, Milestone, Compass, Rocket, Briefcase, ChevronRight, GraduationCap
} from 'lucide-react';

export default function App() {
  const darkMode = true;
  const [activeSection, setActiveSection] = useState<string>('branches');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Handle scroll listener for Back-to-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (['about', 'journey', 'branches', 'schedules', 'score-strategy', 'star-strategy', 'faq-resources'].includes(sectionId)) {
      setActiveSection(sectionId);
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const headerOffset = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="dark min-h-screen bg-neutral-950 text-neutral-100 transition-colors duration-300 font-sans">
      
      {/* Dynamic Header */}
      <Header 
        activeSection={activeSection}
        onNavigate={handleScrollToSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Container */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pb-24 border-b border-neutral-200 dark:border-neutral-900 transition-colors">
        {/* Soft decorative background circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Sparkles background animation */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={60}
            className="w-full h-full"
            particleColor={darkMode ? "#a5b4fc" : "#6366f1"}
            speed={0.5}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Motivation badge info sticker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50/70 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 mb-6 border border-indigo-150/50 dark:border-indigo-900/30">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>EXHAUSTIVE GATE STRATEGY HUB for CSE • ECE • EE • ME • CE • IN • CH • XE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-black dark:text-neutral-50 max-w-4xl mx-auto leading-tight">
            Crack the GATE Exam with the <span className="text-indigo-600 dark:text-indigo-400">Right Master Plan</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Stop guessing your preparation. Access meticulous branch strategies, structured monthly schedules, target marks evaluation, and error correction blueprints.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handleScrollToSection('branches')}
              className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-500/15 cursor-pointer flex items-center justify-center gap-2 group transition-all"
            >
              <span>Explore Branch Syllabi</span>
              <ChevronRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollToSection('schedules')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 font-semibold rounded-xl border border-neutral-250 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-850 cursor-pointer flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4.5 h-4.5 text-neutral-500" />
              <span>View Study Timitables</span>
            </button>
          </div>

          {/* Core numerical stats block */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto pt-8 border-t border-neutral-200/60 dark:border-neutral-850">
            <div className="p-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white font-mono block">10</span>
              <span className="text-xs text-neutral-500 mt-1 block">Engineering Branches</span>
            </div>
            <div className="p-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white font-mono block">~28 M</span>
              <span className="text-xs text-neutral-500 mt-1 block">Math & Aptitude Bedrock</span>
            </div>
            <div className="p-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white font-mono block">12 Mths</span>
              <span className="text-xs text-neutral-500 mt-1 block">Expert Standard Schedule</span>
            </div>
            <div className="p-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white font-mono block">100%</span>
              <span className="text-xs text-neutral-500 mt-1 block">Syllabus Transparency</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Body content with sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: About GATE */}
        <section id="about" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Context Left (5 columns) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 font-mono">Exam Scope Overview</span>
              <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight leading-tight">
                Why Thousands Target the Graduate Aptitude Test
              </h2>
              <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                GATE is not a simple memory recall pass. Designed jointly by the Indian Institute of Science (IISc) and seven older IITs on behalf of the National Coordination Board, it rigorously benchmarks comprehensive engineering concepts. A solid percentile profile opens immense avenues.
              </p>
            </div>

            {/* Opportunities Grid Right (7 columns) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-250/70 dark:border-neutral-800 rounded-2xl">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-neutral-900 dark:text-neutral-100">PSU Technical Careers</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-normal font-sans">
                  Top public sectors (IOCL, ONGC, NTPC, GAIL, BARC) recruit direct Officer cadres strictly on basis of GATE scores, bypassing redundant hiring loops.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-250/70 dark:border-neutral-800 rounded-2xl">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-neutral-900 dark:text-neutral-100">M.Tech Admissions & IISc</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-normal font-sans">
                  Access higher study programs at premiere older IITs or IISc Bangalore with guaranteed monthly stipend / scholarship support from Ministry of Education.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-neutral-900 dark:text-neutral-100">Foreign Higher Studies</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-normal font-sans">
                  Institutions like Nanyang Technological University (NTU Singapore) and National University of Singapore (NUS) recognize high GATE profiles for admissions.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                <div className="w-9 h-9 rounded-lg bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-neutral-900 dark:text-neutral-100">The Synergy Mindset</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-normal font-sans">
                  Preparing for GATE structure aligns your core skills. It secures effortless performance during campus placements, ISRO, DRDO and technical screening tests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: "Start Here" Beginner Path Stepper */}
        <section className="p-6 bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl relative overflow-hidden shadow-lg transition-all border dark:border-neutral-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="mb-8">
            <span className="text-[10px] font-mono tracking-widest text-indigo-300 uppercase font-bold">Recommended Onboarding</span>
            <h3 className="text-2xl font-bold tracking-tight text-neutral-50 mt-1 flex items-center gap-2">
              <Compass className="w-6 h-6 text-indigo-400" /> "Start Here" Roadmap for Beginners
            </h3>
            <p className="text-xs text-neutral-300 leading-normal mt-1 font-sans">
              If you feel lost and do not know where to start, complete these first five logical checkboxes:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
              <span className="text-xs font-mono font-bold text-indigo-300">STEP 1</span>
              <div>
                <h5 className="font-bold text-xs text-neutral-100 mt-3">Download Syllabus Map</h5>
                <p className="text-[11px] text-neutral-400 mt-1 leading-normal font-sans">Compare syllabus papers of your target branch to identify exactly which chapters are excluded.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
              <span className="text-xs font-mono font-bold text-indigo-300">STEP 2</span>
              <div>
                <h5 className="font-bold text-xs text-neutral-100 mt-3">Start Math + Aptitude</h5>
                <p className="text-[11px] text-neutral-400 mt-1 leading-normal font-sans">Do not wait for core engineering subjects. Complete Linear Algebra and basic logic to lock the initial 28% markers.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
              <span className="text-xs font-mono font-bold text-indigo-300">STEP 3</span>
              <div>
                <h5 className="font-bold text-xs text-neutral-100 mt-3">Select One Standard Source</h5>
                <p className="text-[11px] text-neutral-400 mt-1 leading-normal font-sans">Pick exactly one trusted textbook or lecture series per topic. Do not hoard 5 books, leading to source fatigue.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
              <span className="text-xs font-mono font-bold text-indigo-300">STEP 4</span>
              <div>
                <h5 className="font-bold text-xs text-neutral-100 mt-3">Solve 15-Year PYQs</h5>
                <p className="text-[11px] text-neutral-400 mt-1 leading-normal font-sans">Read theory, and immediately solve past GATE questions of that exact chapter to benchmark true understanding levels.</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
              <span className="text-xs font-mono font-bold text-indigo-300">STEP 5</span>
              <div>
                <h5 className="font-bold text-xs text-neutral-100 mt-3">Log Mistakes</h5>
                <p className="text-[11px] text-neutral-400 mt-1 leading-normal font-sans">Create a clean binder of 'Mistake journals'. Highlight all calculation slip errors and re-solve them monthly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2.5: Interactive Radial Orbital Journey Map */}
        <section id="journey" className="scroll-mt-20">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 font-mono">Interactive Milestone Visualizer</span>
              <h3 className="text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
                GATE Milestone Orbital Roadmap
              </h3>
              <p className="text-xs text-neutral-500 max-w-xl">
                An immersive, orbital blueprint of the preparation curve. Click on the moving orbital nodes to explore stage requirements, connected milestones, and optimal importance index.
              </p>
            </div>
            <div className="text-[11px] px-3 py-1 bg-indigo-50 dark:bg-indigo-950/45 text-indigo-700 dark:text-indigo-300 font-mono font-bold rounded-full border border-indigo-100 dark:border-indigo-900/30 flex items-center gap-1.5 self-start md:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Interactive Space
            </div>
          </div>
          
          <RadialOrbitalTimelineDemo />

          {/* Interactive Mindset String Art Wave path */}
          <div className="mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-900">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 font-mono">Sensory Calibration</span>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mt-1">Interactive Calibration String</h4>
              <p className="text-xs text-neutral-500 max-w-xl">
                Hover, drag, or wave your cursor across the baseline indicator below to calibrate your mouse precision and clear mental tension.
              </p>
            </div>
            <WavePathDemo />
          </div>
        </section>

        {/* Dynamic Section Tabs-boards Nav */}
        <section id="branches" className="scroll-mt-20">
          <BranchExplorer searchQuery={searchQuery} />
        </section>

        {/* Section 4: Study Schedules */}
        <section id="schedules" className="scroll-mt-20">
          <SchedulesSection />
        </section>

        {/* Section 5: Target Marks and Estimators */}
        <section id="score-strategy" className="scroll-mt-20">
          <MarksEstimator />
        </section>

        {/* Section 6: Mock & PYQ Star Strategy */}
        <section id="star-strategy" className="scroll-mt-20">
          <StrategyHub />
        </section>

        {/* Section 7: FAQs & Standard Resources */}
        <section id="faq-resources" className="scroll-mt-20">
          <FaqSection searchQuery={searchQuery} />
        </section>

        {/* Section 8: "Do This / Avoid This" Tactical comparative grid cards */}
        <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 transition-all shadow-sm">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 flex items-center gap-2">
            <Milestone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" /> Tactical Review: Do's and Don'ts of GATE Preparation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
            
            {/* Do This Card */}
            <div className="bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 p-5 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                <Check className="w-5.2 h-5.2" /> Do This Systematically
              </h4>

              <div className="space-y-3.5 text-xs text-neutral-600 dark:text-neutral-350 font-sans">
                <p className="leading-relaxed">
                  <strong>✓ Learn unit tracking on memory paper:</strong> Write down exactly which unit the question asks (e.g. bits vs. bytes, milliseconds vs. seconds).
                </p>
                <p className="leading-relaxed">
                  <strong>✓ Cyclic retrieval notes:</strong> Revise subjects finished last month for at least 1.5 hours weekly to arrest the standard forgetting curve.
                </p>
                <p className="leading-relaxed">
                  <strong>✓ Solve equations in standard virtual calculators:</strong> Completely stop calculating raw equations on physical calculators—conditioning counts.
                </p>
                <p className="leading-relaxed">
                  <strong>✓ Review negative points deeply:</strong> A mistake solved is a score guaranteed in final examinations. Treat failures with scientific calm.
                </p>
              </div>
            </div>

            {/* Avoid This Card */}
            <div className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/15 p-5 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-red-800 dark:text-red-400 flex items-center gap-1.5">
                <ShieldAlert className="w-5.2 h-5.2" /> Strictly Avoid These Traps
              </h4>

              <div className="space-y-3.5 text-xs text-neutral-600 dark:text-neutral-350 font-sans">
                <p className="leading-relaxed hidden md:block">
                  <strong>✗ Procrastinating test analysis:</strong> Completing a mock test series without conducting a 3-hour post-analysis spreadsheet calculation is useless.
                </p>
                <p className="leading-relaxed">
                  <strong>✗ Reading massive books cover to cover:</strong> GATE requires solving questions based on the syllabus. Read only standard relevant chapters.
                </p>
                <p className="leading-relaxed">
                  <strong>✗ Hoarding 4-5 core test resources:</strong> Switching teachers and courseware limits consistency and wastes previous muscle memories.
                </p>
                <p className="leading-relaxed">
                  <strong>✗ Speculative raw guesswork:</strong> Attempting uncertain items out of peer panic brings massive negative marks and ruins the index.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Structured Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 text-neutral-400 text-xs py-12 mt-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-neutral-800 pb-8">
            
            {/* Left Block */}
            <div className="md:col-span-8 space-y-2">
              <span className="text-base font-extrabold text-neutral-200 tracking-tight flex items-center gap-1.5">
                GATE<span className="text-indigo-400">Nexus</span>
              </span>
              <p className="text-xs text-neutral-500 max-w-xl font-sans">
                GATENexus is a fully student-friendly, static, comprehensive exam guidance guide created to assist candidates with ethical, balanced roadmaps. We promote standard materials and reject pirated file sharing completely.
              </p>
            </div>

            {/* Right quick list */}
            <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-semibold justify-start md:justify-end">
              <button onClick={() => handleScrollToSection('branches')} className="hover:text-white cursor-pointer transition-colors">Explorer</button>
              <button onClick={() => handleScrollToSection('schedules')} className="hover:text-white cursor-pointer transition-colors">Study Planners</button>
              <button onClick={() => handleScrollToSection('score-strategy')} className="hover:text-white cursor-pointer transition-colors">Estimators</button>
              <button onClick={() => handleScrollToSection('faq-resources')} className="hover:text-white cursor-pointer transition-colors">FAQs</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-neutral-500 font-sans">
            <p className="text-[11px]">&copy; {new Date().getFullYear()} GATENexus. All structured guidance templates are prepared ethically for educational purposes.</p>
            <p className="text-[11px] mt-2 sm:mt-0 flex items-center gap-1.5 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" /> Created as a static, distraction-free preparation portal.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top trigger */}
      {showScrollTop && (
        <button
          onClick={() => handleScrollToSection('hero')}
          className="fixed bottom-6 right-6 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg border border-indigo-500/20 z-40 transition-all cursor-pointer hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 animate-bounce" />
        </button>
      )}

    </div>
  );
}
