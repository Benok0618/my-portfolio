ROLE

You are a senior front-end engineer and designer. Build a personal developer portfolio as a fully static website. It must look like a futuristic "terminal meets HUD" interface with animation throughout, especially on the landing page.

NON-NEGOTIABLE RULES

- Static only. Final build is `npx nuxi generate`, output in `dist/`. No server routes, no database, no Nitro cloudflare preset, no D1.

- Stack: latest stable Nuxt + Vue 3 + TypeScript, `@nuxt/content` (v3, collections). Before using any Nuxt or Nuxt Content API, check the current official docs ([nuxt.com](http://nuxt.com), [content.nuxt.com](http://content.nuxt.com)) instead of relying on memory. Nuxt 4 may use an `app/` source directory: detect it and place pages, components, composables and assets accordingly. `content/` and `content.config.ts` stay at the project root.

- Styling: plain class-based CSS in one shared `assets/css/app.css` with CSS variables. No Tailwind, no scoped styles, no UI libraries, no CSS-in-JS.

- Animation: CSS keyframes/transitions plus small composables (`useReveal` with IntersectionObserver, `useTypewriter`, `useCountUp`, `useTilt`). No GSAP, Three.js, Lottie or video. Every animation must be disabled or reduced under `prefers-reduced-motion`.

- Fonts: self-hosted via `@fontsource` (JetBrains Mono for headings/labels, Inter for body). No third-party runtime scripts, no analytics, no CDNs.

- Code comments: minimal to none.

- Never invent facts. Anything marked \[TODO\] stays as a visible placeholder, and list every remaining TODO in your final summary.

- Do not ask me questions unless truly blocked. Make sensible decisions and report them.

- Privacy: do NOT include home address, date/place of birth, gender, nationality or character references anywhere.

DESIGN SYSTEM

- Colors: bg #0a0c10, bg-alt #0f1115, surface #151922, border #2a2d34, accent #5eead4, accent-2 #8b5cf6, text #e8e8ea, muted #9aa0a6.

- Glass panels with 1px glowing borders, corner brackets on cards, subtle noise/scanline overlay, soft neon glows.

- Section labels in mono caps with a comment style: `// ABOUT`, `// EXPERIENCE`, `// PROJECTS`, `// CONTACT`.

- Max width 1120px, 12-column grid, sticky translucent nav (Home, About, Experience, Projects, Contact) with active-section highlight and a thin scroll-progress bar.

- If I attach Stitch design screens, match them. Otherwise follow this spec.

SECTIONS

1. HERO (full viewport, animated)

   - Left: status chip "● Open to opportunities", name "Lennox Luis Omaña" with typewriter effect and blinking cursor, rotating role line (Full-stack Developer / Laravel + Vue Engineer / Health-Tech Builder / Video Editor), 2-3 sentence bio, buttons: View Projects, Contact Me.

   - Right: my profile photo `public/images/profile.webp` in a circular frame with an animated rotating gradient ring, orbiting tech badges (Laravel, Vue, Inertia, PHP, MySQL, Python), and a floating code-snippet card. Until the photo exists, show an initials avatar ("LO").

   - Background: animated perspective grid, drifting CSS-only particles, radial glow behind the photo.

   - Load sequence: staggered fade-up, ring draws itself, then typewriter starts.

2. ABOUT: terminal-window card typed out as command output (name, role, location "Los Baños, Laguna, Philippines", education, stack, languages: Tagalog, English). Next to it, count-up stats: 3 flagship systems; years building since 2021 (computed from 2021); 3 government offices served (DOST-CALABARZON, Municipal Health Office RHU1, PESO).

3. EXPERIENCE: animated vertical timeline (below).

4. PROJECTS: three large featured project entries (RHUIS, ASSIST, VAPETHRIFT) with a stylized CSS/SVG dashboard mockup, status chip, period, role, description, key-feature list, tech chips and links. Then a compact "More projects" grid, then an awards strip.

5. SKILLS: grouped chips (Backend / Frontend / Data &amp; ML / Tools / Creative) with hover glow.

6. EDUCATION: two entries.

7. CONTACT + FOOTER: heading "Let's build something", glowing contact cards with icon, label, value and copy-to-clipboard feedback. No form. Footer with © year, "Built with Nuxt", back-to-top.

CONTENT (use exactly this; do not embellish)

Bio: Computer Science graduate (LSPU Los Baños, 2025) who builds full-stack systems for government and health offices with Laravel, Vue 3 and Inertia.js. Experience in web development, machine learning and technical support, plus an award-winning video editor.

Experience:

- IT Specialist / Full-stack Developer, Municipal Health Office (RHU1) Los Baños, Sept 2025 – Present: leads the full-stack redevelopment of the Rural Health Unit Information System (Laravel, Vue.js, Inertia.js, PrimeVue); modernizes the system while keeping compatibility with current RHU workflows; provides troubleshooting and technical support for MHO employees.

- MIS Staff (Internship), DOST-CALABARZON Regional Office, Feb 2025 – May 2025: developed ASSIST, a ticketing system for service requests (data override, password reset, inquiries) in Laravel PHP; handled backend development covering ticket creation, assignment, tracking and resolution; assisted with technical services.

- Freelance Software / Web Developer, 2021 – Present: delivered client projects (PESO web-based system, Katy Coffee e-commerce site) using PHP, JavaScript and Python; backend logic, database design and deployment for small-business and government clients.

- Also: Creative Head (Video Editing) and earlier Promotional Head, Legion of Lures, LSPU Los Baños (2021 – 2024).

Featured projects (one Markdown file each in `content/projects/`, collection `projects`, schema: tech[], status, period, role, link?, repo?, order, accent):

1. RHUIS v2 (Rural Health Unit Information System), 2025 – Present, status "In active development", role Lead full-stack developer, for RHU-MHO Los Baños. Full-stack rebuild covering patient records, queuing, consultations, immunization, laboratory, medicine inventory and PhilHealth integration. Real-time updates with Laravel Reverb; ICD-10 notifiable-disease classification service; inter-station inventory transfers with live stock sync; security hardening with a custom CSP, attack-detection middleware and a security event logging dashboard. Tech: Laravel, Vue 3, Inertia.js, PrimeVue, Reverb, Meilisearch, MySQL. No public link (internal system). NEVER show real patient data; mockups only.

2. ASSIST (Assistance &amp; Support Services for Information System Technologies), Feb – May 2025, status "Delivered", role Developer (MIS intern), for DOST-CALABARZON. A ticketing system that supports and integrates with the office's information systems: handles user inquiries, technical issues and service requests by streamlining ticket creation, assignment, tracking and resolution, improving communication and response times. Tech: Laravel, PHP, MySQL. No public link.

3. VAPETHRIFT (Vape Thrift Suki Card Scanning), 2024, status "Completed", role Developer. A mobile app for managing customer loyalty points: create, view and delete customer point records, track transaction dates, and generate QR codes for fast tracking. Tech: \[TODO: stack\]. Repo: [https://github.com/ZhyKazer/SukiSystem](https://github.com/ZhyKazer/SukiSystem)

More projects (compact cards, no screenshots): Katy Coffee e-commerce web system (PHP, JavaScript, commissioned, deployed); PESO web-based system (member of the dev team, back-end); Job Recommendation Model (unsupervised K-means clustering); Facial Recognition Attendance (Haar Cascade + Local Binary Pattern Histogram, single class photo); Stray Cat Reproduction Simulation (agent-based model on GAMA).

Awards strip: 1st Place, Video Editing, "The Future is on Us" (Supreme Student Council of Computer Studies, LSPU-LB), link [https://www.facebook.com/lspulbccssc/videos/356909886170632](https://www.facebook.com/lspulbccssc/videos/356909886170632); Certificate of Completion, DOST-CALABARZON; Service Award, Legion of Lures (Creative Head, Video Editing), LSPU Los Baños.

Skills: Languages: Python, JavaScript, PHP, HTML/CSS, SQL (MySQL, PostgreSQL). Frameworks/tools: Laravel, Vue.js, Inertia.js, PrimeVue, Node.js, Git, GitHub, Visual Studio. Data &amp; ML: scikit-learn-style clustering, OpenCV-style face recognition. Creative: Filmora, Adobe Premiere, CapCut, DaVinci Resolve (foundational). Other: troubleshooting and technical support, Google Sheets.

Education: BS Computer Science, Laguna State Polytechnic University - Los Baños, 2021 – 2025. Information Communication Technology, Colegio Los Baños, 2019 – 2021.

Contacts: Email [lennoxluisomana@gmail.com](mailto:lennoxluisomana@gmail.com). Phone [TODO: phone]. Facebook [https://www.facebook.com/Benok061803](https://www.facebook.com/Benok061803). GitHub [TODO: url]. LinkedIn [TODO: url]. Hide any card whose value is still a TODO placeholder in the production build.

MOTION SPEC

- Continuous: grid drift, particles, ring pulse, blinking cursor.

- Scroll: staggered reveal per section, timeline line draws as you scroll, count-ups trigger once when visible.

- Hover: card lift + glow, animated gradient border, 3D tilt (max 6deg), button shimmer, chip pulse.

- Everything respects `prefers-reduced-motion` and pauses off-screen animations where cheap.

QUALITY BAR

- Responsive: desktop 1440px and mobile 390px, hamburger nav on mobile, no horizontal scroll.

- Accessibility: semantic landmarks, skip link, visible focus states, AA contrast, alt text, keyboard-operable nav.

- Performance: WebP images, no layout shift, Lighthouse 90+ on all four categories.

- SEO: title, meta description, Open Graph and Twitter tags, favicon, robots.txt.

- Components: AppNav, HeroSection, TerminalCard, StatCounter, TimelineItem, ProjectFeature, ProjectCard, SkillGroup, ContactCard.

PROCESS

1. Scaffold the project and show a short file tree.

2. Build `app.css` design tokens and base components, then the sections in the order above.

3. Run `npx nuxi generate` and serve `dist/`. Fix every error and console warning before finishing.

4. Write a README with local dev, build and deploy steps.

DEPLOY TARGET

Cloudflare Pages via GitHub: build command `npm run generate`, output directory `dist`, env var `NODE_VERSION=22`. Do not configure any Cloudflare Nitro preset.

FINAL OUTPUT

A short summary of what was built, the exact commands to run, the list of remaining [TODO] items, and any decision you made that I should review.