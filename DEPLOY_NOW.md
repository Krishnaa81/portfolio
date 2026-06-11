# 🚀 Deploy Your Portfolio - Step by Step

## ⚡ Fastest Option: Vercel (Recommended)

### Step 1: Build Your Project First
```bash
cd portfolio
npm run build
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Website (Easiest!)

1. **Go to** https://vercel.com
2. **Sign Up** with your GitHub account
3. **Click** "Add New" → "Project"
4. **Import** your repository (or upload the dist folder)
5. **Click** "Deploy"
6. **Done!** You'll get a URL like: `your-portfolio.vercel.app`

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd portfolio
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? krishna-portfolio
# - Directory? ./
# - Auto-detected: Vite

# For production deployment
vercel --prod
```

**You'll get a URL like:**
- `https://krishna-portfolio.vercel.app`
- Or custom domain you can set up later

---

## 🌐 Option 2: Netlify (Also Easy!)

### Step 1: Build Your Project
```bash
cd portfolio
npm run build
```

### Step 2: Deploy to Netlify

#### Method A: Drag & Drop (Super Easy!)

1. **Go to** https://www.netlify.com
2. **Sign Up** with GitHub/Email
3. **Drag and drop** your `dist` folder to Netlify
4. **Done!** You get a URL like: `random-name.netlify.app`
5. **Change name:** Site settings → Change site name → `krishna-portfolio`

#### Method B: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
cd portfolio
npm run build
netlify deploy

# Follow prompts:
# - Create new site? Yes
# - Team? Your team
# - Site name? krishna-portfolio
# - Publish directory? dist

# For production
netlify deploy --prod
```

**You'll get a URL like:**
- `https://krishna-portfolio.netlify.app`

---

## 📦 Option 3: GitHub Pages (Free!)

### Step 1: Install gh-pages

```bash
cd portfolio
npm install -D gh-pages
```

### Step 2: Update package.json

Add to your `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'  // Replace 'portfolio' with your repo name
})
```

### Step 4: Deploy

```bash
# Make sure you've pushed to GitHub first
git add .
git commit -m "Ready to deploy"
git push

# Deploy to GitHub Pages
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your GitHub repo
2. Settings → Pages
3. Source: `gh-pages` branch
4. **Your URL:** `https://yourusername.github.io/portfolio/`

---

## 🎯 Quick Comparison

| Platform | Speed | Custom Domain | Best For |
|----------|-------|---------------|----------|
| **Vercel** | ⚡ Fastest | ✅ Free | Everyone (Recommended) |
| **Netlify** | ⚡ Fast | ✅ Free | Easy drag-drop |
| **GitHub Pages** | 🐢 Slower | ✅ Free | GitHub projects |

---

## 🚀 Recommended: Deploy with Vercel Right Now!

### Super Quick Steps:

1. **Open Terminal:**
   ```bash
   cd portfolio
   npm run build
   ```

2. **Go to** https://vercel.com

3. **Sign in with GitHub**

4. **Click** "Add New" → "Project"

5. **Select** "Import Git Repository" or "Upload Project"

6. **Wait 1-2 minutes** for deployment

7. **Get your URL:** `https://your-name.vercel.app`

8. **Share your portfolio!** 🎉

---

## 📝 After Deployment Checklist

- [ ] Test your live site URL
- [ ] Check all sections load correctly
- [ ] Click all links (GitHub, LinkedIn, Email)
- [ ] Test on mobile (open URL on phone)
- [ ] Test contact form
- [ ] Check resume download button
- [ ] Share with friends for feedback!

---

## 🎨 Custom Domain (Optional)

After deploying, you can add a custom domain:

**Vercel:**
1. Project Settings → Domains
2. Add your domain (e.g., `krishnareddy.com`)
3. Follow DNS setup instructions

**Netlify:**
1. Domain Settings → Add custom domain
2. Follow DNS configuration steps

**Cost:** Domain names ~$10-15/year from:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

---

## 🔄 How to Update Your Site

After making changes:

**Vercel/Netlify:**
```bash
git add .
git commit -m "Update portfolio"
git push
```
→ Auto-deploys in 1-2 minutes!

**GitHub Pages:**
```bash
npm run deploy
```

---

## 💡 Tips

1. **Test locally first:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check build output:**
   - Look for `dist` folder
   - Should have index.html, assets folder

3. **Common issues:**
   - If images don't load, check file paths
   - If links broken, check base URL in vite.config.js
   - Clear browser cache if changes don't appear

---

## 📱 Share Your Portfolio

Once deployed, add your URL to:

✅ **Resume** (Top section, contact info)
✅ **LinkedIn** (Featured section)
✅ **GitHub** (Profile README, repo description)
✅ **Email Signature**
✅ **Job Applications**
✅ **Business Cards**

**Example:**
```
Krishna Reddy
Full Stack Developer
Portfolio: https://krishna-portfolio.vercel.app
GitHub: https://github.com/Krishnaa81
LinkedIn: https://linkedin.com/in/krishnareddybattula
```

---

## 🎉 You're Ready!

Choose your deployment method and let's get your portfolio live!

**My Recommendation:**
1. Start with **Vercel** (fastest, easiest)
2. Build your project: `npm run build`
3. Go to vercel.com and sign in
4. Deploy in 2 minutes
5. Share your link everywhere!

Need help? Check the error messages or let me know! 🚀

---

## 🆘 Troubleshooting

**Build fails:**
```bash
# Clear and reinstall
rm -rf node_modules dist
npm install
npm run build
```

**"Cannot find module" error:**
```bash
npm install
```

**Port already in use:**
```bash
# Kill the process and try again
npm run build
```

**Changes not showing:**
- Clear browser cache (Ctrl+F5)
- Wait 2-3 minutes for deployment
- Check deployment logs on platform

---

**Good luck with your deployment, Krishna!** 🎊

Your portfolio will be live and shareable in minutes!
