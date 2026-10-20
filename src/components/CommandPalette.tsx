import React, { useState, useEffect } from 'react';
import { 
  Command, 
  Search, 
  ArrowRight, 
  Briefcase, 
  Layers, 
  Code2, 
  FileText, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  X,
  ExternalLink,
  Sparkles,
  Check
} from 'lucide-react';
import { toast } from 'sonner';
import myResume from '@/asset/Praveen_Kumar_Resume.pdf';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    {
      group: 'Navigation',
      items: [
        { label: 'About & System Overview', icon: Layers, action: () => scrollTo('#about'), hint: 'Go to 01' },
        { label: 'System Blueprints & Interactive Lab', icon: Sparkles, action: () => scrollTo('#architecture'), hint: 'Go to 02' },
        { label: 'Production Experience (TIC Global & Upturn)', icon: Briefcase, action: () => scrollTo('#experience'), hint: 'Go to 03' },
        { label: 'Featured Systems & Projects', icon: Code2, action: () => scrollTo('#projects'), hint: 'Go to 04' },
        { label: 'Technical Arsenal & Skills', icon: Layers, action: () => scrollTo('#skills'), hint: 'Go to 05' },
        { label: 'Education & Credentials', icon: FileText, action: () => scrollTo('#credentials'), hint: 'Go to 06' },
        { label: 'Contact & Let\'s Talk', icon: Mail, action: () => scrollTo('#contact'), hint: 'Go to 07' },
      ]
    },
    {
      group: 'Quick Actions',
      items: [
        {
          label: 'Download Resume (PDF)',
          icon: FileText,
          action: () => {
            const link = document.createElement('a');
            link.href = myResume;
            link.download = 'Praveen_Kumar_Resume.pdf';
            link.click();
            toast.success('Downloading Praveen_Kumar_Resume.pdf');
            onClose();
          },
          hint: 'Download'
        },
        {
          label: 'Copy Email (praveenramesh5267@gmail.com)',
          icon: Mail,
          action: () => {
            navigator.clipboard.writeText('praveenramesh5267@gmail.com');
            toast.success('Email copied to clipboard');
            onClose();
          },
          hint: 'Copy'
        },
        {
          label: 'Copy Phone (+91 7550172090)',
          icon: Phone,
          action: () => {
            navigator.clipboard.writeText('+917550172090');
            toast.success('Phone number copied to clipboard');
            onClose();
          },
          hint: 'Copy'
        }
      ]
    },
    {
      group: 'External Links',
      items: [
        {
          label: 'GitHub Profile (github.com/praveen93634)',
          icon: Github,
          action: () => {
            window.open('https://github.com/praveen93634', '_blank');
            onClose();
          },
          hint: 'Open'
        },
        {
          label: 'LinkedIn Profile',
          icon: Linkedin,
          action: () => {
            window.open('https://www.linkedin.com/in/praveen-kumar-4ba09b291/', '_blank');
            onClose();
          },
          hint: 'Open'
        },
        {
          label: 'LeetCode (180+ Solved)',
          icon: Code2,
          action: () => {
            window.open('https://leetcode.com/u/praveen93634', '_blank');
            onClose();
          },
          hint: 'Open'
        }
      ]
    }
  ];

  const scrollTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter items
  const filteredGroups = actions
    .map(group => ({
      ...group,
      items: group.items.filter(item =>
        item.label.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter(group => group.items.length > 0);

  const flatItems = filteredGroups.flatMap(g => g.items);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (flatItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + flatItems.length) % (flatItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (flatItems[selectedIndex]) {
          flatItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, flatItems, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-xl bg-white border border-[#e5e5e5] rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        style={{ transformOrigin: 'top center' }}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#e5e5e5] gap-3">
          <Search size={18} className="text-[#59636e]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search commands, sections, or actions..."
            className="flex-1 bg-transparent text-sm text-[#1f2328] placeholder:text-[#59636e] focus:outline-none font-sans"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#59636e] hover:text-[#1f2328] hover:bg-[#f5f5f5] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-4 bg-white">
          {flatItems.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#59636e] font-mono">
              No results found for "{search}"
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.group} className="space-y-1">
                <div className="px-3 py-1 text-[10px] font-mono font-bold text-[#59636e] uppercase tracking-wider">
                  {group.group}
                </div>
                {group.items.map((item) => {
                  const globalIdx = flatItems.indexOf(item);
                  const isSelected = globalIdx === selectedIndex;
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(globalIdx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-all duration-150 ${
                        isSelected
                          ? 'bg-[#f0f4f8] text-[#0969da] font-semibold'
                          : 'text-[#1f2328] hover:bg-[#f8f9fa]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={15} className={isSelected ? 'text-[#0969da]' : 'text-[#59636e]'} />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#59636e] px-1.5 py-0.5 rounded bg-[#f0f0f0] border border-[#e0e0e0]">
                        {item.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-[#e5e5e5] bg-[#fafafa] flex items-center justify-between text-[11px] font-mono text-[#59636e]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Praveen Kumar • SDE-1</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
