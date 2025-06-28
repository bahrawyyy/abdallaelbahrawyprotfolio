
const Skills = () => {
  const skillCategories = [
    {
      title: "Python Backend Development",
      skills: ["Python", "Django", "Flask", "FastAPI", "SQLAlchemy", "Celery"],
      icon: "🐍",
      gradient: "from-[#007dff] to-[#009fff]"
    },
    {
      title: "Database & APIs",
      skills: ["Oracle", "MySQL", "PostgreSQL", "RESTful APIs", "GraphQL", "Redis"],
      icon: "🗄️",
      gradient: "from-[#009fff] to-[#00aaff]"
    },
    {
      title: "Web Technologies",
      skills: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "AJAX", "JSON"],
      icon: "🌐",
      gradient: "from-[#00aaff] to-[#0099ff]"
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Jenkins", "Ansible", "AWS", "Git"],
      icon: "☁️",
      gradient: "from-[#0099ff] to-[#007dff]"
    },
    {
      title: "System & Tools",
      skills: ["Linux Administration", "Bash Scripting", "Crystal Reports", "ITSM Tools"],
      icon: "⚙️",
      gradient: "from-[#007dff] to-[#00aaff]"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#007dff] to-[#009fff] bg-clip-text text-transparent mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#007dff] to-[#009fff] mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Comprehensive backend development skills with focus on Python frameworks and scalable system design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full mr-3`}></div>
                    <span className="text-gray-600">{skill}</span>
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
