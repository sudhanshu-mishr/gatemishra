import React, { useState } from 'react';
import { Target, AlertTriangle, ShieldCheck, HelpCircle, Trophy, BarChart2, TrendingUp } from 'lucide-react';

export default function MarksEstimator() {
  const [aptitude, setAptitude] = useState<number>(10);
  const [maths, setMaths] = useState<number>(8);
  const [strongSubjs, setStrongSubjs] = useState<number>(22);
  const [mediumSubjs, setMediumSubjs] = useState<number>(12);
  const [weakSubjs, setWeakSubjs] = useState<number>(4);

  // Calculate total anticipated mark
  const totalMarks = Math.round((aptitude + maths + strongSubjs + mediumSubjs + weakSubjs) * 10) / 10;

  // Determine feedback tier and outcome
  const getOutputBracket = (score: number) => {
    if (score < 35) {
      return {
        tier: "Foundation-Building Bracket",
        outcome: "Basic Qualification Uncertain",
        colorClass: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/45",
        advice: "Your focus should be strictly on locks. General Aptitude (15 Marks) and Engineering Math (13 Marks) provide a 28-mark bedrock. Master them fully first before attempting advanced technical derivations."
      };
    } else if (score >= 35 && score < 45) {
      return {
        tier: "Decent Qualifying Bracket",
        outcome: "Safe Gate Pass / State University Admission",
        colorClass: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/45",
        advice: "You are in the safe qualification zone. Perfect for local state master degrees or basic private university cutoffs. To push higher, take 5 extra sectional tests on your 'Medium' strength subjects."
      };
    } else if (score >= 45 && score < 55) {
      return {
        tier: "Strong Aspirant Bracket",
        outcome: "New IITs / Top NITs / Select PSU Screening",
        colorClass: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/45",
        advice: "This represents a solid score, placing you in the top 5-8% of the country. Gives access to reputable NIT streams or new-generation IIT programs (e.g. IIT Ropar, IIT Mandi). Work aggressively on reducing silly mistakes to leap to 60+."
      };
    } else if (score >= 55 && score < 65) {
      return {
        tier: "Elite Competitor Bracket",
        outcome: "Older IITs (M.Tech) / Top PSUs",
        colorClass: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-900/45",
        advice: "Highly competitive zone! This opens doors to premiere institutions like IISc, IIT Bombay, IIT Madras, and direct recruitment programs at elite PSUs (e.g. ONGC, IOCL, PowerGrid, NTPC). Fine-tune your time allocation."
      };
    } else {
      return {
        tier: "National Top Ranker Bracket",
        outcome: "Guaranteed Single/Double Digit Rank (AIR < 150)",
        colorClass: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/45",
        advice: "Phenomenal score level! You are poised for direct PhD tracks, top PSU leadership panels, or advanced direct fellowships. Minimize exam-day anxiety and maintain your pristine accuracy rate."
      };
    }
  };

  const bracket = getOutputBracket(totalMarks);

  // Accuracy Simulation metrics
  const simulatedAttempts = 75;
  const highAccuracyScore = Math.round((simulatedAttempts * 0.90 - (simulatedAttempts * 0.10 * (1/3))) * 10) / 10; // 90% accuracy, remaining 10% are wrong, with 1/3 negative marking
  const poorAccuracyScore = Math.round((simulatedAttempts * 0.70 - (simulatedAttempts * 0.30 * (1/3))) * 10) / 10; // 70% accuracy

  return (
    <div className="space-y-8">
      {/* Title block */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
          Target Marks & Ambition Planner
        </h3>
        <p className="text-sm text-neutral-500">Benchmark targeted score profiles and play with interactive sliders to calculate your realistic outcome</p>
      </div>

      {/* Slide Controls & Live Feedback Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sliders Input Panel (7 columns) */}
        <div className="lg:col-span-7 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 transition-colors shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
            <Target className="w-5.5 h-5.5" />
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">Live Score Estimator</h4>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
            Drag the sliders below to estimate your realistic performance distribution. Ensure you allocate the total scores based on your actual preparation depth.
          </p>

          <div className="space-y-5 pt-3">
            {/* General Aptitude */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                <span className="flex items-center gap-1.5 font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  General Aptitude (Max 15M)
                </span>
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">{aptitude} / 15 Marks</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={aptitude}
                onChange={(e) => setAptitude(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-ew-resize accent-indigo-600 focus:outline-none"
              />
            </div>

            {/* Engineering Mathematics */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                <span className="flex items-center gap-1.5 font-sans">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  Engineering Mathematics (Max 13M)
                </span>
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">{maths} / 13 Marks</span>
              </div>
              <input
                type="range"
                min="0"
                max="13"
                step="0.5"
                value={maths}
                onChange={(e) => setMaths(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-ew-resize accent-indigo-600 focus:outline-none"
              />
            </div>

            {/* Strong Subjects */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                <span className="flex items-center gap-1.5 font-sans">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Strong Subject Marks Core (Max 35M)
                </span>
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">{strongSubjs} / 35 Marks</span>
              </div>
              <input
                type="range"
                min="0"
                max="35"
                step="0.5"
                value={strongSubjs}
                onChange={(e) => setStrongSubjs(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-ew-resize accent-indigo-600 focus:outline-none"
              />
            </div>

            {/* Medium Subjects */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                <span className="flex items-center gap-1.5 font-sans">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Medium Yield Subjects (Max 22M)
                </span>
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">{mediumSubjs} / 22 Marks</span>
              </div>
              <input
                type="range"
                min="0"
                max="22"
                step="0.5"
                value={mediumSubjs}
                onChange={(e) => setMediumSubjs(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-ew-resize accent-indigo-600 focus:outline-none"
              />
            </div>

            {/* Weak / Optional subjects */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                <span className="flex items-center gap-1.5 font-sans">
                  <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  Weak Subjects / Low ROI Topics (Max 15M)
                </span>
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">{weakSubjs} / 15 Marks</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={weakSubjs}
                onChange={(e) => setWeakSubjs(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-ew-resize accent-indigo-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Live Output Feedback Panel (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[300px] shadow-sm">
            {/* Soft decorative light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-xl pointer-events-none" />
            
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400">Simulation Outcome</span>
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="text-5xl font-extrabold font-mono text-neutral-950 dark:text-white">{totalMarks}</span>
                <span className="text-neutral-500 dark:text-neutral-400 text-sm">/ 100 Marks</span>
              </div>
              
              <div className={`mt-6 p-4 rounded-xl border text-xs leading-normal ${bracket.colorClass}`}>
                <div className="font-extrabold text-sm mb-1 uppercase tracking-wide flex items-center gap-1.5">
                  <Trophy className="w-4 h-4" /> {bracket.tier}
                </div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1 mb-2">
                  🎯 Potential Outcome: {bracket.outcome}
                </p>
                <p className="text-[11px] text-neutral-700 dark:text-neutral-300 leading-relaxed pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  {bracket.advice}
                </p>
              </div>
            </div>

            <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-normal pt-6 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              *Note: Actual marks vs ranks depend on papers difficulty variation and subject branch. Mechanical/Civil require higher scores (75+) for PSUs, while CSE/ECE ranges around (65+).
            </p>
          </div>
        </div>

      </div>

      {/* Target Outcome Bracket Table Grid */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 transition-colors shadow-sm">
        <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
          <BarChart2 className="w-5.5 h-5.5 text-indigo-600 dark:text-indigo-400" /> Score Spectrum & College Outcomes
        </h4>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs divide-y divide-neutral-200 dark:divide-neutral-800">
            <thead className="bg-neutral-50 dark:bg-neutral-800 text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <tr>
                <th className="px-4 py-3 font-semibold rounded-l-lg">Score bracket</th>
                <th className="px-4 py-3 font-semibold">Competition Zone</th>
                <th className="px-4 py-3 font-semibold">Typical Outcomes</th>
                <th className="px-4 py-3 font-semibold rounded-r-lg">Necessary Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 font-sans text-neutral-600 dark:text-neutral-300 leading-normal">
              <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-4 font-bold text-neutral-900 dark:text-white">35 - 45 Marks</td>
                <td className="px-4 py-4"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400 font-semibold uppercase text-[10px]">Moderate-Safe</span></td>
                <td className="px-4 py-4">Safe Qualification, admission in tier-2/3 local colleges or private universities.</td>
                <td className="px-4 py-4">Consolidate Maths & General Aptitude entirely. Eliminate negative marking.</td>
              </tr>
              <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-4 font-bold text-neutral-900 dark:text-white">45 - 55 Marks</td>
                <td className="px-4 py-4"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400 font-semibold uppercase text-[10px]">Solid Aspirant</span></td>
                <td className="px-4 py-4">Admissions into newer IITs (IIT Goa, Palakkad) and leading NITs (Tiruchirappalli, Surathkal, Warangal).</td>
                <td className="px-4 py-4">Strengthen at least 4 core technical subjects to absolute 85% accuracy.</td>
              </tr>
              <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-4 font-bold text-neutral-900 dark:text-white">55 - 65 Marks</td>
                <td className="px-4 py-4"><span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950/20 dark:text-indigo-400 font-semibold uppercase text-[10px]">Elite Tier</span></td>
                <td className="px-4 py-4">Premiere master streams at older IITs (M.Tech), or recruitment at leading core PSUs.</td>
                <td className="px-4 py-4">Begin full mocks by early November. Fine-tune diagnostic log items weekly.</td>
              </tr>
              <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50">
                <td className="px-4 py-4 font-bold text-neutral-900 dark:text-white">65+ Marks</td>
                <td className="px-4 py-4"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 font-semibold uppercase text-[10px]">National Ranker</span></td>
                <td className="px-4 py-4">All-India ranks &lt; 200, immediate Core PSU interviews, direct fellowships, BARC calls.</td>
                <td className="px-4 py-4">Restrict raw guesswork entirely. Take 15 full length mock papers under conditions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accuracy Impact Demonstration (Why guessing is forbidden) */}
      <div className="bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/15 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
          <h4 className="text-base font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
            <AlertTriangle className="w-5 h-5" /> The Harsh Mathematics of Question Attempt Guesswork
          </h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            Under pressure, aspirants often try to compensate for lack of study by attempting uncertain questions, claiming "it is a 50-50 guess." Let's look at the mathematical impact of guessing 75 Marks in an exam:
          </p>
          <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1.5 list-disc pl-4 font-sans">
            <li><strong>90% Accuracy (Serious Strategy):</strong> Attempting 75 marks with high control yields ~67.5 marks. Accounting for negatives, you secure <strong>{highAccuracyScore} Marks</strong> (Elite tier / IIT Bombay admission!)</li>
            <li><strong>70% Accuracy (Guesswork Trap):</strong> Attempting same 75 marks with raw guessing yields ~52.5 marks. Accounting for negative marking of the 30% wrong questions, it drops to <strong>{poorAccuracyScore} Marks</strong> (Bare qualifying zone!)</li>
          </ul>
        </div>

        <div className="md:col-span-4 bg-white dark:bg-neutral-900 p-4 border border-amber-500/15 rounded-xl text-center shadow-xs">
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600">Guesswork Penalty cost:</span>
          <div className="text-3xl font-extrabold text-red-500 dark:text-red-400 font-mono mt-1">
            -{Math.round((highAccuracyScore - poorAccuracyScore) * 10) / 10} M
          </div>
          <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-snug mt-1 pt-1.5 border-t border-neutral-100 dark:border-neutral-800">
            A single guess can crash your All India Rank from <strong>Top 150</strong> down to <strong>8,000</strong>. Remember, accuracy beats coverage!
          </p>
        </div>
      </div>
    </div>
  );
}
