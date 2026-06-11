import { FaGraduationCap, FaCalendar, FaAward } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Education Card */}
          <div className="card-gradient p-8 rounded-xl border border-dark-border hover:border-purple-500/50 transition-all duration-300 group">
            {/* Header with Icon */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                  Bachelor of Technology
                </h3>
                <h4 className="text-xl text-gray-300 mb-2">
                  Computer Science and Engineering
                </h4>
                <p className="text-lg text-gray-400 mb-3">
                  Kalasalingam Academy of Research and Education
                </p>
                
                {/* Year and CGPA */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-dark-border rounded-lg">
                    <FaCalendar className="text-blue-400" />
                    <span className="text-sm font-medium">2022 - 2026</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg">
                    <FaAward className="text-green-400" />
                    <span className="text-sm font-medium">CGPA: 8.3/10</span>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">
                    <span className="text-purple-400 font-semibold">Key Coursework:</span> Data Structures, 
                    Algorithms, Database Management, Web Development, Software Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Academic Progress</span>
                <span className="text-sm text-gray-400">Currently in Final Year</span>
              </div>
              <div className="relative w-full h-2 bg-dark-border rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
