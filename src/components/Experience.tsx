
const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Egyptian Takaful",
      period: "Sep 2024 – Present",
      description: "Full-stack Python development with Oracle integration, automating compliance reports to ETA and FRA, implementing secure digital signing systems.",
      technologies: ["Python", "Django", "Oracle", "RESTful APIs", "Digital Signing"]
    },
    {
      title: "ITSM Intern",
      company: "Fingerprint Consultancy",
      period: "Oct 2024 – Mar 2025",
      description: "Working with OpenText Service Manager and BMC Remedy for banking system facility management, handling ITSM processes and workflows.",
      technologies: ["OpenText Service Manager", "BMC Remedy", "ITSM", "Banking Systems"]
    },
    {
      title: "DevOps Trainee",
      company: "DEPI",
      period: "Jun 2024 – Oct 2024",
      description: "Intensive training in containerization, orchestration, and CI/CD pipelines using industry-standard tools and AWS cloud services.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"]
    },
    {
      title: "Linux Administration Trainee",
      company: "NTI",
      period: "Jan 2024 – Mar 2024",
      description: "Comprehensive training in Linux system administration, server management, and bash scripting for automation tasks.",
      technologies: ["Linux", "Bash Scripting", "Server Administration", "System Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-slate-900">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">{exp.title}</h3>
                  <p className="text-xl text-slate-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-500 bg-slate-100 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 self-start">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-slate-900 text-white px-3 py-1 rounded text-sm font-medium">
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
