import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { 
  ArrowDown, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Truck, 
  Building2, 
  MessageSquare, 
  Code2, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import myResume from '@/asset/Praveen_Kumar_Resume.pdf';

interface HeroProps {
  onOpenCommandPalette: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCommandPalette }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.hero-preview-card',
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const previewCards = [
    {
      id: 'logistics',
      title: 'Logistics Admin Platform',
      tag: 'Next.js & Telemetry',
      chipColor: 'bg-[#afe3ff] text-[#003366]',
      category: 'TIC GLOBAL SERVICE',
      desc: 'On-demand fleet dispatch, live GPS trip tracking, driver onboarding KYC, and zone pricing.',
      link: '#work',
      metric: 'End-to-End Delivery Lifecycle'
    },
    {
      id: 'erp',
      title: 'Enterprise ERP SaaS',
      tag: 'Asset AMC & Query Opt.',
      chipColor: 'bg-[#e7ff7d] text-[#224400]',
      category: 'UPTURN TECHNOLOGY',
      desc: 'Modular ERP architecture, AMC & calibration tracking (-40% effort), and AWS EC2/Nginx query boost (+25%).',
      link: '#work',
      metric: '40% Effort Reduction'
    },
    {
      id: 'loopin',
      title: 'Loopin Real-Time Platform',
      tag: 'Socket.io & Firebase',
      chipColor: 'bg-[#fee593] text-[#553300]',
      category: 'FULL STACK REAL-TIME',
      desc: 'Bidirectional sub-50ms instant messaging, Firebase Google auth, and indexed MongoDB schemas.',
      link: '#work',
      metric: 'Sub-50ms Chat Propagation'
    },
    {
      id: 'leetcode',
      title: 'Algorithmic Problem Solving',
      tag: '180+ LeetCode DSA',
      chipColor: 'bg-[#c2ffdd] text-[#004d26]',
      category: 'CORE COMPUTER SCIENCE',
      desc: 'Binary Search, Dynamic Programming, Recursion, Trees, and Object-Oriented System Design.',
      link: '#skills',
      metric: '180+ Problems Solved'
    }
  ];

  return (
    <section id="top" ref={containerRef} className="border-b border-[#e5e5e5] bg-white">
      <div className="band-column pt-16 sm:pt-20 pb-16 px-4 sm:px-8">
        {/* eemonroy-style conversational headline */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6f6f6] border border-[#e5e5e5] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#1f883d] inline-block animate-pulse"></span>
            <span className="font-mono text-xs text-[#59636e] uppercase tracking-wider">
              Available for SDE-1 Roles • Chennai, India
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-3xl sm:text-5xl md:text-6xl font-normal text-[#1f2328] tracking-tight leading-[1.2] mb-6"
          >
            Hi, I’m <span className="font-semibold text-black">Praveen</span>,{' '}
            <span className="inline-block bg-[#e7ff7d] text-black px-2.5 sm:px-3 py-0.5 rounded-lg font-semibold my-1">
              a Full Stack Developer
            </span>{' '}
            {/* at{' '} */}
            {/* <span className="inline-block bg-[#afe3ff] text-black px-2.5 sm:px-3 py-0.5 rounded-lg font-semibold my-1">
              TIC Global
            </span>{' '} */}
            shipping production ERP & logistics platforms.
          </h1>

          {/* Underline wave SVG accent */}
          <div className="flex justify-center mb-6">
            <svg width="220" height="14" viewBox="0 0 220 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11.5C40 3.5 110 3.5 218 11.5" stroke="#1f2328" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="text-base sm:text-lg text-[#59636e] max-w-2xl mx-auto leading-relaxed font-light">
            Experienced with Angular, Next.js, Node.js/TypeScript, and MongoDB. Reduced manual tracking overhead by <strong className="text-black font-semibold">40%</strong> and improved query response times by <strong className="text-black font-semibold">25%</strong> on AWS EC2/Nginx. Solved 180+ problems on LeetCode.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => scrollTo('#work')}
              className="btn-tactile h-11 px-6 rounded-lg bg-[#1f2328] text-white hover:bg-black font-mono text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-2"
            >
              <span>Explore Work</span>
              <ArrowDown size={14} />
            </button>

            <a
              href={myResume}
              download="Praveen_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <button className="btn-tactile h-11 px-6 rounded-lg bg-white border border-[#e5e5e5] hover:bg-[#f5f5f5] text-[#1f2328] font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                <Download size={14} className="text-[#0969da]" />
                <span>Resume (PDF)</span>
              </button>
            </a>

            <button
              onClick={onOpenCommandPalette}
              className="btn-tactile h-11 px-4 rounded-lg bg-[#f6f6f6] border border-[#e5e5e5] hover:bg-[#ededed] text-[#59636e] font-mono text-xs flex items-center gap-1.5"
              title="Open Command Palette (⌘K)"
            >
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#d0d0d0] text-[10px] text-black">⌘K</kbd>
              <span>Commands</span>
            </button>
          </div>
        </div>

        {/* eemonroy-style 4 Feature Cards Rising in Hero */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {previewCards.map((card) => (
            <div
              key={card.id}
              onClick={() => scrollTo(card.link)}
              className="hero-preview-card bg-white border border-[#e5e5e5] hover:border-[#1f2328] rounded-xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${card.chipColor}`}>
                    {card.tag}
                  </span>
                  <ArrowUpRight size={15} className="text-[#59636e]" />
                </div>
                <div className="text-[10px] font-mono text-[#59636e] uppercase tracking-wider mb-1">
                  {card.category}
                </div>
                <h3 className="font-semibold text-base text-[#1f2328] mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-[#59636e] leading-relaxed font-light mb-4">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f0f0f0] text-[11px] font-mono font-medium text-[#0969da] flex items-center gap-1">
                <CheckCircle2 size={12} className="text-[#1f883d]" />
                <span>{card.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
