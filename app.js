// ========== VANILLA JAVASCRIPT PORTFOLIO ========== 
// Complete portfolio with vanilla JS - no build tools needed

class Portfolio {
  constructor() {
    this.darkMode = true;
    this.mobileMenuOpen = false;
    this.init();
  }

  init() {
    this.setupDOM();
    this.attachEventListeners();
    this.setupIntersectionObserver();
    this.setupNavbarScroll();
    this.setupSkillBars();
  }

  setupDOM() {
    const root = document.getElementById('root');
    root.innerHTML = this.getHTML();
  }

  attachEventListeners() {
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleDarkMode());
    }

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });

    // Mobile menu links
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    // Project buttons
    document.querySelectorAll('.btn-demo').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleProjectLink(e));
    });
  }

  setupNavbarScroll() {
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('dark-mode');
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu');
    if (this.mobileMenuOpen) {
      mobileMenu.classList.add('active');
    } else {
      mobileMenu.classList.remove('active');
    }
  }

  handleNavClick(e) {
    const link = e.currentTarget;
    const href = link.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        this.mobileMenuOpen = false;
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
        }
      }
    }
  }

  handleProjectLink(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href !== '#') {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Here you can add form submission logic
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  setupSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    const barObserverOptions = {
      threshold: 0.5
    };

    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = width + '%';
          barObserver.unobserve(entry.target);
        }
      });
    }, barObserverOptions);

    skillBars.forEach(bar => {
      barObserver.observe(bar);
    });
  }

  // ========== HTML GENERATION ==========
  
  getHTML() {
    return `
      ${this.getNavbar()}
      ${this.getHero()}
      ${this.getAbout()}
      ${this.getSkills()}
      ${this.getEducation()}
      ${this.getProjects()}
      ${this.getContact()}
      ${this.getFooter()}
    `;
  }

  getNavbar() {
    return `
      <nav>
        <div class="navbar-container">
          <div class="navbar-logo">Krishna Reddy</div>
          
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div class="nav-actions">
            <button class="theme-toggle" aria-label="Toggle dark mode">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>

            <button class="mobile-menu-btn" aria-label="Toggle menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="mobile-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  getHero() {
    return `
      <section id="home">
        <div class="max-w-7xl mx-auto w-full">
          <div class="hero-content">
            <p class="greeting animate-slide-up" style="animation-delay: 0s">Hello, I'm</p>
            
            <h1 style="animation-delay: 0.1s">
              <span class="text-gradient">Krishna Reddy</span>
            </h1>

            <h2 style="animation-delay: 0.2s">Full Stack Developer & Data Analyst</h2>

            <p style="animation-delay: 0.3s">
              Computer Science Engineering graduate with hands-on experience in Python, SQL, Machine Learning, and data-driven application development. 
              Worked on projects involving data analysis, predictive modeling, deep learning, and AI-powered solutions.
            </p>

            <div class="hero-buttons" style="animation-delay: 0.4s">
              <a href="#contact" class="btn btn-primary">Get In Touch</a>
              <a href="/resume.pdf" download class="btn btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
            </div>

            <div class="hero-social" style="animation-delay: 0.5s">
              <a href="https://github.com/Krishnaa81" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/krishnareddybattula/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.74 1.394 3.74 4.389v5.595zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.769-1.708 1.958-1.708 1.187 0 1.912.753 1.937 1.708 0 .949-.75 1.707-1.98 1.707zm1.581 11.597H3.762V9.683h3.156v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="mailto:krishnareddy9111@gmail.com" class="social-link" aria-label="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>

            <div class="scroll-indicator">
              <div class="scroll-indicator-wheel">
                <div class="scroll-indicator-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  getAbout() {
    return `
      <section id="about">
        <div class="max-w-6xl mx-auto">
          <div class="section-title">
            <h2>About <span class="text-gradient">Me</span></h2>
            <div class="section-divider"></div>
          </div>

          <div class="about-grid">
            <div class="about-image-wrapper">
              <div class="about-image">
                <div class="about-image-inner">
                  <img src="profile.jpg" alt="Krishna Reddy" style="width: 100%; height: 100%; object-fit: cover; border-radius: 1rem;">
                </div>
              </div>
              <div class="about-glow-1"></div>
              <div class="about-glow-2"></div>
            </div>

            <div class="about-content">
              <div class="about-card">
                <h3>Full Stack Developer & Data Analyst</h3>
                <p>
                  Computer Science Engineering graduate (B.Tech completed) with hands-on experience in Python, SQL, Machine Learning, and data-driven application development.
                </p>
                <p>
                  Worked on projects involving data analysis, predictive modeling, deep learning, and AI-powered solutions. Strong analytical and problem-solving skills with an interest in transforming data into meaningful insights and business solutions.
                </p>
              </div>

              <div class="about-stats">
                <div class="stat-card">
                  <div class="stat-card-value">3+</div>
                  <div class="stat-card-label">Projects</div>
                </div>
                <div class="stat-card">
                  <div class="stat-card-value">6+</div>
                  <div class="stat-card-label">Skills</div>
                </div>
                <div class="stat-card">
                  <div class="stat-card-value">100%</div>
                  <div class="stat-card-label">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  getSkills() {
    const skills = [
      { name: 'Python', icon: '🐍', color: 'from-blue-500 to-blue-600', level: 95 },
      { name: 'SQL', icon: '🗄️', color: 'from-green-500 to-green-600', level: 88 },
      { name: 'Java', icon: '☕', color: 'from-red-500 to-red-600', level: 85 },
      { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-500', level: 80 },
      { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-500', level: 75 },
      { name: 'Flask', icon: '🔧', color: 'from-purple-500 to-purple-600', level: 80 }
    ];

    const skillCards = skills.map((skill, index) => `
      <div class="skill-card" style="animation-delay: ${index * 0.1}s">
        <div class="skill-header">
          <div class="skill-icon-wrapper">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-name">${skill.name}</h3>
          </div>
          <span class="skill-percentage">${skill.level}%</span>
        </div>
        <div class="skill-bar-container">
          <div class="skill-bar" data-width="${skill.level}" style="width: 0"></div>
        </div>
      </div>
    `).join('');

    return `
      <section id="skills">
        <div class="max-w-6xl mx-auto">
          <div class="section-title">
            <h2>My <span class="text-gradient">Skills</span></h2>
            <div class="section-divider"></div>
            <p class="section-subtitle">Technologies and tools I've been working with</p>
          </div>

          <div class="skills-grid">
            ${skillCards}
          </div>

          <div class="other-skills">
            <h3>Other Technologies</h3>
            <div class="skills-tags">
              <span class="skill-tag">Pandas</span>
              <span class="skill-tag">NumPy</span>
              <span class="skill-tag">PyTorch</span>
              <span class="skill-tag">Streamlit</span>
              <span class="skill-tag">Data Analysis</span>
              <span class="skill-tag">Git</span>
              <span class="skill-tag">GitHub</span>
              <span class="skill-tag">Google Colab</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  getEducation() {
    return `
      <section id="education">
        <div class="max-w-6xl mx-auto">
          <div class="section-title">
            <h2>My <span class="text-gradient">Education</span></h2>
            <div class="section-divider"></div>
            <p class="section-subtitle">Academic background and achievements</p>
          </div>

          <div class="max-w-3xl mx-auto">
            <div class="education-card">
              <div class="education-header">
                <div class="education-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 10v6m0 0v6m0-6H2m0 0v6m0-6V4m0 0h20M4 4a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2m0 0v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2 0a2 2 0 1 0-4 0m0 0a2 2 0 1 0 4 0"></path>
                  </svg>
                </div>
                <div class="education-info">
                  <h3>Bachelor of Technology ✓</h3>
                  <h4>Computer Science and Engineering</h4>
                  <p class="education-school">Kalasalingam Academy of Research and Education</p>
                  
                  <div class="education-details">
                    <div class="education-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>2022 - 2026</span>
                    </div>
                    <div class="education-detail" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2)); border-color: rgba(16, 185, 129, 0.3)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #10b981">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>CGPA: 8.3/10</span>
                    </div>
                  </div>

                  <p class="education-coursework">
                    <span style="color: #a855f7">Key Coursework:</span> Data Structures, 
                    Algorithms, Database Management, Web Development, Software Engineering
                  </p>
                </div>
              </div>

              <div style="margin-top: 1.5rem">
                <div class="education-progress-label">
                  <span>Academic Progress</span>
                  <span>Degree Completed ✓</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  getProjects() {
    const projects = [
      {
        title: 'SMARTCLINIC AI - Healthcare Management Platform',
        subtitle: 'AI-Powered Doctor Appointment System with Gemini Chatbot',
        description: 'Healthcare management platform with intelligent appointment booking, patient management, and Google Gemini AI chatbot for symptom analysis and medical recommendations. Features multi-user dashboards for patients, doctors, and hospitals.',
        impacts: [
          'AI-powered symptom analysis and healthcare recommendations',
          'Real-time appointment booking and management system',
          'Role-based dashboards for patients, doctors, and hospitals',
          'Location services for finding nearby hospitals'
        ],
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
        backend: ['Python', 'Flask', 'SQL', 'SQLAlchemy'],
        features: ['Google Gemini AI Chatbot', 'Appointment Scheduling', 'Emergency Services', 'Authentication', 'Multi-User System', 'Interactive Maps'],
        emoji: '🏥',
        github: 'https://github.com/Krishnaa81/SMARTCLINIC-AI-Healthcare-Management-Platform',
        image: 'https://images.unsplash.com/photo-1579154204601-01d82b27c9d4?w=800&h=600&fit=crop'
      },
      {
        title: 'Brain Tumor Detection using Swin Transformer',
        subtitle: 'AI-Powered Medical Image Analysis with Deep Learning',
        description: 'Advanced AI system for brain tumor detection using MRI images with Swin Transformer architecture. Achieved 99.08% accuracy with data preprocessing, feature extraction, and model evaluation. Interactive Streamlit application for predictions.',
        impacts: [
          'Achieved 99.08% accuracy in tumor detection',
          'Processed and analyzed MRI image datasets',
          'Real-time prediction visualization interface',
          'Data-driven medical diagnostic support'
        ],
        frontend: ['Streamlit', 'PyTorch'],
        backend: ['Python', 'PyTorch', 'Deep Learning'],
        features: ['Swin Transformer Model', 'Image Preprocessing', 'Feature Extraction', 'Model Evaluation', 'Interactive Visualization'],
        emoji: '🧠',
        github: 'https://github.com/Krishnaa81/brain-tumor-detection',
        image: 'https://images.unsplash.com/photo-1631217314830-4e9eefbb15d8?w=800&h=600&fit=crop'
      },
      {
        title: 'Plant Disease Detection AI',
        subtitle: 'Deep Learning-Based Agricultural Diagnosis System',
        description: 'Intelligent plant disease detection system using CNN and PlantVillage dataset. Classifies 39 plant disease categories with data augmentation and preprocessing. Flask web application with crop recommendations and treatment suggestions.',
        impacts: [
          'Classified 39 plant disease categories with high accuracy',
          'Data-driven agricultural decision support system',
          'Automated crop recommendations and treatments',
          'Integrated data augmentation and preprocessing'
        ],
        frontend: ['Flask', 'HTML5', 'CSS3', 'JavaScript'],
        backend: ['Python', 'PyTorch', 'SQL', 'SQLite'],
        features: ['CNN Deep Learning', 'Data Augmentation', 'Disease Classification', 'Crop Recommendations', 'Treatment Suggestions'],
        emoji: '🌾',
        github: 'https://github.com/Krishnaa81/plant-disease-detection',
        image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop'
      }
    ];

    const projectCards = projects.map((project, index) => `
      <div class="project-item ${index % 2 === 1 ? 'reverse' : ''}">
        <div class="project-image">
          <div class="project-image-glow" style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247))"></div>
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-emoji">${project.emoji}</div>
        </div>

        <div class="project-details">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-subtitle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="13" y1="2" x2="3" y2="14"></line>
                <path d="M3 14v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <polyline points="23 4 23 10 17 10"></polyline>
              </svg>
              <p>${project.subtitle}</p>
            </div>
            <p class="project-description">${project.description}</p>
          </div>

          <div class="project-impact">
            <h4 class="project-impact-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="13" y1="2" x2="3" y2="14"></line>
                <path d="M3 14v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              </svg>
              Key Impact
            </h4>
            <div>
              ${project.impacts.map(impact => `
                <div class="impact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>${impact}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="project-tech">
            <h4 class="tech-stack-title">
              &lt;/&gt;
              Tech Stack
            </h4>
            
            <div class="tech-category">
              <p class="tech-category-label">Frontend:</p>
              <div class="tech-tags">
                ${project.frontend.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
            </div>

            <div class="tech-category">
              <p class="tech-category-label">Backend:</p>
              <div class="tech-tags">
                ${project.backend.map(tech => `<span class="tech-tag" style="background-color: #2a2a2a">${tech}</span>`).join('')}
              </div>
            </div>

            <div class="tech-category">
              <p class="tech-category-label">Features:</p>
              <div class="tech-tags">
                ${project.features.map(tech => `<span class="tech-tag" style="background-color: #1a1a1a">${tech}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="project-buttons">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-demo" style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247))">
              View Code
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a href="#" class="btn-code">
              View Live Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <section id="projects">
        <div class="max-w-7xl mx-auto">
          <div class="section-title">
            <h2>Featured <span class="text-gradient">Projects</span></h2>
            <div class="section-divider"></div>
            <p class="section-subtitle">Some of my recent work and academic projects</p>
          </div>

          <div class="projects-container">
            ${projectCards}
          </div>
        </div>
      </section>
    `;
  }

  getContact() {
    return `
      <section id="contact">
        <div class="max-w-6xl mx-auto">
          <div class="section-title">
            <h2>Get In <span class="text-gradient">Touch</span></h2>
            <div class="section-divider"></div>
            <p class="section-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>

          <div class="contact-grid">
            <div>
              <div class="contact-info-card">
                <h3>Contact Information</h3>
                <div class="contact-items">
                  <a href="mailto:krishnareddy9111@gmail.com" class="contact-item">
                    <div class="contact-item-icon" style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(34, 211, 238))">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div class="contact-item-content">
                      <h4>Email</h4>
                      <p>krishnareddy9111@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+919392713452" class="contact-item">
                    <div class="contact-item-icon" style="background: linear-gradient(135deg, rgb(34, 197, 94), rgb(20, 184, 166))">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div class="contact-item-content">
                      <h4>Phone</h4>
                      <p>+91 93927 13452</p>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/krishnareddybattula/" target="_blank" rel="noopener noreferrer" class="contact-item">
                    <div class="contact-item-icon" style="background: linear-gradient(135deg, rgb(168, 85, 247), rgb(236, 72, 153))">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.74 1.394 3.74 4.389v5.595zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.769-1.708 1.958-1.708 1.187 0 1.912.753 1.937 1.708 0 .949-.75 1.707-1.98 1.707zm1.581 11.597H3.762V9.683h3.156v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </div>
                    <div class="contact-item-content">
                      <h4>LinkedIn</h4>
                      <p>linkedin.com/in/krishnareddybattula</p>
                    </div>
                  </a>
                </div>
              </div>

              <div class="contact-extra-card">
                <h3>Let's Connect!</h3>
                <p>
                  I'm currently looking for new opportunities and exciting projects to work on. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
            </div>

            <div class="contact-message-card">
              <h3>Send Me a Message</h3>
              <form class="contact-form">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
                </div>

                <button type="submit" class="btn-submit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  getFooter() {
    const currentYear = new Date().getFullYear();
    return `
      <footer>
        <div class="footer-content">
          <div class="footer-grid">
            <div class="footer-section footer-section-brand">
              <h3 class="text-gradient">Krishna Reddy</h3>
              <p>
                Passionate Full Stack Developer focused on creating impactful web applications
                and continuously learning new technologies.
              </p>
            </div>

            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul class="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Connect With Me</h4>
              <div class="footer-social">
                <a href="https://github.com/Krishnaa81" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/krishnareddybattula/" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.74 1.394 3.74 4.389v5.595zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.769-1.708 1.958-1.708 1.187 0 1.912.753 1.937 1.708 0 .949-.75 1.707-1.98 1.707zm1.581 11.597H3.762V9.683h3.156v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="mailto:krishnareddy9111@gmail.com" class="footer-social-link" aria-label="Email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="footer-credit">
              Made with 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              by <span class="text-gradient">Krishna Reddy</span>
            </p>
            <p class="footer-copyright">&copy; ${currentYear} All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

// Initialize portfolio when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Portfolio();
});
