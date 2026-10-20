
import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Terminal, 
  Cloud, 
  Check,
  LucideIcon
} from 'lucide-react';

interface SkillCategory {
  title: string;
  tag: string;
  icon: LucideIcon;
  description: string;
  skills: Array<{ name: string; level: string; note?: string }>;
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories: SkillCategory[] = [
    {
      title: 'Languages',
      tag: 'CORE_LANGUAGES',
      icon: Code2,
      description: 'Typed systems, object-oriented design, and asynchronous runtime execution.',
      skills: [
        { name: 'TypeScript', level: 'Production Daily', note: 'Strict typing across frontend & backend' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', note: 'Closures, Event Loop, Async/Await' },
        { name: 'Java', level: 'Proficient', note: 'OOP Principles, Collections, Algorithms' }
      ]
    },
    {
      title: 'Frontend Ecosystem',
      tag: 'CLIENT_APPS',
      icon: Layers,
      description: 'Single-page applications, responsive interfaces, and state synchronization.',
      skills: [
        { name: 'Angular', level: 'Production', note: 'RxJS, Services, Routing, Directives' },
        { name: 'React.js', level: 'Advanced', note: 'Hooks, Context, Modern Patterns' },
        { name: 'Next.js 14', level: 'Production', note: 'Admin portals, Server Actions, SSR' },
        { name: 'Tailwind CSS', level: 'Expert', note: 'Rapid responsive utility styling' },
        { name: 'HTML5 & CSS3', level: 'Core', note: 'Semantic accessibility & layouts' }
      ]
    },
    {
      title: 'Backend & APIs',
      tag: 'SERVER_RUNTIME',
      icon: Server,
      description: 'High-throughput microservices, REST endpoints, and caching strategies.',
      skills: [
        { name: 'Node.js (TypeScript)', level: 'Production Core', note: 'Event-driven asynchronous backends' },
        { name: 'Express.js', level: 'Advanced', note: 'Middleware, Routing, Error handlers' },
        { name: 'REST API Development', level: 'Expert', note: 'RESTful architecture, OpenAPI, JWT' },
        { name: 'Redis', level: 'Production', note: 'In-memory caching & session stores' },
        { name: 'Socket.io', level: 'Production', note: 'Bidirectional sub-second real-time streams' }
      ]
    },
    {
      title: 'Databases & Storage',
      tag: 'PERSISTENCE',
      icon: Database,
      description: 'Document schemas, aggregation pipelines, and high-performance querying.',
      skills: [
        { name: 'MongoDB', level: 'Production Core', note: 'Compound indexes, Aggregations, Performance' },
        { name: 'Firebase', level: 'Production', note: 'Google Auth, Cloud Firestore, Session security' }
      ]
    },
    {
      title: 'Core Computer Science',
      tag: 'FOUNDATIONS',
      icon: Terminal,
      description: 'Algorithmic efficiency, time/space complexity, and clean system design.',
      skills: [
        { name: 'Data Structures & Algorithms', level: '180+ LeetCode', note: 'Binary Search, DP, Trees, Graphs' },
        { name: 'System Design Fundamentals', level: 'Proficient', note: 'Scalability, Load Balancing, Caching' },
        { name: 'Object-Oriented Programming (OOP)', level: 'Expert', note: 'Inheritance, Polymorphism, Abstraction' },
        { name: 'Design Patterns', level: 'Proficient', note: 'Factory, Singleton, Observer, Strategy' }
      ]
    },
    {
      title: 'Tools, DevOps & Cloud',
      tag: 'INFRASTRUCTURE',
      icon: Cloud,
      description: 'Production cloud deployments, reverse proxies, and collaboration workflows.',
      skills: [
        { name: 'AWS (EC2)', level: 'Production', note: 'VM instances, Security groups, SSH' },
        { name: 'Linux / Ubuntu', level: 'Advanced', note: 'Bash scripting, Daemons, Cron' },
        { name: 'Nginx', level: 'Production', note: 'Reverse proxy, SSL termination, Load routing' },
        { name: 'Git & GitHub / Bitbucket', level: 'Expert', note: 'Branching, PR reviews, CI integration' },
        { name: 'Postman', level: 'Expert', note: 'API testing, Mock servers, Automations' }
      ]
    }
  ];

  const visibleCategories = selectedCategory === 'ALL'
    ? categories
    : categories.filter(c => c.tag === selectedCategory);

  return (
    <section id="skills" className="border-b border-[#e5e5e5] bg-white">
      {/* Section Header */}
      <div className="border-b border-[#e5e5e5]">
        <div className="band-column py-12 flex items-center justify-center gap-4">
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2328] tracking-tight m-0">
            Skills & Competencies
          </h2>
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="border-b border-[#e5e5e5] bg-[#fafafa]">
        <div className="band-column flex flex-wrap items-center justify-center gap-1.5 py-3 px-4">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`btn-tactile px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors ${
              selectedCategory === 'ALL'
                ? 'bg-white text-black font-semibold border border-[#d0d0d0] shadow-sm'
                : 'text-[#59636e] hover:text-[#1f2328] hover:bg-[#eaeaea]'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.tag}
              onClick={() => setSelectedCategory(cat.tag)}
              className={`btn-tactile px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                selectedCategory === cat.tag
                  ? 'bg-white text-black font-semibold border border-[#d0d0d0] shadow-sm'
                  : 'text-[#59636e] hover:text-[#1f2328] hover:bg-[#eaeaea]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="band-column p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-[#e5e5e5] bg-white hover:border-[#1f2328] transition-colors flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f6f6f6] border border-[#e5e5e5] flex items-center justify-center text-[#1f2328]">
                    <category.icon size={20} />
                  </div>
                  <span className="font-mono text-[10px] text-[#59636e] uppercase tracking-wider">
                    {category.tag}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-[#1f2328] mb-1">
                  {category.title}
                </h3>

                <p className="text-xs text-[#59636e] font-light leading-relaxed mb-5">
                  {category.description}
                </p>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-[#0f172a]">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-[#0969da] font-bold">
                          {skill.level}
                        </span>
                      </div>
                      {skill.note && (
                        <div className="text-[10px] font-mono text-[#64748b] mt-0.5">
                          {skill.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f0f0f0] flex items-center justify-between text-[11px] font-mono text-[#59636e]">
                <span>Status</span>
                <span className="text-[#166534] font-bold flex items-center gap-1">
                  <Check size={12} />
                  <span>Production Tested</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
