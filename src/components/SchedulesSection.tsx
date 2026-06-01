import React, { useState, useEffect } from 'react';
import { schedulesData, routinesData } from '../data/schedulesData';
import { Calendar, Briefcase, GraduationCap, CheckCircle2, Award, Clock, HelpCircle, ArrowRight, BookOpen } from 'lucide-react';

export default function SchedulesSection() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('12-month');
  const [activeRoutineTab, setActiveRoutineTab] = useState<'college' | 'dropper'>('college');
  const [completedPhases, setCompletedPhases] = useState<Record<string, boolean>>({});

  // Sync phase checkboxes with localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gatenexus_phase_progress');
      if (saved) {
        setCompletedPhases(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load phase checklist', e);
    }
  }, []);

  const togglePhaseComplete = (phaseKey: string) => {
    const next = { ...completedPhases, [phaseKey]: !completedPhases[phaseKey] };
    setCompletedPhases(next);
    try {
      localStorage.setItem('gatenexus_phase_progress', JSON.stringify(next));
    } catch (e) {
      console.error('Failed to save phase checklist', e);
    }
  };

  const selectedPlan = schedulesData.find(p => p.id === selectedPlanId) || schedulesData[0];
  const activeRoutine = activeRoutineTab === 'college' ? routinesData.collegeStudent : routinesData.dropper;

  return (
    <div className="space-y-8">
      {/* Introduction text */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
          Flexible Study Planners
        </h3>
        <p className="text-sm text-neutral-500">Pick your horizon timeline to access phased tasks and matching daily timetables</p>
      </div>

      {/* Plan selection buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {schedulesData.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelectedPlanId(plan.id)}
            className={`px-4 py-3 border text-left rounded-xl transition-all relative ${
              selectedPlanId === plan.id
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800'
            }`}
          >
            <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${selectedPlanId === plan.id ? 'text-indigo-200' : 'text-neutral-500 dark:text-neutral-400'}`}>Timeline Guidance</div>
            <div className="text-sm font-extrabold font-sans leading-snug mt-1">{plan.id.replace('-', ' ').toUpperCase()}</div>
          </button>
        ))}
      </div>

      {/* Selected Schedule Timeline visual */}
      <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm transition-colors">
        <div className="mb-6">
          <h4 className="text-lg font-bold text-neutral-900 dark:text-white">{selectedPlan.title}</h4>
          <p className="text-sm text-neutral-500 mt-1">{selectedPlan.subtitle}</p>
        </div>

        {/* Phase List vertical step */}
        <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[1rem] before:w-0.5 before:bg-neutral-100 dark:before:bg-neutral-800">
          {selectedPlan.phases.map((phase, idx) => {
            const phaseKey = `${selectedPlan.id}::phase-${idx}`;
            const isDone = completedPhases[phaseKey];

            return (
              <div key={idx} className="flex gap-4 sm:gap-6 relative group transition-opacity">
                {/* Checkbox badge circle */}
                <button
                  type="button"
                  onClick={() => togglePhaseComplete(phaseKey)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border z-10 flex-shrink-0 transition-all cursor-pointer ${
                    isDone
                      ? 'bg-emerald-600 border-emerald-600 dark:bg-emerald-500 dark:border-emerald-500 text-white ring-4 ring-emerald-50 dark:ring-emerald-900/10'
                      : 'bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700 text-neutral-500 hover:border-indigo-500 hover:text-indigo-500'
                  }`}
                  aria-label="Toggle phase milestone"
                >
                  {isDone ? <CheckCircle2 className="w-4.5 h-4.5" /> : <span className="text-xs font-bold font-mono">{idx + 1}</span>}
                </button>

                {/* Content */}
                <div className={`flex-1 p-5 rounded-2xl border transition-all ${
                  isDone 
                    ? 'bg-neutral-50/50 dark:bg-neutral-900/40 border-neutral-300 dark:border-neutral-800 opacity-75' 
                    : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 group-hover:border-neutral-300 dark:group-hover:border-neutral-700 shadow-sm'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                      {phase.duration}
                    </span>
                    <h5 className={`text-base font-extrabold ${isDone ? 'line-through text-neutral-400' : 'text-neutral-900 dark:text-neutral-100'}`}>
                      {phase.name}
                    </h5>
                  </div>
                  
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-3 italic">
                    🔥 Focus Goal: {phase.focus}
                  </p>

                  <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 list-inside">
                    {phase.tasks.map((task, tidx) => (
                      <li key={tidx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-indigo-500 mt-1 flex-shrink-0">▪</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Routine Comparison and Day-by-day segments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Slot structure table (8 columns) */}
        <div className="lg:col-span-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 transition-colors shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6">
            <div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-200 tracking-tight flex items-center gap-2 font-sans">
                <Clock className="w-5 h-5 text-indigo-500" /> Hourly Study Schedules
              </h4>
              <p className="text-xs text-neutral-500">Compare routines mapped for your lifestyle</p>
            </div>

            {/* Selector pins */}
            <div className="flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-xl">
              <button
                onClick={() => setActiveRoutineTab('college')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold font-sans tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeRoutineTab === 'college'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-700 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" /> College Student
              </button>
              <button
                onClick={() => setActiveRoutineTab('dropper')}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold font-sans tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeRoutineTab === 'dropper'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-700 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" /> Full Dropper
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">{activeRoutine.subtitle}</p>
            
            <div className="space-y-3.5">
              {activeRoutine.slots.map((slot, sIdx) => (
                <div key={sIdx} className="grid grid-cols-1 md:grid-cols-12 gap-3.5 border-b border-neutral-100 dark:border-neutral-800 pb-3 last:border-0 last:pb-0">
                  <div className="md:col-span-4 text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    {slot.time}
                  </div>
                  <div className="md:col-span-8 text-xs text-neutral-700 dark:text-neutral-300 leading-normal">
                    {slot.activity}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-500/5 dark:bg-amber-500/10 rounded-xl border border-amber-500/10 mt-6">
              <h5 className="text-xs font-bold text-amber-800 dark:text-amber-400 mb-2">💡 Micro tips to maximize results:</h5>
              <ul className="space-y-1.5 text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed list-disc pl-4 font-sans">
                {activeRoutine.tips.map((tip, tIdx) => (
                  <li key={tIdx}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Weekly review cadence (4 columns) */}
        <div className="lg:col-span-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 transition-colors relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-lg pointer-events-none" />
          
          <h4 className="text-base font-bold tracking-tight mb-4 text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Sunday Revision Cadence
          </h4>
          
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 leading-normal">
            Sundays are not holidays; they are designated safety blockers for memory retrieval and test reviews.
          </p>

          <div className="space-y-4">
            <div className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded-xl border border-neutral-150 dark:border-neutral-800">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">Slot A (09:00 AM - 12:00 PM)</span>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-normal font-sans">
                Review the week's short notes. Scribble formulas on paper to verify mental storage.
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded-xl border border-neutral-150 dark:border-neutral-800">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">Slot B (02:00 PM - 05:00 PM)</span>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-normal font-sans">
                Take a focused subject-wise or chapter-wise test series online. Measure score and note limits.
              </p>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded-xl border border-neutral-150 dark:border-neutral-800">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">Slot C (07:00 PM - 09:00 PM)</span>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-normal font-sans">
                Correct the test. Document errors in your Mistake Register under appropriate categories.
              </p>
            </div>
          </div>

          <div className="mt-6 p-3 rounded-xl border border-indigo-100 dark:border-indigo-950 bg-indigo-50/50 dark:bg-indigo-950/20 text-[10px] font-sans leading-normal text-indigo-700 dark:text-indigo-400">
            📊 <strong>Benchmark rule:</strong> If accuracy of a test sits below 70%, immediately schedule 3 hours of theory review on Monday morning! Do not move to the next chapter.
          </div>
        </div>

      </div>
    </div>
  );
}
