import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code2, 
  Download, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  FileText,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import myResume from '@/asset/Praveen_Kumar_Resume.pdf';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Live Chennai clock (IST GMT+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast.success(`${label} copied to clipboard (${text})`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please enter your name, email, and message.');
      return;
    }

    const mailSubject = encodeURIComponent(subject || `SDE-1 Opportunity / Engineering Inquiry from ${name}`);
    const mailBody = encodeURIComponent(
      `Hi Praveen,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nBest regards,\n${name}`
    );

    window.location.href = `mailto:praveenramesh5267@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    toast.success('Email draft prepared in your email client.');
  };

  return (
    <section id="contact" className="border-b border-[#e5e5e5] bg-[#fbfbfa]">
      {/* Section Header */}
      <div className="border-b border-[#e5e5e5] bg-white">
        <div className="band-column py-12 flex items-center justify-center gap-4">
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2328] tracking-tight m-0">
            Let’s Connect & Build
          </h2>
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
        </div>
      </div>

      <div className="band-column p-6 sm:p-10">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct Info & Availability Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Status Card */}
            <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#f0f0f0]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#1f883d] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#1f883d] uppercase">
                    Available For SDE-1
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-[#59636e]">
                  <Clock size={12} className="text-[#0969da]" />
                  <span>{currentTime || 'IST (GMT+5:30)'}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#59636e] leading-relaxed font-light">
                Ready to contribute to product-driven engineering teams, building high-concurrency microservices, real-time distributed platforms, and scalable frontends.
              </p>

              <div>
                <a
                  href={myResume}
                  download="Praveen_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="btn-tactile w-full py-2.5 px-4 rounded-lg bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] text-xs font-mono font-semibold text-[#0f172a] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText size={14} className="text-[#0969da]" />
                      <span>Download Praveen_Kumar_Resume.pdf</span>
                    </span>
                    <Download size={13} className="text-[#64748b]" />
                  </button>
                </a>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="bg-white p-5 rounded-xl border border-[#e5e5e5] shadow-sm space-y-2">
              <div className="text-[10px] font-mono font-bold text-[#59636e] uppercase tracking-wider mb-2">
                Direct Channels
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa] border border-[#f0f0f0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#e7ff7d] text-black flex items-center justify-center">
                    <Mail size={13} />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-[#59636e]">EMAIL</div>
                    <a
                      href="mailto:praveenramesh5267@gmail.com"
                      className="text-xs font-semibold text-[#1f2328] hover:text-[#0969da]"
                    >
                      praveenramesh5267@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('praveenramesh5267@gmail.com', 'Email')}
                  className="btn-tactile p-1.5 rounded-md hover:bg-white text-[#59636e] border border-transparent hover:border-[#e5e5e5]"
                  title="Copy Email"
                >
                  {copiedField === 'Email' ? <Check size={13} className="text-[#1f883d]" /> : <Copy size={13} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa] border border-[#f0f0f0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#afe3ff] text-black flex items-center justify-center">
                    <Phone size={13} />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-[#59636e]">PHONE</div>
                    <a
                      href="tel:+917550172090"
                      className="text-xs font-semibold text-[#1f2328] hover:text-[#0969da]"
                    >
                      +91 7550172090
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+917550172090', 'Phone')}
                  className="btn-tactile p-1.5 rounded-md hover:bg-white text-[#59636e] border border-transparent hover:border-[#e5e5e5]"
                  title="Copy Phone"
                >
                  {copiedField === 'Phone' ? <Check size={13} className="text-[#1f883d]" /> : <Copy size={13} />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#fafafa] border border-[#f0f0f0]">
                <div className="w-7 h-7 rounded-md bg-[#fee593] text-black flex items-center justify-center">
                  <MapPin size={13} />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-[#59636e]">LOCATION</div>
                  <div className="text-xs font-semibold text-[#1f2328]">
                    Chennai, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://github.com/praveen93634"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile p-3 rounded-lg bg-white border border-[#e5e5e5] hover:border-[#1f2328] flex flex-col items-center justify-center gap-1 text-center shadow-sm"
              >
                <Github size={17} className="text-[#1f2328]" />
                <span className="font-mono text-[11px] text-[#59636e]">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/praveen-kumar-4ba09b291/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile p-3 rounded-lg bg-white border border-[#e5e5e5] hover:border-[#1f2328] flex flex-col items-center justify-center gap-1 text-center shadow-sm"
              >
                <Linkedin size={17} className="text-[#0969da]" />
                <span className="font-mono text-[11px] text-[#59636e]">LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/praveen93634"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile p-3 rounded-lg bg-white border border-[#e5e5e5] hover:border-[#1f2328] flex flex-col items-center justify-center gap-1 text-center shadow-sm"
              >
                <Code2 size={17} className="text-[#b45309]" />
                <span className="font-mono text-[11px] text-[#59636e]">LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-xl border border-[#e5e5e5] shadow-sm">
            <div className="mb-5">
              <h3 className="font-bold text-xl text-[#1f2328] mb-1">
                Send an Inquiry
              </h3>
              <p className="font-mono text-xs text-[#59636e]">
                Direct transmission to praveenramesh5267@gmail.com
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-mono text-[#59636e] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full bg-[#fafafa] border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#1f2328] focus:outline-none focus:border-[#1f2328]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#59636e] uppercase mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-[#fafafa] border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#1f2328] focus:outline-none focus:border-[#1f2328]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#59636e] uppercase mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. SDE-1 Engineering Role / Interview"
                  className="w-full bg-[#fafafa] border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#1f2328] focus:outline-none focus:border-[#1f2328]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#59636e] uppercase mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your engineering team, tech stack, or requirements..."
                  className="w-full bg-[#fafafa] border border-[#e2e8f0] rounded-lg p-3.5 text-xs sm:text-sm text-[#1f2328] focus:outline-none focus:border-[#1f2328] resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-tactile w-full py-3 px-5 rounded-lg bg-[#1f2328] text-white hover:bg-black font-mono text-xs font-semibold shadow-sm flex items-center justify-center gap-2"
              >
                <Send size={14} />
                <span>Transmit Message to Praveen</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
