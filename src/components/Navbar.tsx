import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight, Command } from 'lucide-react';
import myResume from '@/asset/Praveen_Kumar_Resume.pdf';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'work', 'experience', 'architecture', 'skills', 'credentials', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="band-column h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6">
        {/* Left: Logo / Monogram */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#top');
          }}
          className="flex items-center gap-3 group text-decoration-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#1f2328] text-white flex items-center justify-center font-bold text-xs tracking-wider transition-transform group-hover:scale-105">
            PK
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-[#1f2328] leading-tight">
              Praveen Kumar
            </span>
            <span className="text-[11px] font-mono text-[#59636e] leading-tight">
              Full Stack Engineer • SDE-1
            </span>
          </div>
        </a>

        {/* Right: Desktop Links in eemonroy style with vertical border separators */}
        <nav className="hidden md:flex items-center h-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`h-14 sm:h-16 px-4 lg:px-5 border-l border-[#e5e5e5] text-xs font-mono font-medium uppercase tracking-wider transition-colors flex items-center justify-center ${
                  isActive
                    ? 'text-[#0969da] bg-[#f8f9fa] font-bold'
                    : 'text-[#1f2328] hover:bg-[#f5f5f5] hover:text-black'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* ⌘K Command Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="h-14 sm:h-16 px-3.5 border-l border-[#e5e5e5] text-xs font-mono text-[#59636e] hover:text-[#1f2328] hover:bg-[#f5f5f5] transition-colors flex items-center gap-1.5"
            title="Open Command Menu (⌘K)"
          >
            <Command size={13} />
            <span className="hidden lg:inline text-[10px] bg-[#f0f0f0] border border-[#e0e0e0] px-1 py-0.5 rounded">⌘K</span>
          </button>

          {/* Resume Download Tab */}
          <a
            href={myResume}
            download="Praveen_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 sm:h-16 px-4 lg:px-5 border-l border-[#e5e5e5] text-xs font-mono font-semibold uppercase tracking-wider text-[#1f2328] hover:bg-[#f5f5f5] transition-colors flex items-center gap-1.5"
          >
            <Download size={13} className="text-[#0969da]" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 border border-[#e5e5e5] rounded-md text-[#59636e]"
            aria-label="Open Command Menu"
          >
            <Command size={16} />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 border border-[#e5e5e5] rounded-md text-[#1f2328]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e5e5e5] bg-white animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="w-full py-3 px-6 text-left text-xs font-mono uppercase tracking-wider text-[#1f2328] hover:bg-[#f5f5f5] border-b border-[#e5e5e5] flex justify-between items-center"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={14} className="text-[#59636e]" />
            </button>
          ))}
          <a
            href={myResume}
            download="Praveen_Kumar_Resume.pdf"
            className="w-full py-3 px-6 text-left text-xs font-mono font-bold uppercase tracking-wider text-[#0969da] bg-[#f8f9fa] flex items-center gap-2"
          >
            <Download size={14} />
            <span>Download Resume.pdf</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
