
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import myResume from "@/asset/praveen Kumar Updated Resume (10).pdf"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Praveen Kumar
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Crafting scalable web applications with the MEAN stack.
              Passionate about clean code and innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <a
              href={myResume}
              download="Praveen_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 dark:text-slate-300 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </a>

          </div>

          <div className="flex justify-center space-x-8">
            <a href="https://github.com/praveen93634" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/praveen-kumar-4ba09b291/" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300">
              <Linkedin size={32} />
            </a>
            <a href="mailto:praveenramesh5267@gmail.com" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-300">
              <Mail size={32} />
            </a>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-400" size={32} />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
