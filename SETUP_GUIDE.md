# 🚀 Quick Setup Guide

## Step 1: Install Dependencies (Already Done!)
The dependencies have been installed. If you need to reinstall:
```bash
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```
Then open your browser to `http://localhost:5173`

## Step 3: Customize Your Portfolio

### Update Personal Information

#### 1. Hero Section (`src/components/Hero.jsx`)
- Line 21: Replace `"Your Name"` with your actual name
- Line 27-30: Update your title and intro text
- Update social media links (GitHub, LinkedIn, Twitter, Email)

#### 2. About Section (`src/components/About.jsx`)
- Lines 32-46: Update your personal background and career goals
- Modify the emoji or add your photo

#### 3. Contact Section (`src/components/Contact.jsx`)
- Line 34: Update your email address
- Line 41: Update your phone number
- Line 48: Update your LinkedIn profile URL
- Update all `href` attributes with your actual links

#### 4. Footer (`src/components/Footer.jsx`)
- Line 71: Replace `"Your Name"` with your name
- Update social media links

#### 5. Projects (`src/components/Projects.jsx`)
- Update GitHub repository URLs
- Update live demo URLs
- Modify project descriptions as needed

### Add Your Resume
Place your resume PDF in the `public` folder and name it `resume.pdf`

## Step 4: Build for Production
```bash
npm run build
```
The built files will be in the `dist` folder.

## Step 5: Deploy

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Option 3: GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```
4. Run: `npm run deploy`

## 🎨 Color Customization

Edit `tailwind.config.js` to change colors:

```js
colors: {
  primary: {
    DEFAULT: '#6366f1',  // Change primary color
    dark: '#4f46e5',
  },
  // Add more custom colors
}
```

## 📝 Tips

1. **Images**: Add images to `src/assets/` folder
2. **Icons**: Using react-icons library, browse at [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)
3. **Animations**: Modify in `tailwind.config.js` under `animation` and `keyframes`
4. **Fonts**: Add Google Fonts in `index.html` and update Tailwind config

## 🐛 Common Issues

### Port already in use
```bash
# Try a different port
npm run dev -- --port 3000
```

### Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Need Help?** Check the main README.md for more detailed information!
