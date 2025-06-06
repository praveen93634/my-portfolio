
import { Book, Code, Server, Coffee, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import NamesteNodejs from '@/asset/certificate.jpg'
import javaProgramming from '@/asset/Praveen kumar_page-0001.jpg'
import javascript from '@/asset/GuviCertification - S7g11G3WO9Y229ET71 (1).png'
const Coursework = () => {
  const { toast } = useToast();

  const courses = [
       {
      title: "Java Basics",
      institution: "Online Course",
      grade: "Completed", 
      duration: "2023",
      description: "Foundation course in Java programming language",
      topics: ["OOP Concepts", "Data Structures", "Exception Handling", "Collections"],
      icon: Coffee,
      color: "from-red-500 to-orange-600",
      hasCertificate: true,
      certificate:javaProgramming,
    download:"java_programming_certificate.png"
    },
    {
      title: "JavaScript Zero to Hero",
      institution: "Online Course",
      grade: "Completed",
      duration: "2024",
      description: "Comprehensive JavaScript fundamentals to advanced concepts",
      topics: ["ES6+", "DOM Manipulation", "Async/Await", "Modules"],
      icon: Code,
      color: "from-yellow-500 to-orange-500",
      hasCertificate: true,
      certificate:javascript,
      download:"javascript_certificate.png"
    },
    {
      title: "Nameste Node.js",
      institution: "Online Course", 
      grade: "Completed",
      duration: "2025",
      description: "Deep dive into Node.js backend development",
      topics: ["Express.js", "APIs", "Database Integration", "Authentication"],
      icon: Server,
      color: "from-green-500 to-emerald-500",
      hasCertificate: true,
      certificate:NamesteNodejs,
        download:"nameste_nodejs_certificate.png"
    }
  ];

  const handleDownloadCertificate = (courseName: string) => {
    toast({
      title: "Certificate Download",
      description: `${courseName} certificate download feature  certificate file downloaded sucessfully.`,
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Academic <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Courses and certifications that shaped my development skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.title}
              className="group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <course.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {course.title}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{course.institution}</span>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">{course.grade}</span>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {course.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Key Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic) => (
                    <span 
                      key={topic}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {course.hasCertificate && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a href={course.certificate}
                   download={course.download}
                  target="_blank"
                  rel="noopener noreferrer">
                    <Button
                    onClick={() => handleDownloadCertificate(course.title)}
                    variant="outline"
                    size="sm"
                    className="w-full border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-300 group-hover:scale-105"
                  >
                    <Download size={16} className="mr-2" />
                    Download Certificate
                  </Button>
                  </a>
                </div>
              )}
              
              <div className="flex items-center justify-between mt-4 text-sm text-slate-500 dark:text-slate-400">
                <span>{course.duration}</span>
                <Book size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coursework;