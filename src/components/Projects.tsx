
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Robotic Multi-Level Parking System",
      description: "Graduation project featuring autonomous robotic parking with V2V communications, FOTA updates, and intelligent space management. Achieved excellent grade for innovative approach to urban parking solutions.",
      technologies: ["Robotics", "V2V Communication", "FOTA", "Embedded Systems", "IoT"],
      github: "https://github.com/bahrawyyy/GP-Autonomous-Multi-Level-Parking-System",
      highlight: true
    },
    {
      title: "ETA Integration System",
      description: "Automated compliance reporting system with secure digital signing capabilities for Egyptian Tax Authority integration. Streamlined regulatory compliance processes.",
      technologies: ["Python", "Django", "Digital Signing", "API Integration", "Compliance"],
      github: "#"
    },
    {
      title: "FRA Integration System",
      description: "Real-time data upload system with comprehensive user search functionality for Financial Regulatory Authority. Enhanced data management and accessibility.",
      technologies: ["Python", "Real-time Processing", "Search Engine", "Data Management", "APIs"],
      github: "#"
    },
    {
      title: "Full-Stack App Deployment on AWS",
      description: "Complete CI/CD pipeline implementation using Jenkins, Docker, and Ansible for automated deployment on AWS infrastructure. Demonstrates DevOps best practices.",
      technologies: ["AWS", "Jenkins", "Docker", "Ansible", "CI/CD", "Infrastructure as Code"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Showcasing impactful solutions that demonstrate technical expertise and problem-solving skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 ${project.highlight ? 'border-2 border-slate-900' : ''}`}>
              {project.highlight && (
                <div className="bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Graduation Project ⭐
                </div>
              )}
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.github !== "#" && (
                <Button 
                  variant="outline" 
                  className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3"
            onClick={() => window.open('https://github.com/bahrawyyy', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
