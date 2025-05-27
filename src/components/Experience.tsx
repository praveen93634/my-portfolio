
import { CheckCircle } from "lucide-react";

const Experience = () => {
  const achievements = [
    "Built dynamic and scalable web applications using the MEAN stack",
    "Developed responsive user interfaces with modern frameworks",
    "Created robust backend APIs with Node.js and MongoDB",
    "Applied advanced algorithms and data structures for optimization",
    "Managed version control and collaborated using Git & GitHub"
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Professional <span className="text-blue-600">Experience</span>
            </h2>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
              <p className="text-blue-100 mb-4">1 Year Experience</p>
              <p className="text-blue-50">
                Specialized in MEAN stack development with a focus on creating 
                scalable and efficient web applications.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Key Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl"
              >
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
