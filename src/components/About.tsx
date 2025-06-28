
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate Software Engineer with a strong background in backend development, 
              DevOps, and cloud technologies. Based in Cairo, Egypt, I specialize in building 
              robust, scalable systems using Python, Docker, Kubernetes, and AWS.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              My journey in technology began with my Computer and System Engineering degree from 
              Zagazig University, where I graduated with Very Good with Honor (84%). Since then, 
              I've been dedicated to creating impactful technical solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">Backend Focus</h3>
                <p className="text-slate-600">Python, Django, Flask, Oracle, MySQL</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">DevOps Expertise</h3>
                <p className="text-slate-600">Docker, Kubernetes, Jenkins, Ansible</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Experience</span>
                  <span className="font-semibold">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Projects Completed</span>
                  <span className="font-semibold">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Technologies Mastered</span>
                  <span className="font-semibold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Current Role</span>
                  <span className="font-semibold">Software Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
