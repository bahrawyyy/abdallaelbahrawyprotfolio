
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Python Backend Developer with expertise in building robust, scalable 
              web applications and APIs. Based in Cairo, Egypt, I specialize in Django and Flask 
              frameworks, with strong experience in database design and integration.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in backend development began with my Computer and System Engineering degree from 
              Zagazig University, where I graduated with Very Good with Honor (84%). I focus on creating 
              efficient, maintainable code that powers complex business logic and data processing systems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg hover:shadow-md transition-shadow border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">Python Expertise</h3>
                <p className="text-blue-600">Django, Flask, FastAPI, SQLAlchemy</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg hover:shadow-md transition-shadow border border-green-100">
                <h3 className="font-semibold text-green-800 mb-2">Database Systems</h3>
                <p className="text-green-600">Oracle, MySQL, PostgreSQL, Redis</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg text-white shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Work Experience</span>
                  <span className="font-semibold">+1 Year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Current Role</span>
                  <span className="font-semibold">Python Developer</span>
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
