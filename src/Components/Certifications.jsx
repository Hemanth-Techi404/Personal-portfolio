import { Award, ExternalLink, CheckCircle } from 'lucide-react';

export default function Certifications() {
    const certifications = [
        {
            title: 'Full Stack Web Development',
            issuer: 'Udemy',
            date: 'Completed 2024',
            description: 'Comprehensive course covering React, Node.js, Express, MongoDB, and modern web development practices.',
            skills: ['React', 'Node.js', 'MongoDB', 'Express'],
            gradient: 'from-[#2D9CDB] to-[#00C6FF]',
            icon: '🎓',
        },
        {
            title: 'JavaScript Algorithms and Data Structures',
            issuer: 'freeCodeCamp',
            date: 'Completed 2023',
            description: 'Advanced JavaScript programming, ES6+, algorithms, data structures, and problem-solving techniques.',
            skills: ['JavaScript', 'Algorithms', 'Data Structures'],
            gradient: 'from-[#00C6FF] to-[#A259FF]',
            icon: '💻',
        },
        {
            title: 'Responsive Web Design',
            issuer: 'freeCodeCamp',
            date: 'Completed 2023',
            description: 'Modern CSS techniques, Flexbox, Grid, responsive design principles, and accessibility best practices.',
            skills: ['HTML5', 'CSS3', 'Responsive Design'],
            gradient: 'from-[#A259FF] to-[#2D9CDB]',
            icon: '🎨',
        },
        {
            title: 'React - The Complete Guide',
            issuer: 'Udemy',
            date: 'Completed 2024',
            description: 'In-depth React training including Hooks, Context API, Redux, React Router, and advanced patterns.',
            skills: ['React', 'Redux', 'React Router'],
            gradient: 'from-[#2D9CDB] to-[#A259FF]',
            icon: '⚛️',
        },
    ];

    return (
        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161B22]/60 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Award className="w-10 h-10 text-[#2D9CDB]" />
                        <h2 className="text-4xl font-bold text-[#E6EDF3]">Certifications & Achievements</h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-[#E6EDF3] max-w-3xl mx-auto leading-relaxed">
                        Continuous learning and professional development through industry-recognized certifications
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="group bg-[#161B22]/70 border border-[#2D9CDB]/20 rounded-xl overflow-hidden hover:border-[#2D9CDB]/40 hover:shadow-2xl hover:shadow-[#2D9CDB]/20 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`h-32 bg-gradient-to-br ${cert.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-2">{cert.icon}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#E6EDF3] mb-1">{cert.title}</h3>
                                        <p className="text-[#2D9CDB] font-medium">{cert.issuer}</p>
                                    </div>
                                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                                </div>

                                <p className="text-sm text-[#8B949E] mb-4">{cert.date}</p>

                                <p className="text-[#E6EDF3] mb-4 leading-relaxed">
                                    {cert.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="px-3 py-1 bg-[#2D9CDB]/10 text-[#2D9CDB] border border-[#2D9CDB]/20 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2D9CDB]/10 to-[#00C6FF]/10 border border-[#2D9CDB]/20 rounded-lg">
                        <Award className="w-5 h-5 text-[#2D9CDB]" />
                        <p className="text-[#E6EDF3]">
                            Committed to continuous learning and staying updated with the latest technologies
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


