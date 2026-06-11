import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      icon: FaHtml5,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      level: 90,
    },
    {
      name: 'CSS',
      icon: FaCss3Alt,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      level: 85,
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      level: 80,
    },
    {
      name: 'React',
      icon: FaReact,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      level: 75,
    },
    {
      name: 'Java',
      icon: FaJava,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      level: 80,
    },
    {
      name: 'SQL',
      icon: FaDatabase,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      level: 75,
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I've been working with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="card-gradient p-6 rounded-xl border border-dark-border hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${skill.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <span className="text-sm text-gray-400 font-medium">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-dark-border rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'GitHub', 'VS Code', 'Tailwind CSS', 'REST APIs', 'Responsive Design'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
