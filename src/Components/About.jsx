import { Code2, Laptop, Server, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-[#E6EDF3] leading-relaxed">
              I'm a passionate <span className="font-semibold text-[#2D9CDB]">Full Stack Web Developer</span>
              specializing in building modern, scalable web applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-[#E6EDF3] leading-relaxed">
              With expertise spanning both <span className="font-semibold text-[#2D9CDB]">frontend and backend development</span>,
              I bring ideas to life through clean, efficient code and thoughtful design. My approach combines
              technical proficiency with a keen eye for detail, ensuring every project meets the highest standards.
            </p>
            <p className="text-lg text-[#E6EDF3] leading-relaxed">
              I thrive on solving complex problems and staying current with emerging technologies.
              Whether it's crafting pixel-perfect interfaces or architecting robust server-side solutions,
              I'm committed to delivering excellence in every line of code.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-[#2D9CDB]/10 to-[#00C6FF]/10 border border-[#2D9CDB]/20 rounded-xl hover:border-[#2D9CDB]/40 hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2D9CDB] to-[#00C6FF] rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-[#E6EDF3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">Frontend Expert</h3>
              <p className="text-[#8B949E]">Creating beautiful, responsive user interfaces</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#00C6FF]/10 to-[#A259FF]/10 border border-[#00C6FF]/20 rounded-xl hover:border-[#00C6FF]/40 hover:shadow-lg hover:shadow-[#00C6FF]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00C6FF] to-[#A259FF] rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-[#E6EDF3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">Backend Pro</h3>
              <p className="text-[#8B949E]">Building scalable server architectures</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#A259FF]/10 to-[#2D9CDB]/10 border border-[#A259FF]/20 rounded-xl hover:border-[#A259FF]/40 hover:shadow-lg hover:shadow-[#A259FF]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A259FF] to-[#2D9CDB] rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-[#E6EDF3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">Clean Code</h3>
              <p className="text-[#8B949E]">Writing maintainable, efficient solutions</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#00C6FF]/10 to-[#2D9CDB]/10 border border-[#00C6FF]/20 rounded-xl hover:border-[#00C6FF]/40 hover:shadow-lg hover:shadow-[#00C6FF]/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00C6FF] to-[#2D9CDB] rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#E6EDF3]" />
              </div>
              <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">Fast Learner</h3>
              <p className="text-[#8B949E]">Adapting to new technologies quickly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


