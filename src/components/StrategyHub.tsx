import React, { useState } from 'react';
import { errorCategories, revisionFramework, pyqStrategy, mindsetAdvice } from '../data/strategyData';
import { ShieldAlert, BookOpen, Repeat, Zap, CheckCircle, HelpCircle, Activity, BookmarkMinus } from 'lucide-react';

export default function StrategyHub() {
  const [activeErrorTab, setActiveErrorTab] = useState<string>("Concept Hole (Theoretical Gap)");
  const [activeMindsetIdx, setActiveMindsetIdx] = useState<number>(0);

  const currentError = errorCategories.find(err => err.title === activeErrorTab) || errorCategories[0];

  return (
    <div className="space-y-8">
      {/* Section Introduction */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
          Pragmatic Preparation Strategy
        </h3>
        <p className="text-sm text-neutral-500">Unpack standardized checklists for solving questions, drafting short notes, and analyzing mock exams</p>
      </div>

      {/* Forensic Mock Test Analyst */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 transition-colors shadow-sm">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
          <div>
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Activity className="w-5.2 h-5.2 text-indigo-500 animate-pulse" /> Forensic Mock Test Diagnostic
            </h4>
            <p className="text-xs text-neutral-500">Click their tabs to analyze why marks are lost, and implement targeted corrections</p>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 font-mono">Real-time troubleshooting</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Subtabs lists (5 units) */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {errorCategories.map((err) => (
              <button
                key={err.title}
                onClick={() => setActiveErrorTab(err.title)}
                className={`p-3 text-left rounded-xl border text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                  activeErrorTab === err.title
                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 hover:text-neutral-950 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{err.title}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                    err.badge === 'Critical' ? 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400' :
                    err.badge === 'Warning' ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400' :
                    err.badge === 'Common' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400' :
                    'bg-neutral-100 text-neutral-700 dark:bg-neutral-800'
                  }`}>{err.percentage}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Diagnosis Outputs (7 units) */}
          <div className="lg:col-span-7 bg-neutral-50 dark:bg-neutral-800 p-5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-300">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">Core Reason:</span>
                <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-base mt-1 leading-snug">
                  {currentError.reason}
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 rounded-lg">
                <span className="text-[10px] font-mono tracking-wider text-indigo-600 dark:text-indigo-400 uppercase font-extrabold block mb-1">Standard Remedy Framework:</span>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                  {currentError.remedy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PYQ Strategic Pass Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PYQs card */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 transition-colors shadow-sm">
          <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-200 mb-3 flex items-center gap-2">
            <Repeat className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Previous Year Question (PYQ) Mastery
          </h4>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 leading-normal">
            {pyqStrategy.whyCritical} Study how to approach PYQs in three sequential stages:
          </p>

          <div className="space-y-4">
            {pyqStrategy.passes.map((pass, pIdx) => (
              <div key={pIdx} className="bg-neutral-50/50 dark:bg-neutral-800/50 p-3.5 rounded-xl border border-neutral-200/30">
                <div className="flex justify-between items-center text-xs font-bold text-neutral-900 dark:text-neutral-200 mb-1.5 flex-wrap gap-1">
                  <span className="text-indigo-600 dark:text-indigo-400">{pass.name}</span>
                  <span className="text-[10px] font-mono font-normal text-neutral-500 dark:text-neutral-400 uppercase">{pass.timeline}</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal font-sans">
                  {pass.method}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Layer Revision & Short Notes */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 transition-colors shadow-sm space-y-6">
          <div>
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-200 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Golden Rules of Revision
            </h4>
            <div className="space-y-3.5 pt-1">
              {revisionFramework.threeLayers.map((layer, lIdx) => (
                <div key={lIdx} className="flex gap-2">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 block">{layer.title}</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal mt-0.5 font-sans">{layer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-5">
            <h5 className="text-xs font-bold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase mb-3">Formula Sheets & Short Notes Blueprint:</h5>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 list-inside">
              {revisionFramework.shortNotesRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-1.5 leading-normal font-sans">
                  <span className="text-indigo-500 flex-shrink-0">▪</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Last 60 Days countdown visual */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-2xl p-6 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-xl pointer-events-none" />
        
        <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
          <BookmarkMinus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> The Final 60 Days Checklist Block
        </h4>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-sans leading-normal">
          How you manage high stress and content reviews during the closing 2 months defines your terminal test output significantly. Focus purely on stabilization.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {revisionFramework.last60DaysBlock.map((block, idx) => (
            <div key={idx} className="bg-neutral-50 dark:bg-neutral-900/40 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-xs">
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">{block.dayRange}</span>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans mt-2 pt-2 border-t border-neutral-150 dark:border-neutral-800">
                {block.activity}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mindset & Burnout Advice */}
      <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl transition-colors shadow-sm">
        <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-250 mb-4 tracking-tight">
          Mental Fortitude & Stress-Management Strategy
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4 flex flex-col gap-1.5">
            {mindsetAdvice.map((item, idx) => (
              <button
                key={item.situation}
                onClick={() => setActiveMindsetIdx(idx)}
                className={`px-3 py-2.5 rounded-lg text-left text-xs font-bold font-sans tracking-wide transition-all ${
                  activeMindsetIdx === idx
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400'
                    : 'text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {item.situation}
              </button>
            ))}
          </div>

          <div className="md:col-span-8 p-5 rounded-xl bg-indigo-50/20 dark:bg-indigo-950/20 border border-indigo-200/30 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
            <h5 className="font-extrabold text-neutral-900 dark:text-neutral-100 mb-2 uppercase text-[10px] tracking-wider text-indigo-700 dark:text-indigo-300">
              🛠️ Actionable Advice for: {mindsetAdvice[activeMindsetIdx].situation}
            </h5>
            <p>{mindsetAdvice[activeMindsetIdx].advice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
