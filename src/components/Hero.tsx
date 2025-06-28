
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#007dff] to-[#009fff] bg-clip-text text-transparent mb-4 animate-scale-in">
            Abdalla E. Elbahrawy
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
            Python Backend Developer & Software Engineer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specialized in backend Python development with Django and Flask, building robust APIs, 
            database integrations, and scalable web applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-500 mb-8">📍 Cairo, Egypt</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#007dff] to-[#009fff] hover:from-[#0070e6] hover:to-[#008fe6] text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-[#007dff] text-[#007dff] hover:bg-blue-50 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="w-6 h-6 mx-auto text-[#009fff] hover:text-[#007dff] transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
