
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Angular", icon: "🅰️" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" }
      ],
      color: "from-blue-500 to-cyan-500",
      size: "large",
      icon: "💻"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" }
      ],
      color: "from-green-500 to-emerald-500",
      size: "medium",
      icon: "⚙️"
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "🍃" },
      ],
      color: "from-purple-500 to-pink-500",
      size: "medium",
      icon: "🗄️"
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "🟨" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚡" }
      ],
      color: "from-orange-500 to-red-500",
      size: "large",
      icon: "👨‍💻"
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: "📚" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💙" },
        {name:"Postman", icon: "📬" }
      ],
      color: "from-gray-600 to-gray-800",
      size: "medium",
      icon: "🔧"
    },
    {
      title: "Problem Solving",
      skills: [
        { name: "DSA", icon: "🔢" },
        { name: "Algorithms", icon: "🧮" },
        { name: "Logic", icon: "🎯" }
      ],
      color: "from-indigo-500 to-purple-600",
      size: "medium",
      icon: "🧠"
    }
  ];

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'medium': return 'md:col-span-2 md:row-span-1';
      case 'small': return 'md:col-span-1 md:row-span-1';
      default: return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold text-slate-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Perfectly aligned bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              data-index={index}
              className={`skill-card group relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden ${getGridClass(skill.size)} ${
                visibleCards.includes(index) 
                  ? 'animate-scale-in opacity-100' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated background particles */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full blur-lg animate-pulse-slow delay-1000"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-yellow-200 transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((skillItem, skillIndex) => (
                    <div
                      key={skillItem.name}
                      className={`flex items-center gap-2 bg-white/20 text-white border-white/30 px-3 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group-hover:scale-105 rounded-full`}
                      style={{ 
                        animationDelay: `${(index * 150) + (skillIndex * 100)}ms` 
                      }}
                    >
                      <span className="text-lg">{skillItem.icon}</span>
                      <span>{skillItem.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Floating elements for extra visual appeal */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-700"></div>
      </div>
    </section>
  );
};

export default Skills;
