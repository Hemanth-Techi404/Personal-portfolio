import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0D1117]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB]/10 via-transparent to-[#A259FF]/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2D9CDB]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E6EDF3] mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF]">Hemanth</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#8B949E] mb-8 max-w-3xl mx-auto">
            Full Stack Web Developer
          </p>
          <p className="text-lg text-[#8B949E] mb-12 max-w-2xl mx-auto">
            Crafting seamless digital experiences with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#2D9CDB]/50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-[#2D9CDB] text-[#2D9CDB] rounded-lg font-medium hover:bg-[#2D9CDB]/10 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Hemanth-Techi404"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B22] rounded-full shadow-md hover:shadow-lg hover:bg-[#161B22]/80 hover:scale-110 transition-all duration-200 border border-[#2D9CDB]/20"
            >
              <Github className="w-6 h-6 text-[#2D9CDB]" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-chellapilli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161B22] rounded-full shadow-md hover:shadow-lg hover:bg-[#161B22]/80 hover:scale-110 transition-all duration-200 border border-[#2D9CDB]/20"
            >
              <Linkedin className="w-6 h-6 text-[#2D9CDB]" />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-[#2D9CDB]" />
        </button>
      </div>
    </section>
  );
}
