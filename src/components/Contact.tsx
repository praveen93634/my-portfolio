
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone, Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import myResume from "@/asset/praveen Kumar Updated Resume (1).pdf"
const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "praveenramesh5267@gmail.com",
      link: "mailto:praveenramesh5267@gmail.com"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      value: "github.com/praveen93634",
      link: "https://github.com/praveen93634"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "linkedin.com/in/praveen-kumar",
      link: "https://www.linkedin.com/in/praveen-kumar-4ba09b291/"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Redhills, Chennai-52",
      link: null
    }
  ];

  const handleSendMessage = () => {
    const subject = encodeURIComponent("Let's discuss your project");
    const body = encodeURIComponent("Hi Praveen,\n\nI would like to discuss a potential project with you.\n\nBest regards,");
    window.location.href = `mailto:praveenramesh5267@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleDownloadResume = () => {
    // Create a sample resume download - in real app, this would be a real PDF file
    toast({
      title: "Resume Download",
      description: "Resume download feature - please upload your resume file to enable this functionality.",
    });
  };

  // const handleScheduleCall = () => {
  //   toast({
  //     title: "Schedule Call",
  //     description: "Redirecting to calendar booking...",
  //   });
  // };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={contact.label}
                  className="flex items-center space-x-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{contact.label}</p>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white font-semibold">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Resume Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-700">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <FileText className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Resume</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Download my latest resume</p>
                </div>
                <a
                  href={myResume}
                  download="Praveen_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl animate-scale-in">
            <h3 className="text-3xl font-bold mb-6">Ready to Start?</h3>
            <p className="text-blue-100 mb-8 leading-relaxed text-lg">
              I'm always excited to work on new projects and collaborate with 
              amazing people. Whether you have a project in mind or just want 
              to chat about technology, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleSendMessage}
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-3" size={24} />
                Send a Message
              </Button>
              
              {/* <Button 
                onClick={handleScheduleCall}
                variant="outline" 
                size="lg"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule a Call
              </Button> */}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
          <p className="text-slate-500 dark:text-slate-400">
            © 2024 Praveen Kumar. Crafted with passion and modern technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
