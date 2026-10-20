import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import ArchitectureTerminal from '@/components/ArchitectureTerminal';
import Skills from '@/components/Skills';
import EducationCertifications from '@/components/EducationCertifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';

const Index: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    // Force clean white theme
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');

    // Global ⌘K / Ctrl+K keyboard shortcut
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#1f2328] font-sans selection:bg-[#e7ff7d] selection:text-black">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Interactive Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Main Sections in eemonroy.com structure */}
      <main>
        <Hero onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        <Projects />
        <Experience />
        <ArchitectureTerminal />
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Soft-tinted eemonroy-style Footer */}
      <Footer />
    </div>
  );
};

export default Index;