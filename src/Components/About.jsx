import { Code2, Laptop, Server, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="font-semibold text-emerald-400">Full Stack Web Developer</span>
              specializing in building modern, scalable web applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise spanning both <span className="font-semibold text-emerald-400">frontend and backend development</span>,
              I bring ideas to life through clean, efficient code and thoughtful design. My approach combines
              technical proficiency with a keen eye for detail, ensuring every project meets the highest standards.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on solving complex problems and staying current with emerging technologies.
              Whether it's crafting pixel-perfect interfaces or architecting robust server-side solutions,
              I'm committed to delivering excellence in every line of code.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Frontend Expert</h3>
              <p className="text-gray-400">Creating beautiful, responsive user interfaces</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Backend Pro</h3>
              <p className="text-gray-400">Building scalable server architectures</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
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
      </div>
    </section>
  );
}
