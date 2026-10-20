import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Download, 
  Eye, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  Code, 
  Server, 
  Coffee,
  X,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import NamasteNodejs from '@/asset/certificate.jpg';
import javaProgramming from '@/asset/Praveen kumar_page-0001.jpg';
import javascript from '@/asset/GuviCertification - S7g11G3WO9Y229ET71 (1).png';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  topics: string[];
  description: string;
  image: string;
  downloadName: string;
  icon: LucideIcon;
}

export const EducationCertifications: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: 'Namaste Node.js',
      issuer: 'NamasteDev / Akshay Saini',
      year: '2025',
      topics: ['Event Loop & Libuv', 'Streams & Buffers', 'Express Internal Mechanics', 'MongoDB Sharding', 'JWT & Auth'],
      description: 'Comprehensive deep dive into Node.js runtime mechanics, thread pool management, clustering, asynchronous non-blocking I/O, and production backend architecture.',
      image: NamasteNodejs,
      downloadName: 'Namaste_Nodejs_Certificate_Praveen.jpg',
      icon: Server
    },
    {
      title: 'JavaScript Zero to Hero',
      issuer: 'GUVI Geek Networks / IIT Madras Research Park',
      year: '2024',
      topics: ['ES6+ Syntactic Sugar', 'Closures & Scope', 'Promises & Async/Await', 'DOM Manipulation', 'Event Delegation'],
      description: 'Rigorous engineering certification covering modern JavaScript paradigms, prototypes, higher-order functions, asynchronous queues, and browser execution environments.',
      image: javascript,
      downloadName: 'JavaScript_Zero_To_Hero_Certificate_Praveen.png',
      icon: Code
    },
    {
      title: 'Java Programming & OOP',
      issuer: 'Online Professional Course',
      year: '2023',
      topics: ['Object-Oriented Design', 'Inheritance & Polymorphism', 'Exception Handling', 'Collections Framework', 'Generics'],
      description: 'Foundational certification in core Java programming, object-oriented abstractions, design patterns, dynamic memory allocation, and data structure implementations.',
      image: javaProgramming,
      downloadName: 'Java_Programming_Certificate_Praveen.jpg',
      icon: Coffee
    }
  ];

  return (
    <section id="credentials" className="border-b border-[#e5e5e5] bg-white">
      {/* Section Header */}
      <div className="border-b border-[#e5e5e5]">
        <div className="band-column py-12 flex items-center justify-center gap-4">
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-[#1f2328] tracking-tight m-0">
            Education & Certifications
          </h2>
          <span className="text-xl sm:text-2xl text-[#b5d251]">✦</span>
        </div>
      </div>

      <div className="band-column p-6 sm:p-10 space-y-10">
        {/* Degree & Verified Milestones */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Degree Card */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-xl border border-[#e5e5e5] bg-white flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#afe3ff] text-[#003366] uppercase">
                  Formal Degree
                </span>
                <span className="font-mono text-xs text-[#59636e]">2021 – 2024</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1f2328] mb-1">
                B.Sc. in Computer Science
              </h3>

              <div className="flex items-center gap-2 text-xs font-mono text-[#59636e] mb-4">
                <span className="font-semibold text-black">Ambedkar Government Arts College</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#0969da]" />
                  <span>Chennai, Tamil Nadu</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#59636e] leading-relaxed font-light mb-6">
                Rigorous computer science curriculum covering Data Structures, Analysis of Algorithms, Operating Systems, Database Management Systems (DBMS), Computer Networks, and Object-Oriented Software Design.
              </p>
            </div>

            <div className="pt-4 border-t border-[#f0f0f0] flex flex-wrap gap-1.5">
              {['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'].map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1f2328] text-xs font-mono"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Milestones Card */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-xl border border-[#e5e5e5] bg-[#fafafa] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#59636e] uppercase tracking-wider block mb-3">
                Key Accomplishments
              </span>

              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-[#e5e5e5]">
                  <div className="font-bold text-base text-[#b45309]">180+ LeetCode DSA</div>
                  <div className="text-xs text-[#59636e] font-light mt-0.5">
                    Binary Search, Recursion, DP, Trees, Graphs.
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#e5e5e5]">
                  <div className="font-bold text-base text-[#1f883d]">-40% Effort Reduction</div>
                  <div className="text-xs text-[#59636e] font-light mt-0.5">
                    Asset AMC & preventive maintenance automation.
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#e5e5e5]">
                  <div className="font-bold text-base text-[#0969da]">+25% Admin Efficiency</div>
                  <div className="text-xs text-[#59636e] font-light mt-0.5">
                    MongoDB query & API latency optimization on AWS EC2/Nginx.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-lg text-[#1f2328]">
              Professional Certifications
            </h3>
            <span className="font-mono text-xs text-[#59636e]">
              Click to preview verified certificate
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-xl border border-[#e5e5e5] bg-white hover:border-[#1f2328] transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#0969da]">
                      {cert.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f0f0f0] text-[#1f2328]">
                      VERIFIED
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-[#1f2328] mb-1">
                    {cert.title}
                  </h4>

                  <div className="text-xs font-mono text-[#59636e] mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-[#59636e] leading-relaxed font-light mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.topics.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[10px] font-mono text-[#334155]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#f0f0f0] flex items-center gap-2">
                  <button
                    onClick={() => setActiveCertificate(cert)}
                    className="btn-tactile flex-1 py-1.5 px-3 rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5] text-xs font-mono font-medium text-[#1f2328] flex items-center justify-center gap-1.5"
                  >
                    <Eye size={13} className="text-[#0969da]" />
                    <span>Preview</span>
                  </button>

                  <a
                    href={cert.image}
                    download={cert.downloadName}
                    className="btn-tactile p-2 rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5] text-[#1f2328]"
                    title="Download certificate image"
                  >
                    <Download size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Certificate Modal */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-3xl w-full bg-white border border-[#e5e5e5] rounded-2xl p-6 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5] mb-4">
              <div>
                <h3 className="font-bold text-xl text-[#1f2328]">
                  {activeCertificate.title}
                </h3>
                <p className="font-mono text-xs text-[#59636e]">
                  {activeCertificate.issuer} • {activeCertificate.year}
                </p>
              </div>

              <button
                onClick={() => setActiveCertificate(null)}
                className="p-1.5 rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center p-2 bg-[#fafafa] rounded-xl border border-[#e5e5e5]">
              <img
                src={activeCertificate.image}
                alt={activeCertificate.title}
                className="max-h-[55vh] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>

            <div className="pt-4 mt-4 border-t border-[#e5e5e5] flex items-center justify-between">
              <span className="font-mono text-xs text-[#59636e]">
                Document: {activeCertificate.downloadName}
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={activeCertificate.image}
                  download={activeCertificate.downloadName}
                  className="btn-tactile py-2 px-4 rounded-lg bg-[#1f2328] text-white hover:bg-black font-mono text-xs font-semibold flex items-center gap-1.5"
                >
                  <Download size={13} />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setActiveCertificate(null)}
                  className="btn-tactile py-2 px-3 rounded-lg border border-[#e5e5e5] hover:bg-[#f5f5f5] font-mono text-xs text-[#1f2328]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationCertifications;
