import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Food Delivery Application',
      description: 'A comprehensive food delivery platform featuring real-time order tracking, restaurant management, and seamless payment integration. Built with React JS for optimal performance.',
      tags: ['React JS', 'Node.js', 'MongoDB'],
      gradient: 'from-orange-500 to-red-600',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-featured online shopping platform with product catalog, shopping cart, user authentication, and secure payment processing. Designed for scalability and user experience.',
      tags: ['React JS', 'Express', 'MongoDB', 'Tailwind'],
      gradient: 'from-emerald-500 to-blue-600',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'News Application',
      description: 'Dynamic news aggregation platform that fetches and displays latest articles from multiple sources. Features category filtering, search functionality, and responsive design.',
      tags: ['React JS', 'JavaScript', 'CSS'],
      gradient: 'from-pink-500 to-rose-600',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather tracking application providing detailed forecasts, weather alerts, and location-based climate information with an intuitive user interface.',
      tags: ['React JS', 'JavaScript', 'HTML', 'CSS'],
      gradient: 'from-blue-500 to-cyan-600',
      github: 'https://github.com/Hemanth-Techi404',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work showcasing full-stack development capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gray-800/50 border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
