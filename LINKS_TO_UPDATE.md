# 🔗 All Links to Update

This document lists every link/URL in your portfolio that needs to be updated with your actual information.

## 📱 Social Media Links

### GitHub
**Update in these files:**
1. `src/components/Hero.jsx` - Line 15
   ```jsx
   { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
   ```
   Change to: `https://github.com/YOUR-USERNAME`

2. `src/components/Footer.jsx` - Line 11
   ```jsx
   { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
   ```
   Change to: `https://github.com/YOUR-USERNAME`

### LinkedIn
**Update in these files:**
1. `src/components/Hero.jsx` - Line 16
   ```jsx
   { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
   ```
   Change to: `https://linkedin.com/in/YOUR-PROFILE`

2. `src/components/Contact.jsx` - Line 42-49
   ```jsx
   {
     icon: FiLinkedin,
     label: 'LinkedIn',
     value: 'linkedin.com/in/yourprofile',
     href: 'https://linkedin.com/in/yourprofile',
     color: 'from-purple-500 to-pink-500',
   },
   ```
   Change both `value` and `href` to your LinkedIn profile

3. `src/components/Footer.jsx` - Line 12
   ```jsx
   { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
   ```
   Change to: `https://linkedin.com/in/YOUR-PROFILE`

### Twitter
**Update in these files:**
1. `src/components/Hero.jsx` - Line 17
   ```jsx
   { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
   ```
   Change to: `https://twitter.com/YOUR-HANDLE`

2. `src/components/Footer.jsx` - Line 13
   ```jsx
   { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
   ```
   Change to: `https://twitter.com/YOUR-HANDLE`

### Email
**Update in these files:**
1. `src/components/Hero.jsx` - Line 18
   ```jsx
   { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
   ```
   Change to: `mailto:YOUR-EMAIL@example.com`

2. `src/components/Contact.jsx` - Lines 27-34
   ```jsx
   {
     icon: FiMail,
     label: 'Email',
     value: 'your.email@example.com',
     href: 'mailto:your.email@example.com',
     color: 'from-blue-500 to-cyan-500',
   },
   ```
   Change both `value` and `href` to your email

3. `src/components/Footer.jsx` - Line 14
   ```jsx
   { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
   ```
   Change to: `mailto:YOUR-EMAIL@example.com`

## 📞 Contact Information

### Phone Number
**Update in:**
`src/components/Contact.jsx` - Lines 35-41
```jsx
{
  icon: FiPhone,
  label: 'Phone',
  value: '+91 98765 43210',
  href: 'tel:+919876543210',
  color: 'from-green-500 to-teal-500',
},
```
Change both `value` and `href` to your phone number

## 🚀 Project Links

### Project 1: Library Management System

**GitHub:**
`src/components/Projects.jsx` - Line 16
```jsx
github: 'https://github.com/yourusername/library-management',
```
Change to: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`

**Live Demo:**
`src/components/Projects.jsx` - Line 17
```jsx
demo: '#',
```
Change to: `https://your-demo-url.com` or remove if no demo available

### Project 2: SAM (Share A Meal)

**GitHub:**
`src/components/Projects.jsx` - Line 24
```jsx
github: 'https://github.com/yourusername/share-a-meal',
```
Change to: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`

**Live Demo:**
`src/components/Projects.jsx` - Line 25
```jsx
demo: '#',
```
Change to: `https://your-demo-url.com` or remove if no demo available

### Project 3: Parking Space Booking Website

**GitHub:**
`src/components/Projects.jsx` - Line 32
```jsx
github: 'https://github.com/yourusername/parking-booking',
```
Change to: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`

**Live Demo:**
`src/components/Projects.jsx` - Line 33
```jsx
demo: '#',
```
Change to: `https://your-demo-url.com` or remove if no demo available

## 📄 Resume Link

### Resume Download
**Update in:**
`src/components/Hero.jsx` - Line 48
```jsx
<a
  href="/resume.pdf"
  download
```

**Action Required:**
1. Add your `resume.pdf` file to the `public/` folder
2. Name it exactly: `resume.pdf`
3. Link will automatically work

## 🔗 Internal Navigation Links

These are already set up and don't need updating (they use section IDs):

- `#home` → Hero Section
- `#about` → About Section
- `#skills` → Skills Section
- `#projects` → Projects Section
- `#contact` → Contact Section

## ✅ Quick Update Checklist

Copy your actual information below and then update the files:

```
MY INFORMATION:
───────────────
GitHub:    https://github.com/_______________
LinkedIn:  https://linkedin.com/in/_______________
Twitter:   https://twitter.com/_______________
Email:     _______________@_______________
Phone:     +91 _______________

PROJECT 1 (Library Management):
GitHub:    https://github.com/_______________
Demo:      https://_______________

PROJECT 2 (SAM):
GitHub:    https://github.com/_______________
Demo:      https://_______________

PROJECT 3 (Parking):
GitHub:    https://github.com/_______________
Demo:      https://_______________

Resume:    [ ] Added to public/resume.pdf
```

## 🔍 Find & Replace Strategy

Use your code editor's "Find in Files" feature:

### Step 1: Update GitHub
- **Find:** `https://github.com`
- **Replace:** `https://github.com/YOUR-USERNAME`
- **Files:** `src/components/*.jsx`

### Step 2: Update LinkedIn
- **Find:** `linkedin.com/in/yourprofile`
- **Replace:** `linkedin.com/in/YOUR-PROFILE`
- **Files:** `src/components/*.jsx`

### Step 3: Update Email
- **Find:** `your.email@example.com`
- **Replace:** `YOUR-EMAIL@example.com`
- **Files:** `src/components/*.jsx`

### Step 4: Update Twitter
- **Find:** `https://twitter.com`
- **Replace:** `https://twitter.com/YOUR-HANDLE`
- **Files:** `src/components/*.jsx`

### Step 5: Update Phone
- **Find:** `+91 98765 43210`
- **Replace:** `YOUR-PHONE-NUMBER`
- **Files:** `src/components/Contact.jsx`

### Step 6: Update Project GitHub URLs
Manually update each project's GitHub URL in `src/components/Projects.jsx`

### Step 7: Update Project Demo URLs
Manually update each project's demo URL in `src/components/Projects.jsx`

## ⚠️ Important Notes

1. **Email Links:** Use `mailto:` prefix for email links
   - Example: `mailto:john@example.com`

2. **Phone Links:** Use `tel:` prefix with no spaces
   - Example: `tel:+919876543210`

3. **External Links:** Will open in new tab (already configured)
   - Uses: `target="_blank" rel="noopener noreferrer"`

4. **Demo Links:** If you don't have a live demo:
   - Option 1: Set to same as GitHub: `demo: projects[0].github`
   - Option 2: Remove demo button from component
   - Option 3: Keep as `#` (links to top of page)

## 🧪 Testing Your Links

After updating, test each link:

```bash
npm run dev
```

Then check:
- [ ] All social icons in Hero section
- [ ] All social icons in Footer
- [ ] Contact information in Contact section
- [ ] Each project's GitHub button
- [ ] Each project's Demo button
- [ ] Resume download button
- [ ] Email links open email client
- [ ] Phone links open phone app (on mobile)

## 📝 Link Format Examples

### Correct Format:
```jsx
// GitHub
href: 'https://github.com/johnsmith'

// LinkedIn
href: 'https://linkedin.com/in/john-smith-dev'

// Twitter/X
href: 'https://twitter.com/johnsmith'

// Email
href: 'mailto:john.smith@gmail.com'

// Phone (no spaces in href)
href: 'tel:+919876543210'
value: '+91 98765 43210'  // Can have spaces for display

// Demo site
href: 'https://my-project.netlify.app'
```

### Incorrect Format:
```jsx
// ❌ Missing https://
href: 'github.com/johnsmith'

// ❌ Missing mailto:
href: 'john@example.com'

// ❌ Spaces in tel:
href: 'tel:+91 98765 43210'

// ❌ Using # for external links
href: '#'  // Only for internal navigation
```

---

**Pro Tip:** Use VS Code's multi-cursor editing to update multiple occurrences at once!
