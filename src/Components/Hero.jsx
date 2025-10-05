import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Hemanth</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Web Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting seamless digital experiences with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500/10 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Hemanth-Techi404"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-gray-700 hover:scale-110 transition-all duration-200"
            >
              <Github className="w-6 h-6 text-emerald-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-chellapilli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-gray-700 hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-emerald-400" />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-emerald-400" />
        </button>
      </div>
    </section>
  );
}
