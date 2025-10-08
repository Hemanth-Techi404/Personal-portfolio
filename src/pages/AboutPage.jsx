import { GraduationCap, Award, Code2, Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Python', icon: '🐍' },
    { name: 'Express', icon: '🚂' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Git', icon: '📦' },
  ];

  const certifications = [
    {
      title: 'React.js Developer',
      issuer: 'GeeksforGeeks',
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      title: 'Full Stack Developer',
      issuer: 'freeCodeCamp.org',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'DevOps',
      issuer: 'Datapro Software Training Institute',
      icon: <Target className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="font-semibold text-emerald-400">Full Stack Web Developer</span> and student specializing in <span className="font-semibold text-emerald-400">Artificial Intelligence & Machine Learning</span>. I build modern, scalable web applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise spanning both <span className="font-semibold text-emerald-400">frontend and backend development</span>, I bring ideas to life through clean, efficient code and thoughtful design. My approach combines technical proficiency with a keen eye for detail, ensuring every project meets the highest standards.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I thrive on solving complex problems and staying current with emerging technologies. Whether it's crafting pixel-perfect interfaces or architecting robust server-side solutions, I'm committed to delivering excellence in every line of code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Frontend Expert</h3>
                <p className="text-gray-400">Creating beautiful, responsive user interfaces</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Backend Pro</h3>
                <p className="text-gray-400">Building scalable server architectures</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
                <p className="text-gray-400">Writing maintainable, efficient solutions</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Learner</h3>
                <p className="text-gray-400">Adapting to new technologies quickly</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 md:p-12 mb-20 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-400">
                Bachelor of Technology in Computer Science & Engineering
              </h3>
              <p className="text-xl text-gray-300">
                Specialization: Artificial Intelligence & Machine Learning
              </p>
              <p className="text-lg text-gray-400">
                Avanthi's Research and Technological Academy
              </p>
              <p className="text-lg text-gray-400">
                Bhogapuram, Vizianagaram
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                  <span className="text-emerald-400 font-semibold">2022 - 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">My Skills</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative overflow-hidden py-8">
              <div className="flex animate-scroll">
                {[...skills, ...skills].map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 mx-4 px-8 py-6 bg-gray-900/50 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{skill.icon}</div>
                      <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 md:p-12 mb-20 hover:border-emerald-500/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Why Me?</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-2"></div>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              I bring a unique combination of technical expertise, creative problem-solving, and dedication to every project. My educational background in AI & Machine Learning, coupled with hands-on experience in full-stack development, enables me to approach challenges from multiple perspectives. I'm committed to writing clean, maintainable code and staying updated with the latest industry trends. My certifications from recognized platforms demonstrate my commitment to continuous learning and professional growth. Whether working independently or as part of a team, I deliver results that exceed expectations, ensuring projects are completed on time and with the highest quality standards. I believe in building not just applications, but solutions that make a real impact.
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Award className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl font-bold text-white">Certifications</h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/50 border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-center">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
