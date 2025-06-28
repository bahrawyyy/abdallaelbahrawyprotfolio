
const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Bachelor of Science in Computer and System Engineering</h3>
                <p className="text-blue-100 text-lg">Zagazig University</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-blue-100">2019 – 2024</p>
                <p className="text-lg font-semibold bg-white/20 px-4 py-2 rounded-full mt-2 inline-block">
                  Very Good with Honor (84%)
                </p>
              </div>
            </div>
            
            <div className="border-t border-blue-400 pt-6">
              <h4 className="text-xl font-semibold mb-4">Graduation Project Highlight</h4>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h5 className="text-lg font-semibold mb-2">Autonomous Robotic Multi-Level Parking System</h5>
                <p className="text-blue-100 mb-4">
                  Innovative project featuring autonomous robotic parking with Vehicle-to-Vehicle (V2V) communications 
                  and Firmware Over-The-Air (FOTA) updates. Developed comprehensive backend control systems using Python 
                  for real-time vehicle management and space optimization algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Python Backend</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">V2V Communication</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">FOTA Updates</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">IoT Systems</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Embedded Programming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
