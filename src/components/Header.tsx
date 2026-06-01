import React, { useState } from 'react';
import { Menu, X, Award, Search } from 'lucide-react';
import { Dock } from '@/components/ui/dock';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({
  activeSection,
  onNavigate,
  searchQuery,
  setSearchQuery
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Journey Map', id: 'journey' },
    { label: 'Branches', id: 'branches' },
    { label: 'Schedules', id: 'schedules' },
    { label: 'Score Strategy', id: 'score-strategy' },
    { label: 'Mock & PYQ Prep', id: 'star-strategy' },
    { label: 'Resources & FAQs', id: 'faq-resources' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-neutral-950/85 border-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[5rem] py-2">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-500/20 dark:shadow-none">
              <Award className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-1.5">
                GATE<span className="text-indigo-400">Nexus</span>
              </span>
              <p className="text-[10px] leading-none text-neutral-400 font-mono tracking-widest uppercase">Mastery Hub</p>
            </div>
          </div>

          {/* Desktop Navigation - Elegant Unified Dock */}
          <div className="hidden lg:flex items-center">
            <Dock activeSection={activeSection} onNavigate={handleNavClick} />
          </div>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search box quick utility */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subject or FAQ..."
                className="w-48 xl:w-56 pl-9 pr-3 py-1.5 text-xs rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile responsive triggers */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 mr-1 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 px-4 py-3 space-y-2 transition-colors">
          <div className="relative mb-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subjects, FAQs, strategy..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 focus:outline-none"
            />
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-md text-base font-medium ${
                activeSection === item.id
                  ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/40'
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
