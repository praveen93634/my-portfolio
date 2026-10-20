import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Truck, 
  Building2, 
  MessageSquare, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Send,
  Zap,
  Server,
  ShieldCheck,
  Database
} from 'lucide-react';
import myResume from '@/asset/Praveen_Kumar_Resume.pdf';

type ArchitectureTab = 'logistics' | 'erp' | 'loopin' | 'cli';

export const ArchitectureTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ArchitectureTab>('logistics');

  // Interactive Logistics Simulation State
  const [orderStage, setOrderStage] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // CLI State
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<Array<{ type: 'in' | 'out'; text: string }>>([
    { type: 'out', text: 'Praveen Kumar Architecture Shell [v2.4.0]' },
    { type: 'out', text: 'Type "help" to view available system commands or click tabs above.' }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === 'cli') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commandHistory, activeTab]);

  const runLogisticsSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setOrderStage(1);

    const stages = [1, 2, 3, 4];
    stages.forEach((stage, i) => {
      setTimeout(() => {
        setOrderStage(stage);
        if (stage === 4) {
          setIsSimulating(false);
        }
      }, (i + 1) * 1000);
    });
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...commandHistory, { type: 'in' as const, text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'out',
          text: 'Available Commands:\n  • skills      - View comprehensive technical stack\n  • experience  - View TIC Global & Upturn Technology engineering roles\n  • projects    - View Loopin & logistics platform architecture\n  • metrics     - View production impact metrics & LeetCode (180+)\n  • resume      - Download official Praveen Kumar Resume PDF\n  • contact     - Display contact channels (Phone, Email, LinkedIn, GitHub)\n  • clear       - Clear terminal window'
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'out',
          text: 'Languages: Java, JavaScript (ES6+), TypeScript\nFrontend: Angular, React.js, Next.js, Tailwind CSS, HTML5, CSS3\nBackend: Node.js (TypeScript), Express.js, REST APIs, Redis, Socket.io\nDatabases: MongoDB, Firebase\nTools & Infra: AWS (EC2), Linux, Nginx, Git, Postman, Bitbucket\nCore: DSA (180+ LeetCode), OOP, System Design Fundamentals'
        });
        break;
      case 'experience':
        newHistory.push({
          type: 'out',
          text: '1. Associate Developer @ TIC Global Service (Nov 2025 - Present)\n   Building Porter-style on-demand logistics platform using Next.js & Tailwind.\n\n2. Full Stack Developer @ Upturn Technology (May 2024 - May 2025)\n   Modular ERP SaaS with AMC tracking (-40% effort) & query optimization (+25% speed).'
        });
        break;
      case 'metrics':
        newHistory.push({
          type: 'out',
          text: '• 180+ LeetCode DSA problems solved with optimal time/space complexity\n• 40% reduction in manual tracking via automated AMC & calibration scheduling\n• 25% improvement in admin workflow & query latency on AWS EC2/Nginx'
        });
        break;
      case 'resume':
        newHistory.push({
          type: 'out',
          text: 'Initiating download of "Praveen_Kumar_Resume.pdf"...'
        });
        const link = document.createElement('a');
        link.href = myResume;
        link.download = 'Praveen_Kumar_Resume.pdf';
        link.click();
        break;
      case 'contact':
        newHistory.push({
          type: 'out',
          text: 'Name: Praveen Kumar\nPhone: +91 7550172090\nEmail: praveenramesh5267@gmail.com\nLinkedIn: https://www.linkedin.com/in/praveen-kumar-4ba09b291/\nGitHub: https://github.com/praveen93634\nLocation: Chennai, Tamil Nadu, India'
        });
        break;
      case 'clear':
        setCommandHistory([]);
        setInputVal('');
        return;
      default:
        newHistory.push({
          type: 'out',
          text: `Command not recognized: "${cmd}". Type "help" for a list of system commands.`
        });
        break;
    }

    setCommandHistory(newHistory);
    setInputVal('');
  };

  return (
    <section id="architecture" className="border-b border-[#e5e5e5] bg-white">
      {/* Section Heading */}
      <div className="border-b border-[#e5e5e5]">
        <div className="band-column py-12 flex items-center justify-center gap-4">
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2328] tracking-tight m-0">
            System Architecture & Lab
          </h2>
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#e5e5e5] bg-[#fafafa]">
        <div className="band-column flex flex-wrap items-center justify-center gap-1.5 py-3 px-4">
          <button
            onClick={() => setActiveTab('logistics')}
            className={`btn-tactile flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-colors ${
              activeTab === 'logistics'
                ? 'bg-white text-black font-semibold border border-[#d0d0d0] shadow-sm'
                : 'text-[#59636e] hover:text-[#1f2328] hover:bg-[#eaeaea]'
            }`}
          >
            <Truck size={14} />
            <span>Logistics Telemetry</span>
          </button>

          <button
            onClick={() => setActiveTab('erp')}
            className={`btn-tactile flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-colors ${
              activeTab === 'erp'
                ? 'bg-white text-black font-semibold border border-[#d0d0d0] shadow-sm'
                : 'text-[#59636e] hover:text-[#1f2328] hover:bg-[#eaeaea]'
            }`}
          >
            <Building2 size={14} />
            <span>ERP AMC Scheduler</span>
          </button>

          <button
            onClick={() => setActiveTab('loopin')}
            className={`btn-tactile flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-colors ${
              activeTab === 'loopin'
                ? 'bg-white text-black font-semibold border border-[#d0d0d0] shadow-sm'
                : 'text-[#59636e] hover:text-[#1f2328] hover:bg-[#eaeaea]'
            }`}
          >
            <MessageSquare size={14} />
            <span>Loopin Sockets</span>
          </button>

          <button
            onClick={() => setActiveTab('cli')}
            className={`btn-tactile flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-colors ${
              activeTab === 'cli'
                ? 'bg-white text-black font-semibold border border-[#d0d0d0] shadow-sm'
                : 'text-[#59636e] hover:text-[#1f2328] hover:bg-[#eaeaea]'
            }`}
          >
            <TerminalIcon size={14} />
            <span>Interactive CLI</span>
          </button>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="band-column p-6 sm:p-10">
        {activeTab === 'logistics' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e5e5e5]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0969da] block mb-1">
                  TIC GLOBAL SERVICE // ON-DEMAND LOGISTICS ADMIN PLATFORM
                </span>
                <h3 className="text-2xl font-bold text-[#1f2328]">
                  Porter-Style On-Demand Dispatch & Live Fleet Telemetry
                </h3>
              </div>
              <button
                onClick={runLogisticsSimulation}
                disabled={isSimulating}
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1f2328] hover:bg-black text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-sm disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <RotateCcw size={14} className="animate-spin text-white" />
                    <span>Simulating Lifecycle...</span>
                  </>
                ) : (
                  <>
                    <Play size={14} className="text-[#afe3ff]" />
                    <span>Simulate Order Dispatch</span>
                  </>
                )}
              </button>
            </div>

            {/* Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-4 rounded-xl border transition-all ${
                orderStage >= 1 ? 'bg-[#f0fdf4] border-[#86efac]' : 'bg-[#f8fafc] border-[#e2e8f0]'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono text-[#64748b] mb-1">
                  <span>STAGE 01</span>
                  {orderStage >= 1 && <CheckCircle2 size={14} className="text-[#16a34a]" />}
                </div>
                <div className="font-bold text-[#0f172a] text-sm mb-1">Booking Ingestion</div>
                <div className="text-xs text-[#64748b] font-light">
                  Next.js route validates payload & calculates zone pricing.
                </div>
                <div className="mt-2 text-[10px] font-mono font-bold text-[#166534]">
                  {orderStage >= 1 ? 'PAYLOAD_VERIFIED' : 'WAITING'}
                </div>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${
                orderStage >= 2 ? 'bg-[#f0fdf4] border-[#86efac]' : 'bg-[#f8fafc] border-[#e2e8f0]'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono text-[#64748b] mb-1">
                  <span>STAGE 02</span>
                  {orderStage >= 2 && <CheckCircle2 size={14} className="text-[#16a34a]" />}
                </div>
                <div className="font-bold text-[#0f172a] text-sm mb-1">Driver Match & KYC</div>
                <div className="text-xs text-[#64748b] font-light">
                  Document-verification workflow verifies nearby active driver.
                </div>
                <div className="mt-2 text-[10px] font-mono font-bold text-[#166534]">
                  {orderStage >= 2 ? 'DRIVER_ASSIGNED_842' : 'QUEUED'}
                </div>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${
                orderStage >= 3 ? 'bg-[#f0fdf4] border-[#86efac]' : 'bg-[#f8fafc] border-[#e2e8f0]'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono text-[#64748b] mb-1">
                  <span>STAGE 03</span>
                  {orderStage >= 3 && <CheckCircle2 size={14} className="text-[#16a34a]" />}
                </div>
                <div className="font-bold text-[#0f172a] text-sm mb-1">Live GPS Telemetry</div>
                <div className="text-xs text-[#64748b] font-light">
                  Socket.io broadcasts sub-second latitude/longitude coordinates to Ops Team.
                </div>
                <div className="mt-2 text-[10px] font-mono font-bold text-[#166534]">
                  {orderStage >= 3 ? 'GPS_STREAMING' : 'IDLE'}
                </div>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${
                orderStage >= 4 ? 'bg-[#f0fdf4] border-[#86efac]' : 'bg-[#f8fafc] border-[#e2e8f0]'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono text-[#64748b] mb-1">
                  <span>STAGE 04</span>
                  {orderStage >= 4 && <CheckCircle2 size={14} className="text-[#16a34a]" />}
                </div>
                <div className="font-bold text-[#0f172a] text-sm mb-1">Delivery Confirmed</div>
                <div className="text-xs text-[#64748b] font-light">
                  Super Admin & Ops dashboard syncs trip completion and logs audit trail.
                </div>
                <div className="mt-2 text-[10px] font-mono font-bold text-[#166534]">
                  {orderStage >= 4 ? 'TRIP_COMPLETED' : 'AWAITING'}
                </div>
              </div>
            </div>

            {/* Spec strip */}
            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#475569]">
              <span>Stack: Next.js 14, Tailwind CSS, TypeScript, Node.js, Socket.io</span>
              <span className="text-[#0969da] font-bold">RBAC: Super Admin vs Ops Team</span>
            </div>
          </div>
        )}

        {activeTab === 'erp' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e5e5e5]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b83061] block mb-1">
                  UPTURN TECHNOLOGY // ENTERPRISE ERP SAAS SUITE
                </span>
                <h3 className="text-2xl font-bold text-[#1f2328]">
                  Modular Architecture, AMC Automation & Query Optimization
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-[#f0f0f0] border border-[#e0e0e0] font-mono text-xs text-[#1f2328] font-bold">
                1 Year Production Run
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="text-xs font-mono text-[#0969da] font-bold mb-2">MODULE 01</div>
                <h4 className="font-bold text-base text-[#1f2328] mb-2">Asset AMC & Calibration</h4>
                <p className="text-xs text-[#59636e] leading-relaxed font-light">
                  Automated preventive maintenance schedules, AMC contract lifecycles, and calibration alerts. Slashed manual tracking effort by <strong className="text-black font-semibold">40%</strong>.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="text-xs font-mono text-[#1f883d] font-bold mb-2">PERFORMANCE</div>
                <h4 className="font-bold text-base text-[#1f2328] mb-2">AWS EC2 / Nginx Optimizations</h4>
                <p className="text-xs text-[#59636e] leading-relaxed font-light">
                  Compound MongoDB indexing and query-level refactoring on production AWS EC2/Nginx instances, boosting admin workflow efficiency by <strong className="text-black font-semibold">25%</strong>.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="text-xs font-mono text-[#b83061] font-bold mb-2">SECURITY</div>
                <h4 className="font-bold text-base text-[#1f2328] mb-2">RBAC & JWT REST APIs</h4>
                <p className="text-xs text-[#59636e] leading-relaxed font-light">
                  Configured strict multi-tiered role-based access control with stateless JWT authentication, password hashing, and granular route guards across all platform modules.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#475569]">
              <span>Stack: Angular, Node.js (TypeScript), Express.js, MongoDB, Redis, AWS EC2, Nginx</span>
              <span className="text-[#1f883d] font-bold">PRODUCTION VERIFIED</span>
            </div>
          </div>
        )}

        {activeTab === 'loopin' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e5e5e5]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#02768b] block mb-1">
                  LOOPIN // REAL-TIME SOCIAL PLATFORM
                </span>
                <h3 className="text-2xl font-bold text-[#1f2328]">
                  Bidirectional WebSocket Pipeline & Firebase Auth Architecture
                </h3>
              </div>
              <span className="px-3 py-1 rounded bg-[#dcfce7] border border-[#86efac] font-mono text-xs text-[#166534] font-bold">
                Sub-50ms Propagation
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
                <div className="font-bold text-sm text-[#0f172a] flex items-center gap-2">
                  <Server size={16} className="text-[#0969da]" />
                  <span>Bidirectional Messaging Mechanics</span>
                </div>
                <p className="text-xs text-[#59636e] leading-relaxed font-light">
                  Clients establish persistent WebSocket connections through Socket.io rooms keyed by user session IDs. Incoming chat frames are acknowledged instantaneously, dispatched to recipients, and asynchronously persisted to MongoDB collections.
                </p>
                <div className="text-xs font-mono text-[#0969da] pt-2 border-t border-[#e2e8f0]">
                  Latency: &lt; 35ms on local frames • Connection Pool Handled
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
                <div className="font-bold text-sm text-[#0f172a] flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#16a34a]" />
                  <span>Firebase & JWT Authentication</span>
                </div>
                <p className="text-xs text-[#59636e] leading-relaxed font-light">
                  Integrated Firebase OAuth for seamless Google Sign-In, coupled with backend-issued JSON Web Tokens to enforce verified API boundaries and role permissions.
                </p>
                <div className="text-xs font-mono text-[#16a34a] pt-2 border-t border-[#e2e8f0]">
                  Security: Cryptographic JWT bearer tokens with refresh rotation
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#475569]">
              <span>Stack: Angular, Node.js (TypeScript), Express.js, MongoDB, Firebase, Socket.io</span>
              <span className="text-[#02768b] font-bold">FULL STACK REAL-TIME</span>
            </div>
          </div>
        )}

        {activeTab === 'cli' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                <span className="ml-2 font-mono text-xs text-[#59636e]">praveen@sde1-workstation: ~</span>
              </div>
              <span className="font-mono text-xs text-[#59636e]">
                Type "help", "metrics", "resume", "clear"
              </span>
            </div>

            {/* Terminal Screen */}
            <div className="bg-[#1f2328] text-white rounded-xl p-4 font-mono text-xs sm:text-sm min-h-[220px] max-h-[300px] overflow-y-auto space-y-2">
              {commandHistory.map((h, i) => (
                <div key={i} className="whitespace-pre-wrap leading-relaxed">
                  {h.type === 'in' ? (
                    <span className="text-[#afe3ff] font-bold">{h.text}</span>
                  ) : (
                    <span className="text-neutral-200">{h.text}</span>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
              <span className="font-mono text-[#1f2328] font-bold text-sm">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type 'help', 'skills', 'experience', 'resume'..."
                className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-3.5 py-2 text-xs sm:text-sm font-mono text-[#0f172a] focus:outline-none focus:border-[#1f2328]"
              />
              <button
                type="submit"
                className="btn-tactile px-4 py-2 rounded-lg bg-[#1f2328] text-white hover:bg-black font-mono text-xs font-semibold"
              >
                Execute
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArchitectureTerminal;
