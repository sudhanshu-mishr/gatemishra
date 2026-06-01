import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Info, CheckCircle2, Bookmark } from 'lucide-react';
import { FAQItem } from '../types';
import { resourceList } from '../data/strategyData';

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: "Can I realistically crack the GATE exam within 6 months?",
    answer: "Yes, absolutely. A dedicated 6-month timeline requires focusing on the highest-weightage 65% of the syllabus, alongside engineering mathematics and aptitude. You will need roughly 5-6 hours of consistent study daily. Rather than trying to cover every minor topic, master high-ROI concepts perfectly first and solve 15 years of PYQs.",
    category: 'general'
  },
  {
    id: 'faq-2',
    question: "Is physical coaching absolutely necessary to achieve a double-digit rank?",
    answer: "No, coaching is not a mandatory barrier anymore. Standard textbook theories are clear, and high-quality educational modules (such as NPTEL, free online lectures, standard textbooks, solved papers) are easily accessible. The actual differentiator in GATE is a student's dedication to revising cyclically, managing mistake logs, and taking 12+ full-length mock tests.",
    category: 'general'
  },
  {
    id: 'faq-3',
    question: "How many hours of focused study are realistically enough on a daily basis?",
    answer: "Quality of attention represents far higher yields than quantity of sitting time. For college students, a disciplined 3-4 hours daily is excellent. For full-time aspirants (droppers), a structured 7-8 hours broken into 2-hour segments preserves maximum cognitive focus. Avoid studying past the point of severe fatigue.",
    category: 'schedule'
  },
  {
    id: 'faq-4',
    question: "Can an average college student with a decent GPA score well in GATE?",
    answer: "Yes, completely! GATE does not evaluate your cumulative college semester GPA or your past theoretical records. It tests functional numerical application, logical deduction, and fundamental reasoning. Many students with low college GPAs achieve top All India Ranks by devoting undivided effort to standard engineering problems.",
    category: 'college'
  },
  {
    id: 'faq-5',
    question: "Is solving previous year questions (PYQs) enough to qualify and score high?",
    answer: "Solving PYQs teaches you patterns, question structures, and standard calculation steps. If you understand the core theorems behind the PYQs, you are highly likely to score 50+ marks easily. However, to cross the elite 65+ barrier, mock tests are necessary to prepare you for entirely novel problem setups that you haven't seen before.",
    category: 'mocks'
  },
  {
    id: 'faq-6',
    question: "How many full-length mock tests are enough, and when should I start taking them?",
    answer: "An ideal target is 12 to 15 high-quality full-length mocks. You should begin taking them by late November or early December, even if only 80% of your syllabus is covered. Do not wait for 100% completion—it is a myth. The main purpose of mocks is to teach you error diagnostic mapping under pressure.",
    category: 'mocks'
  },
  {
    id: 'faq-7',
    question: "How can I balance GATE preparation along with college semester exams?",
    answer: "Adopt the 'Synergy Rule'. Many of your 5th/7th-semester core subjects (e.g. DBMS, Algorithms for CS, or Control Systems for EE) match GATE core topics. Study those college modules with standard books and solve relevant GATE PYQs concurrent with semester preparation. For unrelated subjects, utilize 1-week rapid preparation guides.",
    category: 'college'
  },
  {
    id: 'faq-8',
    question: "What is the best way to handle consistent bad marks in mock tests?",
    answer: "Treat mock exams as diagnosis reports, not predicted rank sheets. If you perform poorly, do not panic. Conduct a forensic breakdown: print out the test, categorize every lost mark into calculation slip, reading error, or concept hole, and commit the rectification path to a dedicated 'Mistake Notebook'. Re-take subject-wise modules immediately.",
    category: 'mocks'
  }
];

interface FaqProps {
  searchQuery: string;
}

export default function FaqSection({ searchQuery }: FaqProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  const filteredFaqs = faqs.filter(faq => {
    // Filter by tab category
    if (activeCategory !== 'all' && faq.category !== activeCategory) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Category selector triggers */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Common Aspirant Queries
          </h3>
          <p className="text-sm text-neutral-500">Pick a category or enter search terms in the header box to find practical answers</p>
        </div>

        <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
          {['all', 'general', 'schedule', 'mocks', 'college'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Expanded Accordion list (7 columns) */}
        <div className="lg:col-span-7 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center border rounded-2xl border-dashed text-neutral-500 border-neutral-300 dark:border-neutral-800">
              No matching questions found for your query. Try searching simple keywords like "hours", "mocks" or "college".
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 transition-all hover:shadow-xs"
                >
                  <div 
                    onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                    className="flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <h4 className="text-sm sm:text-base font-extrabold text-neutral-900 dark:text-neutral-100 leading-tight">
                      {faq.question}
                    </h4>
                    <button className="text-neutral-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-500" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-3.5 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Ethical Standard Textbook Resource List Sidebar (5 columns) */}
        <div className="lg:col-span-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 transition-colors shadow-sm space-y-5">
          <div className="flex items-center gap-2 mb-1 text-indigo-600 dark:text-indigo-400">
            <Bookmark className="w-5.2 h-5.2" />
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">Standard Textbooks guide</h4>
          </div>
          
          <p className="text-xs text-neutral-500 leading-relaxed font-sans">
            {resourceList.generalTips}
          </p>

          <div className="space-y-4 pt-1 font-sans">
            {resourceList.byBranch.map((block) => (
              <div key={block.branch} className="border-t border-neutral-100 dark:border-neutral-800/80 pt-3.5 first:border-t-0 first:pt-0">
                <h5 className="text-xs font-bold text-neutral-900 dark:text-neutral-300 mb-1.5 tracking-tight">
                  📚 {block.branch} Recommendations:
                </h5>
                <ul className="space-y-1 text-xs text-neutral-500 dark:text-neutral-400 list-inside pl-1">
                  {block.books.map((book) => (
                    <li key={book} className="flex items-start gap-1">
                      <span className="text-indigo-500 mt-1">▪</span>
                      <span>{book}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-3 bg-indigo-50/30 dark:bg-indigo-950/25 border border-indigo-100/50 dark:border-indigo-900/35 rounded-xl text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
            🔒 <strong>Disclaimer guidance:</strong> We promote only standard academic textbooks and authorized public educational platforms (like NPTEL). Never download or use pirated links—it violates copyright standards.
          </div>
        </div>

      </div>
    </div>
  );
}
