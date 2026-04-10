# Site Improvement Roadmap

This document tracks planned improvements for triston.dev. Items are organized by priority and effort level.

## 🔥 High Priority

### 1. Enhanced 404 Page ✅
**Status:** Completed  
**Effort:** Medium  
**Description:** Make the 404 page actually helpful instead of just "Where do you think you're going?"
- [x] Link to popular content (latest blog post, featured projects, thangs)
- [x] Random witty easter egg messages that rotate
- [x] Sitemap link
- [x] Better visual design with card suggestions
- [x] "Take Me Home" button

### 2. Search Functionality
**Status:** Pending  
**Effort:** Medium  
**Description:** Add client-side search as content grows
- [ ] Research Fuse.js vs Pagefind
- [ ] Create search index from posts, projects, thangs
- [ ] Search page at `/search` or inline dropdown in nav
- [ ] Highlight matched terms in results
- [ ] Keyboard shortcut (Cmd/Ctrl + K)

### 3. Table of Contents for Blog Posts
**Status:** Pending  
**Effort:** Medium  
**Description:** Improve readability of long posts
- [ ] Extract headings from MDX content
- [ ] Sticky sidebar TOC on desktop
- [ ] Collapsible dropdown on mobile
- [ ] Auto-highlight current section while scrolling
- [ ] Smooth scroll to section on click
- [ ] "Back to top" link in TOC

---

## ⚙️ Medium Priority (Polish & UX)

### 4. Related Posts
**Status:** Pending  
**Effort:** Low  
**Description:** Show related content at end of blog posts
- [ ] Match by shared keywords/tags (when tags are added)
- [ ] Or use chronological proximity (previous/next posts)
- [ ] Display 2-3 cards with title and summary
- [ ] "Read more" section styling

### 5. Scroll-to-Top Button
**Status:** Pending  
**Effort:** Low  
**Description:** Floating button for long pages
- [ ] Appear after scrolling down 300px
- [ ] Smooth scroll animation
- [ ] Position: bottom-right corner
- [ ] Fade in/out transition

### 6. Code Block Enhancements
**Status:** Pending  
**Effort:** Medium  
**Description:** Improve code readability
- [ ] Copy-to-clipboard button (top-right of code block)
- [ ] Language label badge (e.g., "typescript", "rust")
- [ ] Optional line numbers toggle
- [ ] Show "Copied!" feedback on copy

### 7. Better Image Loading
**Status:** Pending  
**Effort:** Medium  
**Description:** Optimize Thangs page images
- [ ] Blur placeholder while loading (already have low-res version)
- [ ] Lazy load images below the fold
- [ ] Proper aspect ratios to prevent layout shift
- [ ] Maybe add loading="lazy" to existing img tags

### 8. Focus Indicators
**Status:** Pending  
**Effort:** Low  
**Description:** Improve keyboard navigation accessibility
- [ ] Visible focus rings on links
- [ ] Focus styles on buttons
- [ ] Skip-to-content link for screen readers
- [ ] Ensure tab order is logical

---

## 📊 Optional Features (Later)

### 9. Privacy-Friendly Analytics
**Status:** Pending  
**Effort:** Low  
**Description:** Track visits without Google Analytics
- [ ] Research Plausible vs Umami (self-hosted)
- [ ] GDPR compliant (no cookie banner needed)
- [ ] Lightweight script
- [ ] Track: page views, referrers, popular content

### 10. Newsletter Signup
**Status:** Pending  
**Effort:** Low  
**Description:** Let visitors subscribe to updates
- [ ] Simple email form in footer or blog page
- [ ] Options: Buttondown, ConvertKit, or Google Form (start simple)
- [ ] Confirmation message
- [ ] Link to it from RSS section ("Get updates via email")

### 11. Comments (Giscus)
**Status:** Pending  
**Effort:** Medium  
**Description:** GitHub Discussions powered comments
- [ ] Set up GitHub Discussions for the repo
- [ ] Install Giscus app
- [ ] Add comment section to blog posts
- [ ] Configure theme to match site (dark)
- [ ] Lazy load comments (only when scrolled to)

### 12. PWA Manifest
**Status:** Pending  
**Effort:** Low  
**Description:** Make site installable as an app
- [ ] Create `manifest.json`
- [ ] Add icon sizes (192x192, 512x512)
- [ ] Set theme colors (match site)
- [ ] Skip service worker for now (static site works fine offline anyway)

### 13. Print Stylesheet
**Status:** Pending  
**Effort:** Low  
**Description:** Clean print view for articles
- [ ] Hide navigation, footer, social icons
- [ ] Clean typography for reading
- [ ] Show URLs after links (using `a[href]::after { content: " (" attr(href) ")" }`)
- [ ] Ensure proper page breaks

---

## 📝 Notes

### Completed Improvements
- ✅ Fixed "Kitchen2" typo
- ✅ Avatar accessibility (aria-label, title)
- ✅ Fixed hydration mismatch (deterministic IDs)
- ✅ Reading time calculation on blog posts
- ✅ JSON-LD structured data (SEO)
- ✅ Sitemap.xml generation
- ✅ Robots.txt
- ✅ RSS feed generation
- ✅ Social links in bio section + footer
- ✅ Vite plugin for dev/build RSS & sitemap
- ✅ Enhanced 404 page with witty messages, content suggestions, sitemap link

### Ideas for Later
- Tag system for blog posts
- Series/collections (e.g., "Linux Journey")
- Dark/light mode toggle (currently dark only)
- View transitions for more elements
- OpenGraph image generation
- Web mentions / IndieWeb features
