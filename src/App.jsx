import { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/about');
    setIsMenuOpen(false);
  };

  const handleProjectsClick = () => {
    navigate('/projects');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <nav className="fixed w-full bg-[#161B22]/95 backdrop-blur-md border-b border-[#2D9CDB]/20 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <Code2 className="w-8 h-8 text-[#2D9CDB] group-hover:text-[#00C6FF] transition-colors" />
              <span className="text-xl font-bold text-[#E6EDF3]">Hemanth</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[#8B949E] hover:text-[#2D9CDB] transition-colors font-medium">
                Home
              </button>
              <button onClick={handleAboutClick} className="text-[#8B949E] hover:text-[#2D9CDB] transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-[#8B949E] hover:text-[#2D9CDB] transition-colors font-medium">
                Skills
              </button>
              <button onClick={handleProjectsClick} className="text-[#8B949E] hover:text-[#2D9CDB] transition-colors font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#8B949E] hover:text-[#2D9CDB] transition-colors font-medium">
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#0D1117] transition-colors text-[#8B949E]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#161B22] border-t border-[#2D9CDB]/20">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#0D1117] transition-colors text-[#8B949E]">
                Home
              </button>
              <button onClick={handleAboutClick} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#0D1117] transition-colors text-[#8B949E]">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#0D1117] transition-colors text-[#8B949E]">
                Skills
              </button>
              <button onClick={handleProjectsClick} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#0D1117] transition-colors text-[#8B949E]">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#0D1117] transition-colors text-[#8B949E]">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>

      <footer className="bg-[#161B22] border-t border-[#2D9CDB]/20 text-[#E6EDF3] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Code2 className="w-6 h-6 text-[#2D9CDB]" />
              <span className="text-lg font-semibold">Hemanth</span>
            </div>

            <p className="text-[#8B949E] text-sm">
              © 2025 Hemanth. All rights reserved.
            </p>

            <div className="flex space-x-4">
              <a href="https://github.com/Hemanth-Techi404" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D9CDB] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/hemanth-chellapilli/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D9CDB] transition-colors">
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
