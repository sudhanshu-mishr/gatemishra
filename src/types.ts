export interface Subject {
  name: string;
  weightage: string; // e.g. "8-10 Marks"
  category: 'High' | 'Medium' | 'Low';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeNeeded: string; // e.g., "50 hours"
  revisionFreq: string; // e.g., "Bi-weekly"
  practiceIntensity: 'High' | 'Medium';
  type: 'Scoring' | 'Concept-heavy' | 'Double-advantage';
  description: string;
  videoId?: string;
  isHighROI: boolean;
}

export interface BranchInfo {
  id: string;
  name: string; // e.g. CSE, ECE
  fullName: string; // e.g. Computer Science & Engineering
  overview: string;
  difficultyLevel: 'Moderate' | 'High' | 'Very High';
  bestStartSubject: string;
  prepOrder: string[];
  idealTimeMonths: number;
  beginnerStrategy: string;
  mistakes: string[];
  subjects: Subject[];
  interviewVideoId?: string;
  rankEstimates?: { year: number; score: number; rank: number }[];
}

export interface StudyPhase {
  name: string;
  duration: string;
  focus: string;
  tasks: string[];
}

export interface SchedulePlan {
  id: string;
  title: string;
  subtitle: string;
  phases: StudyPhase[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'schedule' | 'mocks' | 'college';
}
