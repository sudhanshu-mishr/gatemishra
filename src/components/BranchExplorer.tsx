import React, { useState, useEffect } from 'react';
import { branchesData } from '../data/branchesData';
import { BranchInfo, Subject } from '../types';
import { 
  BookOpen, Calendar, HelpCircle, AlertTriangle, Play, CheckCircle, Youtube, X,
  ChevronDown, ChevronRight, Award, Flame, Search, Layers, Clock, ShieldCheck
} from 'lucide-react';

interface BranchExplorerProps {
  searchQuery: string;
}

export default function BranchExplorer({ searchQuery }: BranchExplorerProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('cse');
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [selectedVideo, setSelectedVideo] = useState<{subject: string, id: string} | null>(null);

  const [completedSubjects, setCompletedSubjects] = useState<Record<string, boolean>>({});

  // Load syllabus progress on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gatenexus_syllabus_progress');
      if (saved) {
        setCompletedSubjects(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load syllabus tracker progress', e);
    }
  }, []);

  const toggleSubjectComplete = (subjectName: string, branchId: string) => {
    const key = `${branchId}::${subjectName}`;
    const next = { ...completedSubjects, [key]: !completedSubjects[key] };
    setCompletedSubjects(next);
    try {
      localStorage.setItem('gatenexus_syllabus_progress', JSON.stringify(next));
    } catch (e) {
      console.error('Failed to save syllabus progress', e);
    }
  };

  const toggleSubjectExpanded = (subjectName: string) => {
    setExpandedSubjects(prev => ({ ...prev, [subjectName]: !prev[subjectName] }));
  };

  const branch = branchesData.find(b => b.id === selectedBranchId) || branchesData[0];

  // Calculate percentage progress for this specific branch
  const branchSubjects = branch.subjects;
  const branchCompletedCount = branchSubjects.filter(sub => completedSubjects[`${branch.id}::${sub.name}`]).length;
  const branchProgressPercent = branchSubjects.length > 0
    ? Math.round((branchCompletedCount / branchSubjects.length) * 100)
    : 0;

  // Filter branches or subject highlights based on search query
  const filteredSubjects = branch.subjects.filter(sub => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return sub.name.toLowerCase().includes(q) || sub.description.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-8">
      {/* Branch Tabs Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Branch Roadmaps
          </h3>
          <p className="text-sm text-neutral-500">Pick your branch to view recommended sequence, priorities, and exam scope</p>
        </div>
        
        {/* Dynamic Branch filter pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl max-w-full">
          {branchesData.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBranchId(b.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedBranchId === b.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Info card and visual linear tracking path */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (8 units): Detailed overview and interactive checklist syllabus */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 mb-2">
                  {branch.fullName}
                </span>
                <h4 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-baseline gap-2">
                  {branch.name} Syllabus Hub
                </h4>
              </div>
              
              {/* Branch difficulty ring or gauge */}
              <div className="flex items-center space-x-3 bg-neutral-50 dark:bg-neutral-800/50 p-2.5 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50">
                <span className="text-xs text-neutral-500 font-medium">Concept Complexity:</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                  branch.difficultyLevel === 'Very High' 
                    ? 'text-red-700 bg-red-50 dark:bg-red-950/40 dark:text-red-400' 
                    : branch.difficultyLevel === 'High' 
                    ? 'text-amber-700 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400'
                    : 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400'
                }`}>
                  {branch.difficultyLevel}
                </span>
              </div>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6">
              {branch.overview}
            </p>

            {/* Beginner Starting Subject recommendation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-6">
              <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-emerald-800 dark:text-emerald-400 font-semibold text-sm">
                  <Play className="w-4.5 h-4.5" />
                  <span>Best Starting Subject</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-normal">
                  {branch.bestStartSubject}
                </p>
                <p className="text-[11px] text-emerald-600/80 dark:text-emerald-500/80 mt-2">
                  💡 Solidifies essential prerequisite rules before tough topics boot.
                </p>
              </div>

              <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-amber-800 dark:text-amber-400 font-semibold text-sm">
                  <AlertTriangle className="w-4.5 h-4.5" />
                  <span>Common Trap/Mistake</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-normal">
                  {branch.mistakes[0]}
                </p>
                <p className="text-[11px] text-amber-600/80 dark:text-amber-500/80 mt-2">
                  ⚠️ This costs average candidates over 8-10 raw cutoff marks.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Syllabus Tracker Progress Bar */}
          <div className="p-4 bg-indigo-50/30 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                Syllabus Tracker: {branch.name} Progress
              </h5>
              <p className="text-xs text-neutral-500">Toggle subjects below as you complete study material & basic questions</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-full sm:w-40 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-500" 
                  style={{ width: `${branchProgressPercent}%` }}
                />
              </div>
              <span className="text-xs font-bold font-mono text-indigo-700 dark:text-indigo-400 min-w-[2.5rem] text-right">
                {branchProgressPercent}%
              </span>
            </div>
          </div>

          {/* Subject details sections */}
          <div className="space-y-4">
            <h5 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm tracking-wide uppercase">
              Subject Wise Priority Grid {filteredSubjects.length !== branch.subjects.length && `(Filtered)`}
            </h5>
            
            {filteredSubjects.length === 0 ? (
              <div className="p-12 text-center border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-500">
                No subjects found matching "{searchQuery}". Try searching general keywords.
              </div>
            ) : (
              filteredSubjects.map((subject, idx) => {
                const isCompleted = completedSubjects[`${branch.id}::${subject.name}`];
                const isExpanded = expandedSubjects[subject.name];
                
                return (
                  <div 
                    key={subject.name}
                    className={`border rounded-xl transition-all duration-200 ${
                      isCompleted 
                        ? 'bg-neutral-50/40 dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800 opacity-80'
                        : isExpanded 
                        ? 'bg-white dark:bg-neutral-900 shadow-md border-indigo-200 dark:border-indigo-900/60'
                        : 'bg-white dark:bg-neutral-900 hover:shadow-sm border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    {/* Header trigger bar */}
                    <div className="p-4 flex items-center justify-between gap-4 cursor-pointer" onClick={() => toggleSubjectExpanded(subject.name)}>
                      
                      <div className="flex items-center space-x-3 min-w-0">
                        {/* Checkbox */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSubjectComplete(subject.name, branch.id);
                          }}
                          className={`p-1 rounded-md border text-white transition-colors cursor-pointer flex-shrink-0 ${
                            isCompleted 
                              ? 'bg-emerald-600 border-emerald-600 dark:bg-emerald-500 dark:border-emerald-500 hover:bg-emerald-700'
                              : 'border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                          }`}
                        >
                          <CheckCircle className={`w-4 h-4 ${isCompleted ? 'opacity-100' : 'opacity-0 text-transparent'}`} />
                        </button>

                        <div className="truncate">
                          <h6 className={`text-sm sm:text-base font-semibold tracking-tight truncate ${
                            isCompleted ? 'line-through text-neutral-400 dark:text-neutral-500' : 'text-neutral-900 dark:text-neutral-100'
                          }`}>
                            {subject.name}
                          </h6>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs font-mono text-neutral-500 uppercase">{subject.weightage}</span>

                    {subject.videoId && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedVideo({subject: subject.name, id: subject.videoId!}); }}
                        className="flex items-center gap-1 text-xs font-medium px-2 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                      >
                        <Youtube className="w-3 h-3" />
                        Watch Video
                      </button>
                    )}
{subject.isHighROI && (
                              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] uppercase tracking-wide font-extrabold bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400">
                                <Flame className="w-3 h-3 text-red-500" /> High ROI
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {/* Status badges */}
                        <span className={`hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          subject.category === 'High' 
                            ? 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400' 
                            : subject.category === 'Medium' 
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400' 
                            : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
                        }`}>
                          Weight: {subject.category}
                        </span>

                        <span className={`hidden sm:inline-flex px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          subject.type === 'Scoring' 
                            ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400' 
                            : subject.type === 'Double-advantage' 
                            ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400' 
                            : 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
                        }`}>
                          {subject.type}
                        </span>

                        {isExpanded ? <ChevronDown className="w-4 h-4 text-neutral-500 dark:text-neutral-400" /> : <ChevronRight className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />}
                      </div>
                    </div>

                    {/* Expandable details segment */}
                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-sm text-neutral-600 dark:text-neutral-300 space-y-4 rounded-b-xl">
                        <p className="leading-relaxed text-xs sm:text-sm">
                          {subject.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-3 border-t border-neutral-200/50 dark:border-neutral-800/80 text-xs">
                          <div>
                            <span className="block text-[11px] text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase mb-0.5">Approx Study Hours</span>
                            <span className="font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-neutral-500" /> {subject.timeNeeded}
                            </span>
                          </div>
                          <div>
                            <span className="block text-[11px] text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase mb-0.5">Revision Target</span>
                            <span className="font-bold text-neutral-800 dark:text-neutral-200">
                              🔄 Every {subject.revisionFreq === 'Weekly' ? '7 days' : subject.revisionFreq === 'Bi-weekly' ? '15 days' : '30 days'}
                            </span>
                          </div>
                          <div>
                            <span className="block text-[11px] text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase mb-0.5">Conceptual Difficulty</span>
                            <span className={`font-bold flex items-center gap-1 ${
                              subject.difficulty === 'Hard' ? 'text-red-500' : subject.difficulty === 'Medium' ? 'text-amber-500' : 'text-emerald-500'
                            }`}>
                              🔴 {subject.difficulty}
                            </span>
                          </div>
                          <div>
                            <span className="block text-[11px] text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase mb-0.5">Practice Intensity</span>
                            <span className="font-bold text-neutral-800 dark:text-neutral-200">
                              ⚡ {subject.practiceIntensity} Practice
                            </span>
                          </div>
                        </div>

                        {/* Extra informational tip based on category */}
                        <div className="p-3 bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/50 rounded-lg flex items-center gap-2">
                          <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">Pro Approach:</span>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            {subject.type === 'Scoring' 
                              ? "Do not skip any PYQ step. Speed and accuracy count heavily as errors cost massive dynamic ranking."
                              : subject.type === 'Concept-heavy' 
                              ? "Build structural mental models. Rushing is fatal; solve deep multi-stage problems to establish foundation."
                              : "This subject links with previous blocks. Core proficiency gives you a structural boost in adjacent subjects!"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column (4 units): Recommended study sequence sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm transition-colors relative overflow-hidden">
            {/* Ambient pattern accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
            
            <h5 className="text-lg font-bold tracking-tight mb-1 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Setup Order
            </h5>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-sans">
              Experts advise preparing subjects in this strict linear order to establish core concept transfer.
            </p>

            <div className="space-y-4">
              {branch.prepOrder.map((subjName, index) => (
                <div key={subjName} className="flex gap-3 relative">
                  {/* Visual Connector Dot */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-500 text-[11px] font-bold font-mono flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      {index + 1}
                    </div>
                    {index < branch.prepOrder.length - 1 && (
                      <div className="w-[1px] h-10 bg-neutral-200 dark:bg-neutral-800 my-1" />
                    )}
                  </div>
                  
                  {/* Subject labels */}
                  <div className="pt-0.5">
                    <p className="text-xs font-bold text-neutral-850 dark:text-neutral-100">{subjName}</p>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      {index === 0 ? "⚠️ Recommended Foundation State" : index === branch.prepOrder.length - 1 ? "💯 Complete final polish blocks" : "Technical progression step"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Beginner startup strategy review card */}
            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <h6 className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">Strategy for Beginners:</h6>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                {branch.beginnerStrategy}
              </p>
            </div>
          </div>

          {/* Quick Stats banner */}
          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl md:shadow-sm">
            <h5 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm mb-4 tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" /> Rule of thumb
            </h5>
            <div className="space-y-3.5 text-xs text-neutral-600 dark:text-neutral-300">
              <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                <span>Ideal Preparation Window</span>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">{branch.idealTimeMonths} Months</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                <span>Core Math weightage</span>
                <span className="font-bold text-emerald-600">~13 - 15 Marks</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                <span>General Aptitude weightage</span>
                <span className="font-bold text-emerald-600">~15 Marks Guaranteed</span>
              </div>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-normal pt-1">
                📌 Mathematics and General Aptitude combined deliver nearly ~28 marks out of 100, which defines the general qualifying score threshold completely! Focus heavily on them from Day 1.
              </p>
            </div>
          </div>
        </div>


      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
          <div
            className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-800/50">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-500" />
                {selectedVideo.subject} - Free Lecture
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
</div>
    </div>
  );
}
