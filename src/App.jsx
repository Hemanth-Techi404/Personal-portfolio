import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2 } from 'lucide-react';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md border-b border-emerald-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">Hemanth</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-emerald-500/20">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-950 border-t border-emerald-500/20 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Code2 className="w-6 h-6 text-emerald-400" />
              <span className="text-lg font-semibold">Hemanth</span>
            </div>

            <p className="text-gray-400 text-sm">
              © 2025 Hemanth. All rights reserved.
            </p>

            <div className="flex space-x-4">
              <a href="https://github.com/Hemanth-Techi404" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/hemanth-chellapilli/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
