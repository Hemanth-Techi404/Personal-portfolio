import { ExternalLink, Code2, Rocket } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'Full-featured online shopping platform with product catalog, shopping cart, user authentication, and secure payment processing. Designed for scalability and user experience with modern UI/UX principles.',
      tags: ['React JS', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: '/images/ecommerce.png',
      demoLink: 'https://shop-hub-pi-bay.vercel.app/',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'Food Delivery Application',
      description: 'A comprehensive food delivery platform featuring real-time order tracking, restaurant management, and seamless payment integration. Built with React JS for optimal performance and user satisfaction.',
      tags: ['React JS', 'Node.js', 'MongoDB', 'Express'],
      image: '/images/food-delivery.png',
      demoLink: 'https://food-delivery-application-t8vt.vercel.app/',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'News Application',
      description: 'Dynamic news aggregation platform that fetches and displays latest articles from multiple sources. Features category filtering, search functionality, and responsive design for seamless news browsing experience.',
      tags: ['React JS', 'JavaScript', 'CSS', 'API Integration'],
      image: '/images/news-app.png',
      demoLink: 'https://news-application-seven-psi.vercel.app/',
      github: 'https://github.com/Hemanth-Techi404',
    },
    {
      title: 'E-Sports Gaming Website',
      description: 'Modern gaming platform showcasing e-sports tournaments, player profiles, and gaming news. Features stunning visuals, smooth animations, and an engaging user interface designed for the gaming community.',
      tags: ['React JS', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      image: '/images/esports.png',
      github: 'https://github.com/Hemanth-Techi404',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#161B22] via-[#161B22] to-[#161B22] pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Rocket className="w-10 h-10 text-[#2D9CDB]" />
              <h1 className="text-5xl font-bold text-[#E6EDF3]">My Projects</h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#E6EDF3] max-w-3xl mx-auto leading-relaxed">
              Welcome to my portfolio of projects! Each application represents a unique challenge and showcases
              my ability to build full-stack solutions. From e-commerce platforms to real-time delivery systems,
              these projects demonstrate my expertise in modern web technologies, responsive design, and user-centric
              development. I take pride in writing clean, maintainable code and creating applications that deliver
              exceptional user experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-[#161B22]/70 border border-[#2D9CDB]/20 rounded-xl overflow-hidden hover:border-[#2D9CDB]/40 hover:shadow-2xl hover:shadow-[#2D9CDB]/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-52 relative overflow-hidden bg-[#161B22]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-[#161B22]/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#E6EDF3] text-center px-6">
                      <Code2 className="w-12 h-12 mx-auto mb-3 opacity-90 drop-shadow-lg" />
                      <h3 className="text-2xl font-bold drop-shadow-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[#E6EDF3] mb-6 leading-relaxed">
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
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] text-[#E6EDF3] rounded-lg hover:shadow-lg hover:shadow-[#2D9CDB]/50 transition-all duration-200 font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Demo</span>
                      </a>
                    )}
                    {!project.demoLink && (
                      <div className="flex items-center space-x-2 px-5 py-2.5 bg-[#161B22]/50 text-[#8B949E] rounded-lg border border-gray-600 cursor-not-allowed">
                        <Code2 className="w-4 h-4" />
                        <span>In Development</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[#161B22]/80 border border-[#2D9CDB]/20 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-4">Want to see more?</h3>
              <p className="text-[#8B949E] mb-6">
                Check out my GitHub profile for more projects and open-source contributions
              </p>
              <a
                href="https://github.com/Hemanth-Techi404"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] text-[#E6EDF3] rounded-lg hover:shadow-lg hover:shadow-[#2D9CDB]/50 transition-all duration-200 font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

