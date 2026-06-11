import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Krishnaa81', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/krishnareddybattula/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:krishnareddy9111@gmail.com', label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 gradient-bg"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center animate-fade-in">
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-gray-400 mb-4 animate-slide-up">
            Hello, I'm
          </p>

          {/* Name with gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Krishna Reddy</span>
          </h1>

          {/* Title/Role */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6 animate-slide-up">
            Full Stack Developer
          </h2>

          {/* Short intro */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up">
            Passionate Full Stack Developer skilled in React.js, Java, SQL, and modern web technologies, 
            focused on building responsive and user-friendly applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-dark-card border-2 border-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Animated scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
