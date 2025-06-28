
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 animate-scale-in">
            Abdalla E. Elbahrawy
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 mb-6 font-medium">
            Software Engineer & DevOps Specialist
          </h2>
          <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about backend and full-stack development, building robust, scalable systems, 
            and solving real-world problems with impactful technical solutions.
          </p>
          <p className="text-lg text-slate-400 mb-8">📍 Cairo, Egypt</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="w-6 h-6 mx-auto text-slate-400 hover:text-slate-600 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
