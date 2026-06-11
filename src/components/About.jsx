const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-dark-card flex items-center justify-center">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="card-gradient p-8 rounded-xl border border-dark-border hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                Full Stack Developer
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm Krishna Reddy, a passionate Full Stack Developer currently pursuing my 
                Bachelor of Technology in Computer Science and Engineering at Kalasalingam 
                Academy of Research and Education (2022-2026) with a CGPA of 8.3/10.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                I specialize in creating modern, responsive web applications using 
                React.js for dynamic user interfaces and Java for robust backend solutions. 
                My expertise spans across HTML, CSS, JavaScript, React, Java, and SQL, 
                allowing me to build full-stack applications from concept to deployment.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm eager to contribute to innovative projects and continue learning 
                cutting-edge technologies. My goal is to build user-friendly applications 
                that solve real-world problems and make a positive impact.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 card-gradient rounded-xl border border-dark-border hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-gradient mb-1">3+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 card-gradient rounded-xl border border-dark-border hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-gradient mb-1">6+</div>
                <div className="text-sm text-gray-400">Skills</div>
              </div>
              <div className="text-center p-4 card-gradient rounded-xl border border-dark-border hover:border-pink-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-gradient mb-1">100%</div>
                <div className="text-sm text-gray-400">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
