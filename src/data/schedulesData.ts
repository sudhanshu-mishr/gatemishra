import { SchedulePlan } from '../types';

export const schedulesData: SchedulePlan[] = [
  {
    id: '12-month',
    title: '12-Month Comprehensive Roadmap',
    subtitle: 'Recommended for 3rd-year college students or graduates starting early. Focuses on exhaustive depth and triple-layer revision.',
    phases: [
      {
        name: 'Phase 1: Foundations & Math',
        duration: 'Months 1 to 3',
        focus: 'Strengthen Engineering Math, General Aptitude, and 2 lightweight scoring subjects.',
        tasks: [
          'Exhaustive completion of Calculus, Linear Algebra, and Discrete Math / Probability.',
          'Solve General Aptitude daily for 15-20 minutes.',
          'Identify and write clean derivations of core lemmas.',
          'Target completing 15-20% of the overall technical syllabus.'
        ]
      },
      {
        name: 'Phase 2: Heavyweight Core Concepts',
        duration: 'Months 4 to 7',
        focus: 'Dive deep into highest-weightage technical blocks of your selected branch.',
        tasks: [
          'Study core subjects one-by-one (e.g. Algorithms & OS for CSE, Machines & Power Systems for EE).',
          'Avoid skipping topics; maintain an "Ongoing Formula Journal".',
          'Solve standard textbook examples to fortify conceptual clarity.',
          'Complete 75-80% of entire branch syllabus.'
        ]
      },
      {
        name: 'Phase 3: Exhaustive PYQs (Pass 1)',
        duration: 'Months 8 and 9',
        focus: 'Familiarize with the real standard of GATE questions.',
        tasks: [
          'Attempt previous 25 years of GATE questions for completed subjects.',
          'Mark "Repeat Killers" (questions you fail to solve on the first attempt).',
          'Complete remaining 20% of low-priority or lightweight subjects.',
          'Assess weak sections using the Mistake Diary.'
        ]
      },
      {
        name: 'Phase 4: Sectional Tests & Revision Cycles',
        duration: 'Months 10 and 11',
        focus: 'Shift focus from passive reading to quick active recall.',
        tasks: [
          'Begin 7-day cyclical revision: review old short notes weekly.',
          'Enroll in standard test series and solve 30+ subject-wise and sectional tests.',
          'Perfect your Virtual Calculator speed; calculate everything digitally, never by hand.',
          'Identify pattern gaps: why are you losing marks? (Silly mistakes vs. Concept gaps).'
        ]
      },
      {
        name: 'Phase 5: Full Mocks & Mindset Polish',
        duration: 'Final Month',
        focus: 'Replicate exam pressure and finalize time-management rules.',
        tasks: [
          'Take 12 to 15 full-length mock tests exactly in the 9:00-12:00 or 2:30-5:30 slots.',
          'Conduct 3-hour forensic analyses after every mock test.',
          'Refuse to learn new topics. Polish what you know 100%.',
          'Memorize rapid formula sheets and keep stress limits managed.'
        ]
      }
    ]
  },
  {
    id: '8-month',
    title: '8-Month Strategic Timeline',
    subtitle: 'Balanced and efficient. Recommended for final year students or droppers starting by June-July.',
    phases: [
      {
        name: 'Phase 1: Base Integration',
        duration: 'Months 1 and 2',
        focus: 'Integrate Core Mathematics and your first two technical subjects.',
        tasks: [
          'Complete Engineering Mathematics (highly scoring).',
          'Start subject-1 (high ROI list) on odd days, subject-2 on even days.',
          'Develop habit of drafting concise, single-page short summaries.'
        ]
      },
      {
        name: 'Phase 2: Core Expansion',
        duration: 'Months 3 to 5',
        focus: 'Acquire remaining core syllabus content aggressively.',
        tasks: [
          'Focus purely on heavy-weightage core subjects.',
          'Maintain a strict limit of 1 standard resource per subject to save time.',
          'Dedicate Sundays solely to revising everything learned in the past fortnight.'
        ]
      },
      {
        name: 'Phase 3: Active Solving & PYQ Polish',
        duration: 'Month 6',
        focus: 'Bridge the gap between reading theories and calculating answers.',
        tasks: [
          'Practice 15-year chapter-wise PYQs.',
          'Track and eliminate common calculation slip-ups.',
          'Finish remaining low-yield subjects from summary bullet lists.'
        ]
      },
      {
        name: 'Phase 4: Target Sectionals & Rapid Fixes',
        duration: 'Month 7',
        focus: 'Solve targeted mock tests to expose residual conceptual blindspots.',
        tasks: [
          'Take 2 sectional mock tests weekly.',
          'Review formula notebooks daily for 30 minutes at wake-up.',
          'Re-solve "Repeat Killer" questions marked during prior months.'
        ]
      },
      {
        name: 'Phase 5: Simulative Mocks',
        duration: 'Final Month',
        focus: 'Condition your mind for highaccuracy over 180 minutes.',
        tasks: [
          'Solve 10 high-quality full length mocks.',
          'Analyze errors: make a spreadsheet of Concept vs Calculator errors.',
          'Rest properly; keep active recall sharp.'
        ]
      }
    ]
  },
  {
    id: '6-month',
    title: '6-Month High Intensity Tracker',
    subtitle: 'Structured for repeaters or highly disciplined candidates.',
    phases: [
      {
        name: 'Phase 1: Core Target Selection',
        duration: 'Month 1 and 2',
        focus: 'Cover the highest weightage 60% of the course thoroughly.',
        tasks: [
          'Focus strictly on the top 5 high-yield subjects + Math.',
          'Study 6 hours daily with strict focus.',
          'Start drafting short notes concurrently. No room for delayed reviews.'
        ]
      },
      {
        name: 'Phase 2: Full Integration & Speed Base',
        duration: 'Months 3 and 4',
        focus: 'Cover secondary subjects and initiate deep PYQ cycles.',
        tasks: [
          'Study secondary technical subjects using high-speed modules.',
          'Solve previous 10 years of GATE questions immediately.',
          'Practice Aptitude on alternate days.'
        ]
      },
      {
        name: 'Phase 3: Subject/Multi-subject Mocks',
        duration: 'Month 5',
        focus: 'Expose time limits under test constraints.',
        tasks: [
          'Take multi-subject tests to practice context switching.',
          'Establish dynamic short note recall patterns.',
          'Commit all standard numerical approximations to memory.'
        ]
      },
      {
        name: 'Phase 4: Forensics & Poland',
        duration: 'Final Month',
        focus: 'Polish and refine known subjects.',
        tasks: [
          'Solve 8 full length mock papers.',
          'Strictly restrict new topic acquisition.',
          'Run rapid formula passes twice daily.'
        ]
      }
    ]
  },
  {
    id: '3-month',
    title: '3-Month Crash Plan (High-ROI)',
    subtitle: 'Emergency mode. Aims to qualify and maximize score by focusing purely on high-yield and mathematical topics.',
    phases: [
      {
        name: 'Phase 1: Math, Aptitude & Target 3 Core subjects',
        duration: 'Month 1',
        focus: 'Lock down the guaranteed 28-30 marks base.',
        tasks: [
          'Complete General Aptitude (15 marks) and Engineering Math (~13 marks). This represents nearly ~28% of the total score and is highly accessible.',
          'Pick exactly three high-ROI subjects of your branch. Read concise summary sheets only.',
          'Draft standard single-page cheat sheets of fundamental formulas.'
        ]
      },
      {
        name: 'Phase 2: Recent 10-Year PYQ Polish',
        duration: 'Month 2',
        focus: 'Examine pattern recurrences directly from recent history.',
        tasks: [
          'Skip textbooks. Go straight to chapter-wise solved PYQs.',
          'Reverse engineer theories by studying how questions are solved.',
          'Solve 3-4 multi-subject mock tests to evaluate capabilities.'
        ]
      },
      {
        name: 'Phase 3: Focused Practice Mocks & Formulas',
        duration: 'Final Month',
        focus: 'Perfect execution speed and prevent silly mistakes.',
        tasks: [
          'Take 5 full-length mock tests to practice time allocation.',
          'Review error-prone formulas daily.',
          'Focus on maximizing accuracy over numerical values.'
        ]
      }
    ]
  }
];

export const routinesData = {
  collegeStudent: {
    title: "Daily Routine: College Students",
    subtitle: "Ideal for balancing semester exams, projects, and 4-5 hours of dedicated GATE daily study.",
    slots: [
      { time: "06:00 AM - 07:30 AM", activity: "Slot 1 (Morning Focus): High retention concepts or complex math. Pure silence, no notifications." },
      { time: "09:00 AM - 04:00 PM", activity: "College Hours: Use library gaps to solve 5-10 MCQ/NAT questions or review formulas on your phone." },
      { time: "05:30 PM - 07:30 PM", activity: "Slot 2 (Evening Intensity): Technical core topic completion. Active reading and derivation writing." },
      { time: "09:00 PM - 10:30 PM", activity: "Slot 3 (Practice & PYQs): Solve 15-20 problems of the topic studied in Slot 2. Clear lingering doubts." },
      { time: "10:30 PM - 10:45 PM", activity: "Daily Review: Jot down formulas in your binder and review tomorrow's targets." }
    ],
    tips: [
      "Use college travel duration to review PDF formulas or watch short conceptual videos.",
      "Never let college semesters derail your schedule. Maintain an absolute minimum of 2 hours daily even during internals.",
      "Secure early project selections that align with your GATE branch concepts (e.g., Database or OS architectures for CSE)."
    ]
  },
  dropper: {
    title: "Daily Routine: Full-Time Aspirants",
    subtitle: "Structured for droppers or working professionals on study leave. Targets 8-10 hours with spacing.",
    slots: [
      { time: "07:30 AM - 08:00 AM", activity: "Wake-up & Active Recall: Grab your formula journal and write 15 formulas from memory." },
      { time: "08:30 AM - 11:30 AM", activity: "Slot 1 (Morning Core - 3h): Heaviest concept study when brain freshness is maximal." },
      { time: "12:00 PM - 02:00 PM", activity: "Slot 2 (Numerical Focus - 2h): Active mathematics solving or problem sets. Combats afternoon drowsiness." },
      { time: "04:30 PM - 07:30 PM", activity: "Slot 3 (Core Sequel - 3h): Class videos, revision notes, or secondary subject progression." },
      { time: "09:00 PM - 10:30 PM", activity: "Slot 4 (Mock/PYQ Analysis - 1.5h): Time-bound numerical solving and spreadsheet logging." },
      { time: "10:30 PM - 11:00 PM", activity: "Wind-down: Plot your daily scorecard (questions solved vs. accuracy rate)." }
    ],
    tips: [
      "Take structured 15-minute screen-free walks between study slots to offset cognitive fatigue.",
      "Social isolation can become taxing. Set up weekly check-ins with one serious aspirant peer.",
      "Treat preparation like a professional full-time job. Punch in at 8:30 AM without administrative delays."
    ]
  }
};
