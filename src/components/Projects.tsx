import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Truck, 
  Building2, 
  MessageSquare, 
  Code2, 
  Check, 
  ShieldCheck, 
  Zap, 
  Database 
} from 'lucide-react';

interface Project {
  title: string;
  roleTag: string;
  tagColor: string;
  year: string;
  company: string;
  category: string;
  description: string;
  bullets: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewGraphic: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'LOGISTICS' | 'ERP' | 'REAL_TIME' | 'ALGORITHMS'>('ALL');

  const projects: Project[] = [
    {
      title: 'Porter-Style Logistics Admin Platform',
      roleTag: 'Shipped',
      tagColor: '#1f883d', // eemonroy green
      year: '2025 – Present',
      company: 'TIC Global Service',
      category: 'LOGISTICS',
      description: 'Building an on-demand logistics dispatch command platform from scratch with Next.js, live GPS fleet tracking, and zone pricing.',
      bullets: [
        'Built real-time order and booking dashboard with live trip-status tracking end-to-end.',
        'Multi-role access control (Super Admin vs. Ops Team) with document-verification driver onboarding.',
        'Zone-based pricing configuration matrix with dynamic tariff calculation.',
        'Collaborated in Agile sprints to ship features with cross-functional teams.'
      ],
      stack: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Socket.io', 'REST APIs'],
      githubUrl: 'https://github.com/praveen93634',
      previewGraphic: (
        <div className="w-full h-full bg-[#f8fafc] flex flex-col p-4 sm:p-6 justify-between border-b border-[#e5e5e5]">
          <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="font-mono text-xs text-[#64748b] ml-2">ops.ticglobal.logistics/dashboard</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#dcfce7] text-[#166534] font-bold">LIVE TELEMETRY</span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-4">
            <div className="bg-white p-3 rounded-lg border border-[#e2e8f0] shadow-sm">
              <div className="text-[10px] font-mono text-[#64748b]">ACTIVE FLEET</div>
              <div className="text-xl font-bold text-[#0f172a] mt-1">142 Drivers</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-[#e2e8f0] shadow-sm">
              <div className="text-[10px] font-mono text-[#64748b]">AVG DISPATCH</div>
              <div className="text-xl font-bold text-[#2563eb] mt-1">&lt; 45 Sec</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-[#e2e8f0] shadow-sm">
              <div className="text-[10px] font-mono text-[#64748b]">COMPLETION</div>
              <div className="text-xl font-bold text-[#16a34a] mt-1">99.4%</div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-[#e2e8f0] text-xs font-mono text-[#334155] flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-ping" />
              <span>Real-Time GPS Socket Stream Active</span>
            </span>
            <span className="text-[#64748b]">Lat 13.0827° N, 80.2707° E</span>
          </div>
        </div>
      )
    },
    {
      title: 'Modular Enterprise ERP SaaS Suite',
      roleTag: 'System Design',
      tagColor: '#b83061', // eemonroy rose
      year: '2024 – 2025',
      company: 'Upturn Technology',
      category: 'ERP',
      description: 'Delivered modular ERP SaaS modules with clear separation of concerns (Angular, Node.js/TypeScript, Express, MongoDB) on AWS EC2/Nginx.',
      bullets: [
        'Built Asset Management System with AMC and calibration tracking, slashing manual effort by 40%.',
        'Designed Hostel Management System modules covering recurring billing, reporting, and ticketing.',
        'Secured REST APIs with role-based access control (RBAC) and JWT authentication.',
        'Optimized MongoDB queries on AWS EC2/Nginx, elevating admin workflow efficiency by 25%.'
      ],
      stack: ['Angular', 'Node.js (TypeScript)', 'Express.js', 'MongoDB', 'AWS EC2', 'Nginx', 'Socket.io'],
      githubUrl: 'https://github.com/praveen93634',
      previewGraphic: (
        <div className="w-full h-full bg-[#fdfafb] flex flex-col p-4 sm:p-6 justify-between border-b border-[#e5e5e5]">
          <div className="flex items-center justify-between pb-3 border-b border-[#f1e2e6]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="font-mono text-xs text-[#885d68] ml-2">erp.upturntech.internal/amc-calibration</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ffe4e6] text-[#9f1239] font-bold">AWS OPTIMIZED</span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-4">
            <div className="bg-white p-3 rounded-lg border border-[#f1e2e6] shadow-sm">
              <div className="text-[10px] font-mono text-[#885d68]">MANUAL EFFORT</div>
              <div className="text-xl font-bold text-[#9f1239] mt-1">-40% Drop</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-[#f1e2e6] shadow-sm">
              <div className="text-[10px] font-mono text-[#885d68]">QUERY SPEED</div>
              <div className="text-xl font-bold text-[#16a34a] mt-1">+25% Boost</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-[#f1e2e6] shadow-sm">
              <div className="text-[10px] font-mono text-[#885d68]">SECURITY</div>
              <div className="text-xl font-bold text-[#475569] mt-1">RBAC / JWT</div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-[#f1e2e6] text-xs font-mono text-[#885d68] flex items-center justify-between">
            <span>AMC Preventive Maintenance Scheduler</span>
            <span className="text-[#16a34a] font-bold">Automated Calibration OK</span>
          </div>
        </div>
      )
    },
    {
      title: 'Loopin – Real-Time Social Platform',
      roleTag: 'Real-Time',
      tagColor: '#02768b', // eemonroy cyan
      year: '2024',
      company: 'Personal Architecture',
      category: 'REAL_TIME',
      description: 'Architected a full-stack real-time social platform enabling connection-based instant messaging between users with sub-50ms message latency.',
      bullets: [
        'Implemented bidirectional real-time chat using Socket.io for instant message delivery and live updates.',
        'Integrated Google Sign-In via Firebase with JWT session management for verified authentication.',
        'Designed scalable RESTful APIs and MongoDB schemas to support real-time interactions and user data.',
        'Configured room subscriptions with auto-reconnection and delivery receipt acknowledgments.'
      ],
      stack: ['Angular', 'Node.js (TypeScript)', 'Express.js', 'MongoDB', 'Firebase Auth', 'Socket.io'],
      githubUrl: 'https://github.com/praveen93634',
      previewGraphic: (
        <div className="w-full h-full bg-[#f0fdfa] flex flex-col p-4 sm:p-6 justify-between border-b border-[#e5e5e5]">
          <div className="flex items-center justify-between pb-3 border-b border-[#ccfbf1]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="font-mono text-xs text-[#0f766e] ml-2">loopin.app/chat/active-session</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ccfbf1] text-[#0f766e] font-bold">SUB-50MS</span>
          </div>

          <div className="space-y-2.5 my-4">
            <div className="bg-white p-2.5 rounded-lg border border-[#ccfbf1] text-xs flex justify-between items-center shadow-sm">
              <span className="font-semibold text-[#0f172a]">Client ➔ Node.js WebSocket Frame</span>
              <span className="font-mono text-[#0f766e] text-[11px] font-bold">&lt; 18ms</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-[#ccfbf1] text-xs flex justify-between items-center shadow-sm">
              <span className="font-semibold text-[#0f172a]">Firebase OAuth Token Exchange</span>
              <span className="font-mono text-[#0f766e] text-[11px] font-bold">JWT Verified</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-[#ccfbf1] text-xs flex justify-between items-center shadow-sm">
              <span className="font-semibold text-[#0f172a]">MongoDB Message Persistence</span>
              <span className="font-mono text-[#0f766e] text-[11px] font-bold">Indexed Write</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-[#ccfbf1] text-xs font-mono text-[#0f766e] flex items-center justify-between">
            <span>Socket.io Bidirectional Room Pipeline</span>
            <span className="text-[#0f766e] font-bold">Connected</span>
          </div>
        </div>
      )
    },
    {
      title: 'Algorithmic Problem Solving Engine',
      roleTag: 'DSA 180+',
      tagColor: '#b45309', // eemonroy amber
      year: 'Ongoing',
      company: 'LeetCode & Fundamentals',
      category: 'ALGORITHMS',
      description: 'Systematic mastery of core data structures and algorithms, focusing on clean production code, modular design patterns, and asymptotic efficiency.',
      bullets: [
        '180+ problems solved across Binary Search, Dynamic Programming, Recursion, Trees, and Graphs.',
        'Continuous practice on time and memory complexity trade-offs.',
        'Core algorithmic patterns: two-pointers, sliding window, memoization, tree traversal.',
        'Solid foundation for SDE-1 backend and scalable system engineering.'
      ],
      stack: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'LeetCode (180+)', 'System Design'],
      liveUrl: 'https://leetcode.com/u/praveen93634',
      previewGraphic: (
        <div className="w-full h-full bg-[#fffbeb] flex flex-col p-4 sm:p-6 justify-between border-b border-[#e5e5e5]">
          <div className="flex items-center justify-between pb-3 border-b border-[#fef3c7]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="font-mono text-xs text-[#92400e] ml-2">leetcode.com/u/praveen93634</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fef3c7] text-[#92400e] font-bold">180+ PROBLEMS</span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-4">
            <div className="bg-white p-3 rounded-lg border border-[#fef3c7] shadow-sm text-center">
              <div className="text-[10px] font-mono text-[#92400e]">BINARY SEARCH</div>
              <div className="text-lg font-bold text-[#b45309] mt-1">O(log N)</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-[#fef3c7] shadow-sm text-center">
              <div className="text-[10px] font-mono text-[#92400e]">DYNAMIC PROG</div>
              <div className="text-lg font-bold text-[#b45309] mt-1">Optimal</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-[#fef3c7] shadow-sm text-center">
              <div className="text-[10px] font-mono text-[#92400e]">TREES & GRAPH</div>
              <div className="text-lg font-bold text-[#b45309] mt-1">DFS / BFS</div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-[#fef3c7] text-xs font-mono text-[#92400e] flex items-center justify-between">
            <span>Verified LeetCode Profile</span>
            <span className="font-bold">Active Practice</span>
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="border-b border-[#e5e5e5] bg-white">
      {/* eemonroy-style centered section title */}
      <div className="border-b border-[#e5e5e5]">
        <div className="band-column py-12 flex items-center justify-center gap-4">
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2328] tracking-tight m-0">
            Featured Systems & Projects
          </h2>
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-[#e5e5e5] bg-[#fafafa]">
        <div className="band-column flex flex-wrap items-center justify-center gap-1 py-3 px-4">
          {[
            { id: 'ALL', label: 'All Systems' },
            { id: 'LOGISTICS', label: 'Logistics Admin' },
            { id: 'ERP', label: 'ERP SaaS' },
            { id: 'REAL_TIME', label: 'Real-Time Chat' },
            { id: 'ALGORITHMS', label: '180+ DSA' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`btn-tactile px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                filter === tab.id
                  ? 'bg-white text-black font-semibold border border-[#d0d0d0] shadow-sm'
                  : 'text-[#59636e] hover:text-[#1f2328] hover:bg-[#eaeaea]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Grid with 1px border rules (eemonroy home2-work__grid) */}
      <div className="band-column">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((p, idx) => (
            <div
              key={p.title}
              className={`flex flex-col justify-between border-b border-[#e5e5e5] ${
                idx % 2 === 0 ? 'md:border-r md:border-[#e5e5e5]' : ''
              } bg-white hover:bg-[#fafafa] transition-colors group`}
            >
              {/* Media Graphic Frame */}
              <div className="h-[280px] sm:h-[310px] w-full overflow-hidden">
                {p.previewGraphic}
              </div>

              {/* Content Description */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#59636e] mb-2">
                    <span>{p.company}</span>
                    <span>0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2328] mb-2 leading-snug group-hover:text-[#0969da] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59636e] leading-relaxed font-light mb-4">
                    {p.description}
                  </p>

                  <div className="space-y-1.5 mb-5 p-3 rounded-lg bg-[#f8f9fa] border border-[#e9ecef]">
                    {p.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#334155] font-light">
                        <span className="text-[#0969da] font-mono text-xs mt-0.5">❯</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#f0f0f0] text-[#1f2328] text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Caption Bar (eemonroy style) */}
                  <div className="pt-3 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-3">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#59636e] hover:text-black transition-colors"
                        >
                          <Github size={13} />
                          <span>Code</span>
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#b45309] hover:underline"
                        >
                          <ExternalLink size={13} />
                          <span>LeetCode</span>
                        </a>
                      )}
                    </div>

                    <p className="m-0 text-[#1f2328]">
                      <span style={{ color: p.tagColor }} className="font-bold">
                        {p.roleTag}
                      </span>{' '}
                      — {p.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
