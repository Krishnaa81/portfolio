import { FiGithub, FiExternalLink, FiZap, FiCheckCircle } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'Library Management System',
      subtitle: 'Comprehensive Library Management with Real-time Tracking',
      description: 'Production-ready library management application with intelligent book cataloging, member management, and automated fine calculation system.',
      keyImpacts: [
        'Manages 1000+ books in searchable database',
        'Automated issue/return tracking system',
        'Real-time fine calculation with notifications'
      ],
      techStack: {
        frontend: ['Java Swing', 'AWT'],
        backend: ['Java', 'JDBC'],
        features: ['Database Management', 'User Authentication', 'Report Generation']
      },
      github: 'https://github.com/Krishnaa81/library-management',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '📚',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop',
    },
    {
      title: 'SAM (Share A Meal)',
      subtitle: 'Food Sharing Platform Connecting Communities',
      description: 'Modern food sharing platform built with React, connecting people who want to share meals with those in need, promoting community engagement and reducing food waste.',
      keyImpacts: [
        'Connect food donors with recipients in real-time',
        'Integrated location-based meal discovery',
        'Automated notifications for new meal postings'
      ],
      techStack: {
        frontend: ['React.js', 'TailwindCSS'],
        backend: ['Node.js', 'Express.js'],
        features: ['Real-time Updates', 'Geolocation', 'User Profiles']
      },
      github: 'https://github.com/Krishnaa81/share-a-meal',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🍽️',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
    },
    {
      title: 'Parking Space Booking',
      subtitle: 'Smart Parking Management with Real-time Availability',
      description: 'Online platform for booking parking spaces in advance with real-time availability tracking, secure payment integration, and user-friendly interface.',
      keyImpacts: [
        'Real-time parking slot availability tracking',
        'Secure online booking and payment system',
        'Dashboard for parking owners and users'
      ],
      techStack: {
        frontend: ['HTML5', 'CSS3', 'JavaScript'],
        backend: ['Java', 'Servlets'],
        features: ['Booking System', 'Payment Integration', 'Admin Dashboard']
      },
      github: 'https://github.com/Krishnaa81/parking-booking',
      demo: '#',
      gradient: 'from-green-500 to-teal-500',
      icon: '🚗',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=600&fit=crop',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my recent work and academic projects
          </p>
        </div>

        {/* All Projects Display */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                <div className="relative overflow-hidden rounded-2xl border border-dark-border group-hover:border-purple-500/50 transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Overlay Icon */}
                  <div className="absolute top-4 left-4 text-6xl transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <FiZap className={`text-blue-400`} />
                    <p className="text-lg text-gray-300">{project.subtitle}</p>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Impact */}
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <FiZap className="text-blue-400" />
                    Key Impact
                  </h4>
                  <div className="space-y-2">
                    {project.keyImpacts.map((impact, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FiCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-purple-400">{'</>'}</span>
                    Tech Stack
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Frontend:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.frontend.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-xs rounded-md bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-blue-500/30 text-gray-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-2">Backend:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.backend.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-md bg-dark-border text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-2">Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.features.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-md bg-dark-card border border-dark-border text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300`}
                  >
                    View Live Demo
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border text-white font-medium rounded-lg hover:border-purple-500/50 hover:bg-dark-border transform hover:scale-105 transition-all duration-300"
                  >
                    View Code
                    <FiGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
