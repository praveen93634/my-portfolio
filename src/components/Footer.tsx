import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2, Download, ArrowUpRight } from 'lucide-react';
import myResume from '@/asset/Praveen_Kumar_Resume.pdf';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fff3f2] border-t border-[#e5e5e5] text-[#1f2328]">
      <div className="band-column py-16 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#ebd7d6]">
          {/* Left: eemonroy-style Folder / Stationery motif */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#1f2328] shadow-[5px_5px_0px_0px_#1f2328] max-w-sm mb-6 -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between text-xs font-mono text-[#59636e] pb-3 border-b border-[#e5e5e5] mb-4">
                <span>FOLDER_01 // PRAVEEN_KUMAR</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#1f883d]" />
              </div>
              <h4 className="font-bold text-xl text-[#1f2328] mb-1">
                Praveen Kumar
              </h4>
              <p className="text-xs text-[#59636e] font-light leading-relaxed mb-4">
                Full Stack Developer & SDE-1 Candidate shipping production ERP and logistics platforms.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={myResume}
                  download="Praveen_Kumar_Resume.pdf"
                  className="btn-tactile py-1.5 px-3 rounded-md bg-[#e7ff7d] text-black text-xs font-mono font-bold flex items-center gap-1.5"
                >
                  <Download size={12} />
                  <span>Download CV</span>
                </a>
                <a
                  href="mailto:praveenramesh5267@gmail.com"
                  className="btn-tactile py-1.5 px-3 rounded-md bg-[#afe3ff] text-black text-xs font-mono font-bold flex items-center gap-1.5"
                >
                  <Mail size={12} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Clean Navigation Links */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end justify-between space-y-3 font-mono text-sm">
            {[
              { label: 'Work & Systems', href: '#work' },
              { label: 'Experience History', href: '#experience' },
              { label: 'System Architecture Lab', href: '#architecture' },
              { label: 'Technical Stack', href: '#skills' },
              { label: 'Credentials & Certs', href: '#credentials' },
              { label: 'Contact Transmission', href: '#contact' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-[#1f2328] hover:text-[#0969da] hover:underline flex items-center gap-1 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={13} className="text-[#59636e]" />
              </button>
            ))}

            <button
              onClick={scrollToTop}
              className="btn-tactile mt-4 py-2 px-3 rounded-lg bg-white border border-[#1f2328] text-xs font-mono text-[#1f2328] flex items-center gap-1.5 shadow-sm"
            >
              <ArrowUp size={13} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#59636e]">
          <div>
            © {new Date().getFullYear()} Praveen Kumar. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/praveen93634" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/praveen-kumar-4ba09b291/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0969da]">
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/praveen93634" target="_blank" rel="noopener noreferrer" className="hover:text-[#b45309]">
              LeetCode
            </a>
            <a href="mailto:praveenramesh5267@gmail.com" className="hover:text-black">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
