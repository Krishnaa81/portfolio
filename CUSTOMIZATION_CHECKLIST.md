# ✅ Customization Checklist

Use this checklist to personalize your portfolio website.

## 🔴 Critical (Must Do)

### Hero Section (`src/components/Hero.jsx`)
- [ ] Line 21: Replace `"Your Name"` with your actual name
- [ ] Line 27: Update `"Software Developer"` with your preferred title
- [ ] Lines 30-32: Rewrite the introduction paragraph
- [ ] Lines 15-18: Update social media links:
  - [ ] GitHub URL
  - [ ] LinkedIn URL
  - [ ] Twitter URL
  - [ ] Email address

### About Section (`src/components/About.jsx`)
- [ ] Lines 32-46: Rewrite your personal background and career goals
- [ ] Optionally replace the emoji (👨‍💻) with your photo

### Projects Section (`src/components/Projects.jsx`)
- [ ] Update all three projects:
  - [ ] Library Management System:
    - [ ] Line 16: GitHub URL
    - [ ] Line 17: Live demo URL
  - [ ] SAM Project:
    - [ ] Line 24: GitHub URL
    - [ ] Line 25: Live demo URL
  - [ ] Parking Booking:
    - [ ] Line 32: GitHub URL
    - [ ] Line 33: Live demo URL

### Contact Section (`src/components/Contact.jsx`)
- [ ] Line 34: Update email address (appears 2 times)
- [ ] Line 41: Update phone number (both display and href)
- [ ] Line 48: Update LinkedIn profile URL (both display and href)

### Footer (`src/components/Footer.jsx`)
- [ ] Line 71: Replace `"Your Name"` with your name
- [ ] Lines 11-14: Update all social media links

### Resume
- [ ] Add your `resume.pdf` file to the `public/` folder

## 🟡 Important (Should Do)

### Project Descriptions
- [ ] `src/components/Projects.jsx` - Customize project descriptions
- [ ] Add more details about what you built
- [ ] Mention your specific contributions

### Skills Levels
- [ ] `src/components/Skills.jsx` - Adjust skill percentages if needed
- [ ] Lines 9-44: Update the `level` values (0-100)

### Meta Tags
- [ ] `index.html` - Update page title and description
- [ ] Line 7: Change title from "Portfolio | Software Developer"

### About Me Statistics
- [ ] `src/components/About.jsx`
- [ ] Lines 51-69: Update the statistics cards if needed

## 🟢 Optional (Nice to Have)

### Add Your Photo
1. Add your photo to `src/assets/` folder
2. Import it in `src/components/About.jsx`:
   ```jsx
   import profilePhoto from '../assets/your-photo.jpg'
   ```
3. Replace the placeholder div with:
   ```jsx
   <img src={profilePhoto} alt="Your Name" className="w-full h-full object-cover rounded-xl" />
   ```

### Add Project Images
1. Add project screenshots to `src/assets/`
2. Import and display them in `src/components/Projects.jsx`

### Customize Colors
- [ ] Edit `tailwind.config.js`
- [ ] Update gradient colors in components

### Add Favicon
- [ ] Replace `public/vite.svg` with your own favicon
- [ ] Update reference in `index.html`

### Form Backend
- [ ] Set up form submission (currently shows alert)
- [ ] Options:
  - EmailJS
  - Formspree
  - Netlify Forms
  - Custom backend

## 🎨 Styling Customization

### Primary Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    DEFAULT: '#6366f1',  // Change this
    dark: '#4f46e5',     // And this
  },
}
```

### Gradient Colors
Search and replace in components:
- `from-blue-500` → your color
- `to-purple-600` → your color
- `to-pink-500` → your color

## 📝 Content Writing Tips

### Hero Section
- Keep it concise (2-3 sentences)
- Highlight your main skill/passion
- Make it engaging

### About Section
- Paragraph 1: Your background and education
- Paragraph 2: Your technical skills and interests
- Paragraph 3: Your career goals and aspirations

### Projects
For each project:
- What problem does it solve?
- What technologies did you use?
- What did you learn?

## 🔍 Testing Checklist

After customization:
- [ ] Run `npm run dev` and test locally
- [ ] Check all links work
- [ ] Test on mobile device/responsive mode
- [ ] Verify resume downloads correctly
- [ ] Test contact form
- [ ] Check social media links
- [ ] Verify all text is grammatically correct
- [ ] Test dark mode toggle
- [ ] Check smooth scrolling
- [ ] Verify all buttons have hover effects

## 🚀 Pre-Deployment Checklist

- [ ] All personal info updated
- [ ] All links tested and working
- [ ] Resume PDF added and accessible
- [ ] No placeholder text remaining
- [ ] Images optimized for web
- [ ] Built successfully (`npm run build`)
- [ ] Tested production build (`npm run preview`)
- [ ] All console errors fixed

## 📧 Search and Replace Guide

Use your code editor's search and replace feature:

| Search For | Replace With |
|------------|-------------|
| `Your Name` | Your actual name |
| `your.email@example.com` | Your real email |
| `+91 98765 43210` | Your phone number |
| `linkedin.com/in/yourprofile` | Your LinkedIn |
| `https://github.com/yourusername` | Your GitHub profile |

## 💡 Pro Tips

1. **Keep it Simple**: Don't overload with too much information
2. **Be Consistent**: Use the same tone throughout
3. **Show, Don't Tell**: Projects speak louder than descriptions
4. **Keep Updated**: Regularly add new projects and skills
5. **Test Everything**: Click every button and link
6. **Get Feedback**: Ask friends/mentors to review
7. **Mobile First**: Most visitors will view on mobile

## 🎯 Priority Order

1. Update name and contact info (5 minutes)
2. Add resume PDF (1 minute)
3. Update social links (2 minutes)
4. Customize about section (10 minutes)
5. Update project URLs (5 minutes)
6. Adjust project descriptions (15 minutes)
7. Test everything (10 minutes)
8. Deploy! (5 minutes)

**Total Time**: ~1 hour for complete customization

---

**Ready to Deploy?** See `SETUP_GUIDE.md` for deployment instructions!
