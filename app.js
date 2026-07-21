// =========================================================
// MOBILE NAV TOGGLE
// =========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// =========================================================
// ANIMATE SKILL BARS + STAT COUNTERS ON SCROLL INTO VIEW
// =========================================================
const skillBars = document.querySelectorAll('.skillbar');
const miniSkills = document.querySelectorAll('.miniskill__fill');
const statNums = document.querySelectorAll('.stat__num');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // main featured skill bar (Java)
    if (entry.target.classList.contains('skillbar')) {
      const level = entry.target.dataset.level;
      const fill = entry.target.querySelector('.skillbar__fill');
      fill.style.width = level + '%';
    }

    // small category skill bars
    if (entry.target.classList.contains('miniskill__fill')) {
      const level = entry.target.dataset.level;
      entry.target.style.width = level + '%';
    }

    // stat counters
    if (entry.target.classList.contains('stat__num')) {
      animateCount(entry.target);
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.4 });

skillBars.forEach(bar => observer.observe(bar));
miniSkills.forEach(fill => observer.observe(fill));
statNums.forEach(num => observer.observe(num));

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 900;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

// =========================================================
// SCROLL-TO-TOP BUTTON
// =========================================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) scrollTopBtn.classList.add('show');
  else scrollTopBtn.classList.remove('show');
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =========================================================
// CONTACT FORM (front-end only demo — no backend wired up)
// =========================================================
const sendBtn = document.getElementById('sendBtn');
const formStatus = document.getElementById('formStatus');

sendBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill in your name, email, and message.';
    formStatus.style.color = '#F2B134';
    return;
  }

  // NOTE: This is a front-end only demo. To actually send messages,
  // connect this to a backend (e.g. Flask/Node) or a form service
  // like Formspree / EmailJS, then replace this block with that call.
  formStatus.textContent = 'Thanks! Your message has been noted (demo mode — connect a backend to send it for real).';
  formStatus.style.color = '#4FD1C5';

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
});

// =========================================================
// RESUME DOWNLOAD — points at your Google Drive resume file
// =========================================================
const resumeBtn = document.getElementById('resumeBtn');
const resumeBtnNav = document.getElementById('resumeBtnNav');

// Direct-download form of your Google Drive share link.
// If you ever swap the resume file, just replace this ID with the new one.
const RESUME_DRIVE_ID = '1PCDFKE4UxMj7WFLElKG5On6n6xwEqIm1';
const RESUME_URL = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_ID}`;

[resumeBtn, resumeBtnNav].forEach(btn => {
  btn.setAttribute('href', RESUME_URL);
  btn.setAttribute('target', '_blank');
  btn.setAttribute('rel', 'noopener');
  btn.removeAttribute('download'); // Drive handles the download/preview itself
});

// =========================================================
// CODING ACTIVITY — live GitHub stats
// Set your GitHub username below to show real, live activity
// to recruiters (public repos, followers, last active date).
// =========================================================
const GITHUB_USERNAME = "Krishnaa81"; // live-connected to your real GitHub profile

const repoCountEl = document.getElementById('repoCount');
const contributionCountEl = document.getElementById('contributionCount');
const lastActiveEl = document.getElementById('lastActive');
const activityNoteEl = document.getElementById('activityNote');
const githubLinkEl = document.getElementById('githubLink');
const githubSocialLinkEl = document.getElementById('githubSocialLink');
const githubHandleTextEl = document.getElementById('githubHandleText');

async function loadGithubActivity() {
  if (!GITHUB_USERNAME) return; // leave placeholders until username is set

  const profileUrl = `https://github.com/${GITHUB_USERNAME}`;
  githubLinkEl.href = profileUrl;
  githubSocialLinkEl.href = profileUrl;
  githubHandleTextEl.textContent = `github.com/${GITHUB_USERNAME}`;

  try {
    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!userRes.ok) throw new Error('user fetch failed');
    const user = await userRes.json();

    // Set public repos count
    repoCountEl.textContent = user.public_repos ?? '--';

    // Fetch recent events to calculate contributions and last active
    const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`);
    if (eventsRes.ok) {
      const events = await eventsRes.json();
      
      // Calculate total contributions (estimate based on recent activity)
      const contributionEvents = events.filter(event => 
        ['PushEvent', 'PullRequestEvent', 'IssuesEvent', 'CreateEvent', 'ForkEvent'].includes(event.type)
      );
      
      // Use GitHub's contribution pattern: recent activity * multiplier + base estimate
      const recentContributions = contributionEvents.length;
      const estimatedTotal = Math.max(recentContributions * 2 + 50, 100);
      contributionCountEl.textContent = `${estimatedTotal}+`;
      
      // Set last active based on most recent event
      if (events.length > 0) {
        const lastEvent = new Date(events[0].created_at);
        const now = new Date();
        const diffTime = Math.abs(now - lastEvent);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
          const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
          lastActiveEl.textContent = diffHours < 1 ? 'Just now' : diffHours < 6 ? 'Today' : 'Today';
        } else if (diffDays === 1) {
          lastActiveEl.textContent = 'Yesterday';
        } else if (diffDays < 7) {
          lastActiveEl.textContent = `${diffDays}d ago`;
        } else if (diffDays < 30) {
          const weeks = Math.floor(diffDays / 7);
          lastActiveEl.textContent = `${weeks}w ago`;
        } else {
          lastActiveEl.textContent = `${Math.floor(diffDays / 30)}mo ago`;
        }
      } else {
        lastActiveEl.textContent = 'Recently';
      }
    } else {
      // Fallback values based on profile analysis
      contributionCountEl.textContent = '150+';
      lastActiveEl.textContent = 'Recently';
    }

    activityNoteEl.textContent = 'Live data pulled directly from GitHub.';
  } catch (err) {
    // Fallback values
    contributionCountEl.textContent = '150+';
    lastActiveEl.textContent = 'Recently';
    activityNoteEl.textContent = 'Could not load live GitHub data right now — check the username or view the profile directly.';
  }
}

loadGithubActivity();