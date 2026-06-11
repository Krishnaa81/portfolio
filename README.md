# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js, Tailwind CSS, and Vite.

## ✨ Features

- 🌙 **Dark Theme UI** - Sleek dark mode design with attractive gradients
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern Design** - Clean and professional interface with smooth animations
- ⚡ **Fast Performance** - Built with Vite for optimal loading speed
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 💫 **Hover Effects** - Interactive elements with beautiful transitions
- 🔄 **Dark Mode Toggle** - Switch between dark and light themes

## 📂 Project Structure

```
portfolio/
├── public/               # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Tech Stack

- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **React Icons** - Icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher recommended)
- npm or yarn

## 🚀 Getting Started

1. **Install Dependencies**

```bash
cd portfolio
npm install
```

2. **Start Development Server**

```bash
npm run dev
```

The application will open at `http://localhost:5173`

3. **Build for Production**

```bash
npm run build
```

4. **Preview Production Build**

```bash
npm run preview
```

## 🎨 Customization

### Personal Information

1. **Update Personal Details** in `src/components/Hero.jsx`:
   - Replace "Your Name" with your actual name
   - Update the intro text
   - Add your social media links

2. **About Section** in `src/components/About.jsx`:
   - Modify the about text to reflect your background
   - Update career goals and skills

3. **Projects** in `src/components/Projects.jsx`:
   - Update project titles, descriptions, and tech stacks
   - Add your GitHub repository links
   - Add live demo URLs

4. **Contact Information** in `src/components/Contact.jsx`:
   - Update email, phone number, and LinkedIn profile
   - Configure form submission (currently shows an alert)

5. **Resume Download**:
   - Add your resume PDF to the `public` folder as `resume.pdf`

### Styling

- Modify colors in `tailwind.config.js`
- Adjust animations and effects in `src/index.css`
- Update gradient colors in component files

## 📱 Sections

### 1. Hero Section
- Name and introduction
- Resume download button
- Social media links
- Animated scroll indicator

### 2. About Me
- Personal background
- Career goals
- Skills overview
- Statistics cards

### 3. Skills Section
- HTML, CSS, JavaScript
- React, Java, SQL
- Progress indicators
- Additional technologies

### 4. Projects Section

- Library Management System
- SAM (Share A Meal)
- Parking Space Booking Website
- GitHub and live demo links

### 5. Contact Section
- Email, phone, LinkedIn
- Contact form
- Social links

## 🎯 Key Features Explained

### Sticky Navbar
The navbar stays at the top of the page while scrolling and becomes semi-transparent with a blur effect.

### Dark Mode Toggle
Switch between dark and light themes using the sun/moon icon in the navbar.

### Smooth Scrolling
Click on navigation links to smoothly scroll to different sections.

### Animations
- Fade-in effects on page load
- Slide-up animations for content
- Hover effects on buttons and cards
- Floating animations for decorative elements

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Mobile menu for small screens
- Optimized layouts for all devices

## 🔧 Configuration Files

### `vite.config.js`
Vite configuration with React plugin

### `tailwind.config.js`
Custom colors, animations, and theme extensions

### `postcss.config.js`
PostCSS configuration for Tailwind CSS

## 📝 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For any questions or suggestions, feel free to reach out through the contact form on the website.

---

**Made with ❤️ using React, Tailwind CSS, and Vite**
