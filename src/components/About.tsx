
const About = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with <strong className="text-slate-900 dark:text-white">1 year of hands-on experience</strong> building 
                dynamic and scalable web applications using the MEAN stack.
              </p>
              <p>
                I specialize in crafting clean, efficient, and responsive user interfaces while 
                developing robust backend APIs that power modern web applications.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving to deliver 
                impactful software solutions that make a difference.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-slate-600 dark:text-slate-300">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-slate-600 dark:text-slate-300">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-slate-600 dark:text-slate-300">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
