import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Food Delivery Application',
      description: 'A comprehensive food delivery platform featuring real-time order tracking, restaurant management, and seamless payment integration. Built with React JS for optimal performance.',
      tags: ['React JS', 'Node.js', 'MongoDB'],
      image: '/images/food-delivery.png',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-featured online shopping platform with product catalog, shopping cart, user authentication, and secure payment processing. Designed for scalability and user experience.',
      tags: ['React JS', 'Express', 'MongoDB', 'Tailwind'],
      image: '/images/ecommerce.png',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'News Application',
      description: 'Dynamic news aggregation platform that fetches and displays latest articles from multiple sources. Features category filtering, search functionality, and responsive design.',
      tags: ['React JS', 'JavaScript', 'CSS'],
      image: '/images/news-app.png',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'E-Sports Gaming Website',
      description: 'Modern gaming platform showcasing e-sports tournaments, player profiles, and gaming news with stunning visuals and smooth animations.',
      tags: ['React JS', 'JavaScript', 'HTML', 'CSS'],
      image: '/images/esports.png',
      github: 'https://github.com/Hemanth-Techi404',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161B22]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-[#8B949E] max-w-2xl mx-auto">
            Explore some of my recent work showcasing full-stack development capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-[#161B22]/70 border border-[#2D9CDB]/20 rounded-xl overflow-hidden hover:border-[#2D9CDB]/40 hover:shadow-2xl hover:shadow-[#2D9CDB]/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden bg-[#161B22]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-[#161B22]/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#E6EDF3] text-center px-4">
                    <h3 className="text-2xl font-bold drop-shadow-lg">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#8B949E] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-[#2D9CDB]/10 text-[#2D9CDB] border border-[#2D9CDB]/20 rounded-full text-sm font-medium"
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
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] text-[#E6EDF3] rounded-lg hover:shadow-lg hover:shadow-[#2D9CDB]/50 transition-all duration-200"
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

