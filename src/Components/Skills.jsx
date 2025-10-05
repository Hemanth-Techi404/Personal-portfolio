export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
      color: 'from-emerald-500 to-blue-500',
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST API', level: 85 },
      ],
      color: 'from-blue-500 to-emerald-500',
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 75 },
        { name: 'Python', level: 80 },
      ],
      color: 'from-emerald-500 to-blue-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications from frontend to backend
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-emerald-500/20 rounded-xl shadow-lg p-8 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <h3 className={`text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'C', 'Python'].map((tech, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 border border-emerald-500/20 rounded-lg p-4 text-center hover:border-emerald-500/40 hover:shadow-md hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-200"
            >
              <span className="text-gray-300 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
