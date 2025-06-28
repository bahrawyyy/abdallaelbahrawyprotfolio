
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Python", "Django", "Flask", "Oracle", "MySQL", "RESTful APIs"],
      icon: "🚀"
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Jenkins", "Ansible", "AWS", "Git"],
      icon: "☁️"
    },
    {
      title: "Frontend Technologies",
      skills: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      icon: "🎨"
    },
    {
      title: "System Administration",
      skills: ["Linux Administration", "Bash Scripting", "Server Management", "Automation"],
      icon: "⚙️"
    },
    {
      title: "Tools & Reporting",
      skills: ["Crystal Reports", "OpenText Service Manager", "BMC Remedy", "ITSM"],
      icon: "📊"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                    <span className="text-slate-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
