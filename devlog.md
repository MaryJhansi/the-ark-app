# 📓 The Ark — Dev Log

A daily learning journal documenting my progress building The Ark website.

---

## Day 1 — March 29, 2026

### ✅ What I Built
- HTML boilerplate for the project
- Navbar with logo, navigation links
- Responsive hamburger menu with JavaScript toggle

### 🧠 What I Learned
- HTML parent/child/sibling relationships
- Flexbox layout with `display: flex`, `justify-content`, `align-items`
- CSS media queries for responsive design (`max-width: 768px`)
- JavaScript DOM manipulation — `querySelector`, `addEventListener`, `classList.toggle`
- Git basics — `init`, `add`, `commit`, `push`

### 🚧 Challenges
- Hamburger showing on desktop — fixed by moving `display: block` inside media query
- Wrong querySelector selector (`.nav-links.active`) — fixed to `.nav-links`
- Git push authentication — solved with Personal Access Token

---

## Day 2 — March 31, 2026

### ✅ What I Built
- Hero section with gradient background
- Google Fonts (Playfair Display + Lato)
- Hero tag label, CTA button with hover effect
- Animated GIF hero image
- CSS variables (`:root`)

### 🧠 What I Learned
- CSS custom properties (`--navy`, `--gold`, `--purple`)
- `linear-gradient` for backgrounds
- `rem` units vs `px`
- `flex: 1` for equal column layout
- Git branching — `checkout -b`, `merge`, `push origin branch`
- How the browser renders HTML (DOM, CSSOM, Render Tree)

### 🚧 Challenges
- Hero image floating instead of anchored right — fixed with `justify-content: flex-end`
- Git setup on office machine — solved with `git fetch` and `git checkout -f`

---

## Day 3 — April 1, 2026

### ✅ What I Built
- About section with centered brand story
- Three value cards (Quality, Creativity, Joy)
- Hover lift effect on cards

### 🧠 What I Learned
- `line-height` for readable body text
- `transform: translateY()` for hover effects
- Git pull before push when working across machines
- Importance of matching font imports with usage

### 🚧 Challenges
- Montserrat font not loading — font wasn't imported
- Git push rejected — fixed with `git pull` first
- Working across two machines — learned to always pull first

---
## Day 4 — April 6, 2026

### ✅ What I Built
- Updated value card icons (🏅 Quality, 🌟 Creativity, 🌞 Joy)
- Adjusted hero image size (max-width: 1000px, max-height: 65vh)

### 🧠 What I Learned
- Commit messages should start with a present tense verb
  e.g. "Update icons" not "Changed icons"
- Small tweaks to completed sections can be committed 
  directly to master — no need for a new branch
- `max-height: vh` units control image height 
  relative to screen size

### 🚧 Challenges
- Hero image felt visually off — adjusted sizing 
  until it felt balanced
- Learning to write better commit messages

### 💡 Tip I Learned
> Small style fixes → commit to master directly
> New sections → always create a feature branch

---

### ✅ What I Built
- 

### 🧠 What I Learned
- 

### 🚧 Challenges
- 

---
## Day 5 — May 18, 2026

### ✅ What I Built

* Refined The Ark into a professional business landing page
* Removed ecommerce and Add to Cart functionality
* Added bulk-order-focused sections
* Added WhatsApp lead generation CTA
* Improved testimonials and category sections
* Added social media placeholder interactions
* Improved branding and business positioning

### 🧠 What I Learned

* Difference between ecommerce websites and lead generation websites
* Importance of UX clarity and business-focused design
* Structuring websites around customer goals
* Better Git commit practices
* Using AI tools like Claude to accelerate frontend workflows

### 🚧 Challenges

* Understanding which website sections were unnecessary
* Balancing creative design with professional business branding
* Refining layouts for cleaner user experience
* Managing Git commits and branches correctly

## June 24, 2026

### ✅ What I Built
- Tagged v1.0 release on GitHub
- Updated README with live site link and version history
- Set up feature/netlify-backend branch for v2.0 development

### 🧠 What I Learned
- How to create and push Git tags (`git tag -a v1.0`)
- Git tags permanently mark a version in history
- Difference between a branch (ongoing work) and a tag (a snapshot)
- Versioning strategy: master = stable, feature branch = development

### 🚧 Challenges
- Understanding when to work on master vs feature branch
- Realising favicon was missed before deployment (fixing in v2.0)

### 💡 Tip I Learned
> Always tag your releases — it creates a permanent 
> snapshot you can return to anytime.

## Day 7 — May 21, 2026

### ✅ What I Built
- Added custom favicon (gold pen nib icon, designed in Canva)
- Connected custom domain thearkblr.in to Netlify
- Enabled HTTPS/SSL — site now live at https://thearkblr.in
- Regenerated expiring GitHub Personal Access Token
- Replaced favicon with refined the-ark.png logo version

### 🧠 What I Learned
- Favicons need to be small (512x512px works, browser scales it down) 
  and simple — full logos with text don't read well at tiny sizes
- How to design a circular favicon in Canva using a background shape
- DNS records (A record + CNAME) connect a domain to a hosting provider
- The difference between A records, CNAME records, and MX records — 
  and why MX/email records must never be touched when updating website DNS
- DNS propagation isn't instant — it can take minutes to hours to verify worldwide
- Netlify automatically issues free SSL certificates once DNS is verified
- GitHub Personal Access Tokens expire and must be regenerated periodically
- Always paste tokens directly into the terminal/Git prompt — never into 
  chat or notes, since a token shown elsewhere should be treated as compromised

### 🚧 Challenges
- Found my domain was actually managed through Squarespace Domains 
  (not Google Domains directly) — took a few tries to find the right DNS panel
- Accidentally typed `git push original` instead of `git push origin` — 
  small typos can cause confusing errors
- Committed changes to the wrong branch (master instead of feature branch) 
  — but caught it with `git status` before pushing
- SSL certificate didn't provision on the first try — just needed to wait 
  for DNS to fully propagate before retrying

### 💡 Tip I Learned
> Always run `git status` before pushing if something seems off — 
> it tells you exactly which branch you're on and what's staged.