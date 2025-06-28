
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities in backend development and DevOps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-slate-300">Email</p>
                    <a href="mailto:abdallabahrawyy@gmail.com" className="text-white hover:text-slate-300 transition-colors text-lg">
                      abdallabahrawyy@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-slate-300">Location</p>
                    <p className="text-white text-lg">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Professional Profiles</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 transition-colors"
                  onClick={() => window.open('https://www.linkedin.com/in/abdalla-elbahrawy/', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 transition-colors"
                  onClick={() => window.open('https://github.com/bahrawyyy', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">What I'm Looking For</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p className="text-slate-300">Backend development opportunities with Python and Django</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p className="text-slate-300">DevOps roles involving containerization and cloud deployment</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p className="text-slate-300">Full-stack development projects with modern tech stacks</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <p className="text-slate-300">Collaborative projects in fintech and automation</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 rounded-lg">
              <p className="text-slate-200 italic">
                "I'm passionate about creating scalable solutions and always eager to take on new challenges 
                that push the boundaries of what's possible with technology."
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-slate-400">
            © 2024 Abdalla E. Elbahrawy. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
