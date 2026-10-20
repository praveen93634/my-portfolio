import React from 'react';
import { 
  Terminal, 
  Zap, 
  Layers, 
  Network, 
  GraduationCap, 
  MapPin, 
  Award,
  ArrowUpRight
} from 'lucide-react';

export const About: React.FC = () => {
  const corePillars = [
    {
      title: 'Full Stack & Distributed Systems',
      desc: 'Expertise across Angular, React, Next.js, and Node.js/TypeScript. Architecting modular services with clean separation of concerns.',
      tag: '01'
    },
    {
      title: 'Production Logistics & ERP SaaS',
      desc: 'Engineered Porter-scale logistics admin systems with live fleet tracking and ERP SaaS modules handling automated recurring billing and AMC.',
      tag: '02'
    },
    {
      title: 'High-Concurrency Real-Time Sockets',
      desc: 'Architected bidirectional real-time sockets with Socket.io for live order tracking, trip telemetry, and in-app messaging.',
      tag: '03'
    },
    {
      title: 'Algorithmic Rigor (180+ LeetCode)',
      desc: 'Deep command over Dynamic Programming, Binary Search, Trees, and OOP fundamentals. Continuous focus on optimal asymptotic complexity.',
      tag: '04'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090a0f] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">
            // 01. Overview
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            About & Engineering Focus
          </h2>
        </div>

        {/* Story Narrative */}
        <div className="space-y-5 text-neutral-300 leading-relaxed font-light text-base sm:text-lg mb-12">
          <p>
            I am a <strong className="text-white font-medium">Full Stack Developer & SDE-1 Candidate</strong> based in Chennai, Tamil Nadu, with hands-on experience building and shipping production-grade platforms across on-demand logistics and enterprise ERP SaaS.
          </p>
          <p>
            At <strong className="text-white font-medium">TIC Global Service</strong>, I am building a Porter-style on-demand logistics admin platform from scratch using Next.js and Tailwind CSS—handling real-time order lifecycle tracking, driver document-verification onboarding, and zone-based pricing calculation.
          </p>
          <p>
            Previously at <strong className="text-white font-medium">Upturn Technology</strong>, I delivered modular ERP SaaS modules using Angular, Node.js/TypeScript, and MongoDB. I built an Asset Management System with automated AMC and calibration tracking that slashed manual tracking effort by <strong className="text-emerald-400 font-medium">40%</strong>, and optimized database queries on AWS EC2/Nginx to elevate admin workflow efficiency by <strong className="text-cyan-400 font-medium">25%</strong>.
          </p>
          <p>
            With over <strong className="text-yellow-400 font-medium">180+ LeetCode problems solved</strong> across Dynamic Programming, Binary Search, Trees, and Graphs, I place heavy emphasis on clean algorithmic space-time trade-offs and robust, scalable system design.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-300">
              <MapPin size={13} className="text-cyan-400" />
              <span>Chennai, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-300">
              <GraduationCap size={13} className="text-indigo-400" />
              <span>B.Sc. Computer Science (2021 – 2024)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-300">
              <Award size={13} className="text-purple-400" />
              <span>Ambedkar Govt. Arts College</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {corePillars.map((p) => (
            <div
              key={p.title}
              className="p-5 rounded-2xl bg-[#0e1017] border border-white/[0.07] hover:border-white/15 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-neutral-500 font-medium">{p.tag}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
