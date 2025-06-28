
const Experience = () => {
  const experiences = [
    {
      title: "Python Developer",
      company: "Egyptian Takaful",
      period: "Sep 2024 – Present",
      description: "Developing robust backend systems using Python and Django, integrating with Oracle databases, building RESTful APIs for compliance reporting to ETA and FRA, and implementing secure digital signing systems for financial transactions.",
      technologies: ["Python", "Django", "Oracle", "RESTful APIs", "Digital Signing", "Financial Systems"]
    },
    {
      title: "ITSM Intern",
      company: "Fingerprint Consultancy",
      period: "Oct 2024 – Mar 2025",
      description: "Working with enterprise service management systems, handling backend integrations and data processing workflows for banking system facility management using Python scripting.",
      technologies: ["Python Scripting", "OpenText Service Manager", "BMC Remedy", "ITSM", "Banking Systems"]
    },
    {
      title: "DevOps Trainee",
      company: "DEPI",
      period: "Jun 2024 – Oct 2024",
      description: "Gained hands-on experience with containerization and deployment automation, working with Python applications in containerized environments and CI/CD pipelines.",
      technologies: ["Python Applications", "Docker", "Kubernetes", "Jenkins", "AWS"]
    },
    {
      title: "Linux Administration Trainee",
      company: "NTI",
      period: "Jan 2024 – Mar 2024",
      description: "Comprehensive training in Linux system administration with focus on Python automation scripts, server management, and system monitoring using Python tools.",
      technologies: ["Python Automation", "Linux", "Bash Scripting", "Server Administration"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gradient-to-b from-blue-500 to-purple-500" style={{borderImage: 'linear-gradient(to bottom, #3b82f6, #8b5cf6) 1'}}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <p className="text-xl text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 self-start">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
