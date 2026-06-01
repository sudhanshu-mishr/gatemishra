export interface ErrorCategory {
  title: string;
  badge: 'Critical' | 'Warning' | 'Common' | 'Info';
  percentage: string;
  reason: string;
  remedy: string;
}

export const errorCategories: ErrorCategory[] = [
  {
    title: "Concept Hole (Theoretical Gap)",
    badge: "Critical",
    percentage: "35% of errors",
    reason: "Attempting questions without knowing the boundary conditions or deep theorem rules.",
    remedy: "Go back to source notes immediately. Write down the precise theorem or model limitation. Do NOT solve more questions blindly; first patch the theory gap."
  },
  {
    title: "Silly Calculation Error",
    badge: "Warning",
    percentage: "30% of errors",
    reason: "Rushing through basic arithmetic, swapping signs (+ to -), or misusing decimal calculations in NAT (Numerical Answer Type).",
    remedy: "Slow down the last 15% of the calculation step. Double check all units before typing the answer into the virtual keypad. Solve all equations line-by-line on rough paper."
  },
  {
    title: "Misreading the Question",
    badge: "Common",
    percentage: "20% of errors",
    reason: "Ignoring key conditional words like 'NOT', 'INCORRECT', 'MINIMUM', 'MAXIMUM', or 'assuming single cycle instead of multi cycle'.",
    remedy: "Read the final line of the question twice. Underline or write down the precise unit requested (e.g. 'in milliseconds' or 'in kilo-bytes') in your rough booklet before working."
  },
  {
    title: "Time Crunch & Panic",
    badge: "Info",
    percentage: "15% of errors",
    reason: "Getting stuck on a single complex 2-mark question for 15+ minutes, leaving simple questions in the end unread.",
    remedy: "Adopt the 'Two-Pass Strategy'. If a question takes more than 3 minutes without a clear path, mark it 'Review' and move on. Clear all easy 1-mark questions first."
  }
];

export const revisionFramework = {
  threeLayers: [
    {
      title: "Layer 1: Daily Micro-Recall (20 Mins)",
      description: "At the start of your day, spend 20 minutes covering yesterday's short notes. Quickly scribble crucial formulas without looking downstream at the textbook answers."
    },
    {
      title: "Layer 2: Weekly Subject Cycles (2 Hours)",
      description: "Every Sunday, select one subject finished in the previous month. Solve 10 high-level practice problems or PYQs of that subject to keep neural pathways fresh."
    },
    {
      title: "Layer 3: Monthly Simulative Review",
      description: "Once every month, solve a dedicated mini-mock or custom test comprising questions strictly from previously covered subjects to practice context switching."
    }
  ],
  shortNotesRules: [
    "The 1:10 Ratio: 100 pages of standard class notes must construct exactly 10 pages of short notes.",
    "Derivations Out, Edge Cases In: Never write complete proofs. Write the final formula, defined units, boundary conditions, and direct exceptions.",
    "Include 'My Common Mistakes': Write down 3-4 specific warnings highlighting areas where you frequently commit errors in practice tests (e.g., 'Check if base of log is e or 2')."
  ],
  last60DaysBlock: [
    { dayRange: "Days 60 - 45", activity: "Solve 1 full mock every 3 days. Focus heavily on sectional revisions of weak subject clusters." },
    { dayRange: "Days 45 - 15", activity: "Solve 1 mock every 2 days. Complete virtual calculator conditioning. Maintain 3-hour mock correction spreadsheets." },
    { dayRange: "Days 15 - 5", activity: "Stop taking fresh mocks. Re-solve marked 'Repeat Killers' from PYQs and previous years' mock mistake notebooks." },
    { dayRange: "Last 5 Days", activity: "Flip through classic formulas. Keep sleep schedules rigid. Relax and visualize positive exam conditions." }
  ]
};

export const pyqStrategy = {
  whyCritical: "GATE is famous for repeating concepts, though question templates vary. Over 75% of questions are logical repackages of previous principles.",
  passes: [
    {
      name: "Pass 1: Chapter-Wise Integration",
      timeline: "During initial syllabus coverage",
      method: "On completing a specific chapter, solve its past 20 years of GATE questions. Do not look at solutions for at least 10 minutes. Mark tough questions with a star (*)."
    },
    {
      name: "Pass 2: Subject-Wise Integration",
      timeline: "During the first revision loop",
      method: "Attempt the starred (*) questions again. If you successfully solve them, unstar them. If you fail again, add them to your critical mistake register."
    },
    {
      name: "Pass 3: Exam-Simulation Pass",
      timeline: "December & January",
      method: "Download papers of recent 3 years as standard PDFs. Solve them in strict, timed, 3-hour slots without breaks to benchmark accuracy."
    }
  ]
};

export const resourceList = {
  generalTips: "Standard books are exceptional for underlying concept building. However, do not read entire textbooks cover-to-cover; map the GATE syllabus first, read only the relevant target chapters, and solve their end-of-chapter exercises.",
  byBranch: [
    {
      branch: "Computer Science (CSE)",
      books: [
        "Discrete Mathematics: Kenneth Rosen",
        "Algorithms: Cormen, Leiserson, Rivest, Stein (CLRS)",
        "Operating Systems: Silberschatz, Galvin, Gagne",
        "Computer Networks: Larry Peterson & Bruce Davie / Kurose & Ross",
        "Database Systems: Korth, Sudarshan / Navathe"
      ]
    },
    {
      branch: "Electronics & Communications (ECE)",
      books: [
        "Network Analysis: Van Valkenburg / Hayt & Kemmerly",
        "Signals & Systems: Oppenheim & Willsky",
        "Analog Circuits: Boylestad / Sedra & Smith",
        "Semiconductor Devices: Donald Neamen / Ben G. Streetman"
      ]
    },
    {
      branch: "Electrical Engineering (EE)",
      books: [
        "Electrical Machines: P.S. Bimbhra",
        "Power Systems: C.L. Wadhwa / Stevenson",
        "Power Electronics: P.S. Bimbhra / M.H. Rashid",
        "Control Systems: B.C. Kuo / Nagrath & Gopal"
      ]
    },
    {
      branch: "Mechanical Engineering (ME)",
      books: [
        "Theory of Machines: S.S. Rattan",
        "Strength of Materials: Gere & Timoshenko / Ramamrutham",
        "Thermodynamics: P.K. Nag",
        "Fluid Mechanics: FM White / Modi & Seth"
      ]
    },
    {
      branch: "Civil Engineering (CE)",
      books: [
        "Soil Mechanics: Gopal Ranjan & Rao / K.R. Arora",
        "Environmental Engineering: S.K. Garg",
        "Transportation Engineering: Khanna & Justo",
        "Structural Analysis: C.S. Reddy / Devdas Menon"
      ]
    }
  ]
};

export const mindsetAdvice = [
  {
    situation: "Bad Mock Test Results",
    advice: "Mocks are designed to expose errors, not predict the final score. A low mock score means you found 15 holes in your concept before the actual exam. Celebrate having found them early! Correct them and move on."
  },
  {
    situation: "Consistent Burnout",
    advice: "GATE preparation is a long-distance marathon, not a 100-meter dash. If you study 12 hours one day and 0 hours for the next three days, you will panic. Target a consistent 5-6 hours with strict regular sleep rather than intense sporadic bursts."
  },
  {
    situation: "Backlog Management",
    advice: "Never stall current classes to clear historical backlog. Keep current live topics at 75% focus, and dedicate 25% of your study time to clean up historical backlog blocks systematically."
  }
];
