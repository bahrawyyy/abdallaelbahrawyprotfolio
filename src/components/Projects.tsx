
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ETA Integration System",
      description: "Built a comprehensive Python backend system for automated compliance reporting to Egyptian Tax Authority with secure digital signing capabilities. Implemented robust error handling, data validation, and audit logging.",
      technologies: ["Python", "Django", "Digital Signing", "API Integration", "Oracle", "Compliance"],
      github: "#",
      highlight: true
    },
    {
      title: "FRA Integration System",
      description: "Developed a real-time data processing system with advanced user search functionality for Financial Regulatory Authority. Built efficient database queries and caching mechanisms for optimal performance.",
      technologies: ["Python", "Flask", "Real-time Processing", "Search Engine", "Database Optimization", "APIs"],
      github: "#"
    },
    {
      title: "Autonomous Robotic Multi-Level Parking System",
      description: "Graduation project featuring autonomous robotic parking with V2V communications, FOTA updates, and intelligent space management. Developed the backend control system using Python and embedded programming.",
      technologies: ["Python", "Embedded Systems", "V2V Communication", "FOTA", "IoT", "Robotics"],
      github: "https://github.com/bahrawyyy/GP-Autonomous-Multi-Level-Parking-System",
      highlight: false
    },
    {
      title: "Banking System Backend APIs",
      description: "Designed and implemented RESTful APIs for banking system facility management with secure authentication, transaction processing, and comprehensive logging for audit trails.",
      technologies: ["Python", "Django REST", "Banking APIs", "Authentication", "Transaction Processing", "Security"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Showcasing Python backend solutions that demonstrate technical expertise and problem-solving skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${project.highlight ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
              {project.highlight && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured Project ⭐
                </div>
              )}
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.github !== "#" && (
                <Button 
                  variant="outline" 
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 transition-colors"
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg"
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
