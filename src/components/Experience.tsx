import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  Quote, 
  TrendingUp, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      id: 'tic',
      role: 'Associate Developer',
      company: 'TIC Global Service',
      location: 'Chennai, Tamil Nadu',
      period: 'Nov 2025 – Present',
      status: 'Current Role',
      tagColor: '#1f883d',
      summary: 'Building a Porter-style on-demand logistics admin platform from scratch using Next.js and Tailwind CSS.',
      achievements: [
        'Building a Porter-style on-demand logistics admin platform from scratch using Next.js and Tailwind CSS, spanning booking management, live fleet tracking, driver onboarding, and zone-based pricing configuration.',
        'Built a real-time order and booking dashboard with live trip-status tracking, enabling ops teams to monitor the full delivery lifecycle end-to-end.',
        'Implemented multi-role access control (Super Admin / Ops Team) with permission-scoped views and document-verification driver onboarding workflows.',
        'Collaborated in Agile sprints to plan, review, and ship features on schedule with cross-functional teams.'
      ],
      technologies: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Socket.io', 'REST APIs', 'Agile Sprints']
    },
    {
      id: 'upturn',
      role: 'Full Stack Developer',
      company: 'Upturn Technology',
      location: 'Chennai, Tamil Nadu',
      period: 'May 2024 – May 2025',
      status: 'Completed (1 Year)',
      tagColor: '#0969da',
      summary: 'Delivered modular ERP SaaS modules using modular, scalable architecture with clear separation of concerns (Angular, Node.js/TypeScript, Express.js, MongoDB).',
      achievements: [
        'Developed and delivered ERP SaaS modules using modular, scalable architecture with clear separation of concerns (Angular, Node.js/TypeScript, Express.js, MongoDB), improving long-term maintainability.',
        'Built an Asset Management System with AMC and calibration tracking, reducing manual tracking effort by 40% and improving preventive maintenance scheduling.',
        'Designed Hostel Management System modules covering reporting, recurring billing, complaint ticketing, and admin content management.',
        'Engineered role-based access control (RBAC) and secured REST APIs with JWT authentication across multiple platform modules.',
        'Optimized MongoDB query performance and API response times on a production system deployed on AWS EC2/Nginx, improving admin workflow efficiency by 25%.',
        'Implemented real-time in-app chat using Socket.io, streamlining team communication and accountability.'
      ],
      technologies: ['Angular', 'Node.js (TypeScript)', 'Express.js', 'MongoDB', 'Redis', 'AWS EC2', 'Nginx', 'Socket.io', 'JWT']
    }
  ];

  // eemonroy-style colorful pastel testimonial & metric cards
  const impactCards = [
    {
      author: 'Asset AMC & Calibration Engine',
      role: 'Upturn Technology Production Metric',
      bg: '#c2ffdd', // mint
      quote: 'Engineered an automated preventive maintenance and calibration tracking system that eliminated manual spreadsheets, reducing operational tracking overhead by 40% and preventing downtime.',
      tag: '-40% Manual Effort'
    },
    {
      author: 'AWS EC2 & MongoDB Query Optimization',
      role: 'Production Architecture Metric',
      bg: '#fff1a4', // light yellow
      quote: 'Refactored backend MongoDB aggregation pipelines and integrated compound indexing on AWS EC2/Nginx instances, reducing API response latency and improving admin workflow efficiency by 25%.',
      tag: '+25% Query Speed'
    },
    {
      author: 'Porter-Style Logistics Admin Platform',
      role: 'TIC Global Service On-Demand Dispatch',
      bg: '#afe3ff', // sky blue
      quote: 'Built a zero-to-one logistics portal from scratch with Next.js and Tailwind CSS, unifying booking dispatch, driver document verification, and live trip tracking on a single pane of glass.',
      tag: 'Zero-to-One Delivery'
    },
    {
      author: 'Algorithmic Problem Solving Mastery',
      role: '180+ LeetCode DSA Solutions',
      bg: '#ffb4b5', // rose
      quote: 'Solved 180+ algorithmic challenges across Binary Search, Dynamic Programming, Recursion, Trees, and Graphs, demonstrating strong problem-solving fundamentals and rigorous asymptotic analysis.',
      tag: '180+ Problems Solved'
    }
  ];

  return (
    <section id="experience" className="border-b border-[#e5e5e5] bg-white">
      {/* Section Header */}
      <div className="border-b border-[#e5e5e5]">
        <div className="band-column py-12 flex items-center justify-center gap-4">
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2328] tracking-tight m-0">
            Production Experience
          </h2>
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
        </div>
      </div>

      {/* Experience Roles Timeline */}
      <div className="band-column divide-y divide-[#e5e5e5]">
        {experiences.map((exp) => (
          <div key={exp.id} className="p-6 sm:p-10 hover:bg-[#fafafa] transition-colors">
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#59636e] block mb-1">
                  {exp.company} • {exp.location}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2328]">
                  {exp.role}
                </h3>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-[#59636e]">
                <span className="px-2.5 py-1 rounded-md bg-[#f0f0f0] border border-[#e0e0e0] font-semibold text-[#1f2328]">
                  {exp.status}
                </span>
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#59636e] font-light leading-relaxed mb-6">
              {exp.summary}
            </p>

            {/* Bullet List */}
            <div className="space-y-2.5 mb-6 pl-2 border-l-2 border-[#1f2328]">
              {exp.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#334155] font-light leading-relaxed">
                  <span className="text-[#0969da] font-mono text-xs mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f0f0f0]">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#f5f5f5] text-[#1f2328] text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* eemonroy-style Pastel Engineering Impact Cards ("A few kind words / Impact") */}
      <div className="border-t border-[#e5e5e5] bg-[#fafafa]">
        <div className="band-column py-12 px-6 border-b border-[#e5e5e5]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-normal text-[#1f2328] tracking-tight">
              Engineering Impact & Key Milestones
            </h3>
            <p className="text-xs sm:text-sm text-[#59636e] mt-2 font-light">
              Verified operational contributions across production ERP and logistics software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactCards.map((card, i) => (
              <div
                key={i}
                style={{ backgroundColor: card.bg }}
                className="p-6 rounded-2xl border border-black/10 flex flex-col justify-between shadow-sm transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-black/10 text-black uppercase">
                      {card.tag}
                    </span>
                    <Quote size={18} className="text-black/30" />
                  </div>
                  <p className="text-xs sm:text-sm text-black/80 font-light leading-relaxed mb-6">
                    "{card.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-black/10">
                  <div className="font-bold text-xs text-black">
                    {card.author}
                  </div>
                  <div className="text-[10px] font-mono text-black/60 mt-0.5">
                    {card.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
