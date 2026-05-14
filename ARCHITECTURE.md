# Clackalyzer Website — Architecture & Planning Document

**Document Date:** May 13, 2026  
**Project:** clackalyzer-web  
**Framework:** Next.js 15+ with TypeScript & Tailwind CSS  
**Deployment:** Vercel  

---

## 1. Website Objectives

- **Primary:** Drive awareness and downloads of the Clackalyzer iOS app
- **Secondary:** Educate target users about mechanical keyboard acoustics and the app's capabilities
- **Tertiary:** Build a community around keyboard analysis and enthusiast documentation

---

## 2. Sitemap & Page Structure

```
clackalyzer.com
├── / (Landing/Home)
├── /features
│   ├── /features/spectrum-analyzer
│   ├── /features/recording
│   ├── /features/library
│   ├── /features/settings
│   ├── /features/calibration
│   └── /features/frequency-filter
├── /use-cases (or /who-its-for)
│   ├── /use-cases/enthusiasts
│   ├── /use-cases/builders
│   ├── /use-cases/reviewers
│   └── /use-cases/manufacturers
├── /technical
├── /about
├── /blog (optional, for updates)
└── /contact (or embedded form)
```

### Page Descriptions

| Page | Purpose | Key Content |
|------|---------|------------|
| **Home** | Hero landing, value prop, CTA | Hero banner, 3 key features, testimonials, App Store CTA, visual demo |
| **/features** | Feature hub/overview | Cards linking to individual feature deep-dives |
| **/features/spectrum-analyzer** | Showcase real-time FFT | Interactive visualization, use cases, settings explained |
| **/features/recording** | Recording workflow | Session config, metadata, WAV capture, metrics |
| **/features/library** | Playback & sharing | Recording list, search/sort, snapshot gallery, trash management |
| **/features/settings** | Configuration & customization | Audio input, analysis settings, display options, themes |
| **/features/calibration** | Noise subtraction | How calibration works, workflow diagram, live reduction stats |
| **/features/frequency-filter** | Lo/hi shelf filtering | Interactive filter preview, presets, slope explanation |
| **/use-cases** | Hub for user segments | Quick cards for 4 main segments |
| **/use-cases/enthusiasts** | Mechanical keyboard fans | Character-focused copy, example comparisons, community links |
| **/use-cases/builders** | Custom keyboard builders | Validation workflows, before/after workflows |
| **/use-cases/reviewers** | Content creators | Comparison methodology, snapshot sharing, analytics |
| **/use-cases/manufacturers** | Switch/case companies | QA-testing workflows, batch consistency, testimonials |
| **/technical** | Technical specs & system requirements | iOS 17+, frameworks (SwiftUI, SwiftData, AVFoundation, Accelerate), bundle ID, iCloud, storage, privacy policy, permissions table |
| **/about** | Company/studio info | Yall Tech Studios, vision, contact email (support@clackalyzer.com), credits |
| **/contact** | Contact form or email CTA | Form or mailto link, response expectations |

---

## 3. Information Architecture & User Journeys

### Journey 1: The Curious Newcomer
```
Home → Features Overview → Pick One Feature Deep-Dive → Use Cases (Enthusiasts) → App Store Download
```

### Journey 2: The Keyboard Builder
```
Home → Use Cases (Builders) → Features (Recording + Calibration + Filter) → Technical Specs → Download
```

### Journey 3: The Reviewer/Creator
```
Home → Use Cases (Reviewers) → Features (Library + Snapshots + Comparison Workflow) → Contact/Newsletter
```

### Journey 4: The Manufacturer
```
Home → Use Cases (Manufacturers) → Technical + Storage/Sync → Contact Form for Enterprise Questions
```

---

## 4. Content Strategy by Page

### Home / Landing Page

**Hero Section**
- Headline: "Professional Mechanical Keyboard Acoustics, In Your Pocket"
- Subheadline: "Real-time FFT-based spectrum analysis for switch enthusiasts, builders, and reviewers"
- Call-to-action buttons: "Get on App Store" (primary), "Learn More" (secondary)
- Full-width background: iPhone mockup showing the spectrum analyzer in action

**Three Pillar Features** (with icons/visuals)
1. **Real-Time Spectrum Analysis** — FFT visualization updating 8× per window
2. **Noise-Subtracted Baseline** — Calibrate ambient noise, live reduction stats
3. **Build Comparison** — Side-by-side spectrum snapshots of different keyboards

**Social Proof / Testimonials**
- Placeholder for 3–4 quotes from users (enthusiasts, reviewers, builders)
- Optional: GitHub star count or download badge

**Feature Highlights Grid** (6 cards linking to /features)
- Spectrum Analyzer
- Recording & Session Metadata
- Recording Library & Playback
- 5 Visual Themes
- Noise Calibration
- Frequency Filtering

**Use Case Teaser** (4 cards)
- "For Enthusiasts" → /use-cases/enthusiasts
- "For Builders" → /use-cases/builders
- "For Reviewers" → /use-cases/reviewers
- "For Manufacturers" → /use-cases/manufacturers

**Newsletter / Early Access Signup**
- Optional: Email form for updates, roadmap changes

**Footer**
- Links: Home, Features, Use Cases, Technical, About, Contact
- Legal: Privacy Policy, Terms (if applicable)
- Social: GitHub, Twitter, Email

---

### /features (Hub Page)

**Layout:** Grid of 6 feature cards, each linking to a detailed page.

| Card | Icon/Color | Link | Tagline |
|------|-----------|------|---------|
| Spectrum Analyzer | Red/Amber | /features/spectrum-analyzer | Real-time FFT with overlays |
| Recording | Teal | /features/recording | Capture & compare keyboard sounds |
| Library | Teal | /features/library | Organize, play, and share |
| Settings | Red | /features/settings | Fine-tune your analysis |
| Calibration | Amber | /features/calibration | Remove ambient noise intelligently |
| Frequency Filter | White | /features/frequency-filter | Focus on what matters |

---

### /features/spectrum-analyzer

**Sections:**
1. **Hero:** Large iPhone mockup showing the spectrum chart
2. **Key Capabilities:**
   - FFT-based real-time visualization
   - Selectable resolution (1024–16384 FFT size)
   - Display modes: Bars vs. Line
   - Overlays: Average curve, max-hold, waterfall, sliding peak decay
3. **Interactive Demo:** (Optional) Simple web-based spectrum demo showing audio input from user's device microphone (if permitted)
4. **Technical Details:** Frequency resolution, bin count, overlap factor, sample rates supported
5. **Visual Design:** Screenshots of the Default, Dark, Light, Beige, and Neon themes side-by-side

---

### /features/recording

**Sections:**
1. **Session Configuration:** Table of fields (name, board, plate, switch, foams, mic distance, notes, photo)
2. **What Gets Captured:** Peak dBFS, RMS, click timing, frequency peak, WAV file + FFT magnitudes
3. **Workflow Diagram:** idle → armed → recording → saving
4. **Live Metrics:** Peak, RMS, Freq Peak, Click detection
5. **Multi-Recording Comparison:** How to use snapshots for side-by-side analysis

---

### /features/library

**Sections:**
1. **Recording List:** Search, sort (by date, name, peak level, file size), view metadata
2. **Playback:** Waveform, play/pause, loop, animated playhead, live metrics
3. **Snapshots Gallery:** Horizontal scroll of PNG snapshots taken during recording
4. **Trash Management:** Auto-purge after 30 days, restore/delete actions
5. **Sharing:** Export WAV or compressed M4A format
6. **Screenshot:** Full-page mockup of the Library UI

---

### /features/settings

**Sections:**
1. **Audio Configuration:** Input device picker, sample rate, bit depth
2. **Analysis Settings:** FFT size, auto-normalize toggle
3. **Display Range:** Min/max frequency (default 20 Hz – 20 kHz)
4. **Spectrum Display:** Display mode, dB range, bin smoothing, waterfall, graph overlay
5. **Noise Calibration Card:** Status badge, calibrate button, clear profile button
6. **Appearance:** Theme selector with visual swatches (Default, Dark, Light, Beige, Neon)
7. **Storage & Reset:** Recording count, clear all, defaults button

---

### /features/calibration

**Sections:**
1. **What is Noise Calibration?** Explanation in plain English
2. **Why It Matters:** HVAC noise, room rumble, keyboard fundamentals remain unaffected
3. **Workflow Diagram:** Ready → Sampling (5s) → Done → Auto-dismiss
4. **Algorithm Simplified:** Per-bin minimum across 5 seconds, smoothing, live reduction in dB
5. **When to Recalibrate:** FFT size changes, room changes, testing consistency
6. **Live Reduction Stats:** How to read the dB reduction shown in the header

---

### /features/frequency-filter

**Sections:**
1. **What is Frequency Filtering?** Shelving filters explained simply
2. **Keyboard-Optimized Defaults:** 200 Hz lo-cut, 8 kHz hi-cut, 24 dB/oct slope
3. **Interactive Filter Preview:** (Optional web demo) Allow user to adjust sliders and see preview
4. **Presets:**
   - Full Spectrum (20 Hz – 20 kHz)
   - 500 Hz & Up (cuts rumble)
5. **Slope Options:** 12 / 24 / 48 dB/octave (with frequency-domain visualization)
6. **Use Case Examples:** How reviewers use filters, comparing specific frequency ranges

---

### /use-cases (Hub Page)

**Layout:** 4 feature cards, one per user segment, with character/persona image (icon or illustration).

| Segment | Icon/Color | Link | Tagline |
|---------|-----------|------|---------|
| Enthusiasts | Teal | /use-cases/enthusiasts | Explore switch acoustics objectively |
| Builders | Red | /use-cases/builders | Validate your modifications |
| Reviewers | Amber | /use-cases/reviewers | Produce credible acoustic comparisons |
| Manufacturers | White | /use-cases/manufacturers | QA-test for consistency |

---

### /use-cases/enthusiasts

**Sections:**
1. **Hero:** "Dive Deep Into Keyboard Acoustics"
2. **Why This Matters:** Subjective vs. objective sound analysis, the appeal of mechanical keyboards, rising interest in acoustic science
3. **Key Workflows:**
   - Comparing two switches side-by-side
   - Identifying dominant frequencies in a keyboard
   - Understanding how foam affects resonance
4. **Example Comparisons:** (Mockup scenarios or anonymized real data)
   - Gateron Yellow vs. Cherry MX Black (frequency profiles)
   - PCB Foam vs. Case Foam (impact on lower frequencies)
5. **Community:** Links to r/mechanicalkeysboards, Discord servers, YouTube channels
6. **Call-to-Action:** "Download and start analyzing"

---

### /use-cases/builders

**Sections:**
1. **Hero:** "Scientifically Validate Your Custom Build"
2. **Validation Workflows:**
   - Before/after comparisons when adding foam
   - Plate material impact on high frequencies
   - Gasket mounting effects
3. **Workflow Diagram:** Build mod → Record → Compare → Refine
4. **Metrics to Watch:** Peak frequency, resonance dips/peaks, overall energy distribution
5. **Best Practices:** Mic placement (20 cm standard), consistent testing conditions
6. **Download + Get Started**

---

### /use-cases/reviewers

**Sections:**
1. **Hero:** "Back Your Reviews With Science"
2. **Why Objective Data Matters:** Credibility, comparison benchmarking, audience trust
3. **Workflow:** Record switches → Create snapshots → Narrate findings → Share
4. **Snapshot Sharing:** How to export and embed spectrum snapshots in blog/video
5. **Multi-Recording Comparisons:** Side-by-side library view for content creation
6. **Monetization Note:** (Optional) "Distinguish yourself with professional acoustic analysis"
7. **Example Use Cases:** Keyboard review series, switch roundups, foam comparisons
8. **Download + Featured Reviewers** (optional testimonials)

---

### /use-cases/manufacturers

**Sections:**
1. **Hero:** "Ensure Consistent Quality Across Production Batches"
2. **QA Workflows:**
   - Testing batch consistency
   - Identifying defects or deviations
   - Archiving acoustic specifications
3. **Enterprise Features:** (If applicable) iCloud sync for shared recordings, collaboration notes
4. **Storage & Privacy:** On-device processing, no cloud analytics, GDPR-compliant
5. **Contact for Volume Licensing:** (If planned) Direct link to /contact or email
6. **Technical Specs for Integration:** iOS requirements, API considerations (if any)

---

### /technical

**Sections:**
1. **System Requirements:**
   - iOS 17.0+
   - iPhone and iPad (all sizes)
   - Portrait and Landscape orientations
   - Minimum Xcode 15.0
2. **Frameworks:** SwiftUI, SwiftData, AVFoundation, Accelerate (vDSP)
3. **Bundle ID:** `com.yalltech.Clackalyzer`
4. **iCloud Sync:** `iCloud.com.yalltech.Clackalyzer` container
5. **Background Audio Mode:** Enabled
6. **Storage:** On-device SwiftData, iCloud Documents for WAV/PNG sync
7. **Permissions Table:**
   | Permission | Purpose |
   |-----------|---------|
   | Microphone | Real-time analysis and recording |
   | Camera | Session photo capture |
   | Photo Library | Save spectrum snapshots and attach existing photos |
8. **Privacy & Data:** No network requests, no analytics, no user accounts, no ads
9. **Known Constraints:** (From spec) iCloud sync without conflict UI, foreground-only audio, no simulator audio tap

---

### /about

**Sections:**
1. **Yall Tech Studios:** Brief company description, mission, location
2. **The Team:** (Optional) Founder/developer info
3. **Vision:** "Democratizing acoustic analysis for the mechanical keyboard community"
4. **Contact:** Email (support@clackalyzer.com), GitHub, social links
5. **Credits:** Libraries, inspirations, community acknowledgments

---

### /contact

**Simple contact form or mailto link with:**
- Name
- Email
- Subject / Inquiry Type (Question, Bug Report, Partnership, Other)
- Message
- Submission callback (Thank you message)

**Fallback:** Direct mailto link to support@clackalyzer.com

---

## 5. Visual Design System

### Color Palette Implementation

#### Default Theme (Primary)
```
Navy/Black: #000000 (background)
Card BG: #09090A (subtle elevation)
Teal (Primary): #F51713 → Actually this looks like Red in the spec?
Amber (Secondary): #FFFFFF (high contrast)
Red (Accent): #F51713 (recording indicator)
Text: #FFFFFF (primary)
Grid: #6B6B73 (secondary text, borders)
```

**Note:** The spec shows `ckTeal` as `#F51713` which is actually red. Assuming this is the red accent; adjust if the spec intends a different teal.

#### Alternate Themes (to showcase)
- **Dark:** Navy `#0D1B2A`, Teal, Amber, Amber/Gold
- **Light:** Beige `#E2E2DC`, Orange-red, Grey
- **Beige:** Warm brown `#413C32`, Sage green, Dusty rose
- **Neon:** Deep purple `#0A071E`, Cyan, Magenta

### Typography
- **System Font:** San Francisco (default iOS/web font)
- **Headings:** Bold or semibold weights
- **Body:** Regular weight
- **Numerics/Monospaced:** `.monospaced` design (all charts, specs, metrics)
- **Logotype:** "Clack" (bold) + "alyzer" (ultraLight, teal accent)

### Component Library (to be built in React)

**Atoms:**
- Button (primary, secondary, destructive)
- Chip (for foam multi-select, preset buttons)
- Slider (for frequency cutoffs, inline controls)
- Toggle
- Badge (status, notification count)
- Tooltip / Readout

**Molecules:**
- Card (feature card, recording row, setting group)
- Header (app logo, navigation)
- Footer
- Form input (text, select, textarea)
- Feature grid (6-column responsive)
- Use case card

**Organisms:**
- Navigation (horizontal scrolling features, use-case carousel)
- Feature detail page layout
- Settings/options panel
- Recording library preview
- Interactive spectrum demo (if included)

### Responsive Design
- **Mobile-first** approach: 320px+ (iPhone SE) to iPad Pro
- **Breakpoints:**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Key layouts:**
  - Mobile: Single column, stacked cards
  - Tablet (md+): Two-column grids
  - Desktop (lg+): Three-column grids, side-by-side layouts

---

## 6. Component Structure (React/Next.js)

```
app/
├── layout.tsx                 # Root layout, nav, footer
├── page.tsx                   # Home / landing
├── features/
│   ├── page.tsx               # /features hub
│   ├── spectrum-analyzer/
│   │   └── page.tsx
│   ├── recording/
│   │   └── page.tsx
│   ├── library/
│   │   └── page.tsx
│   ├── settings/
│   │   └── page.tsx
│   ├── calibration/
│   │   └── page.tsx
│   └── frequency-filter/
│       └── page.tsx
├── use-cases/
│   ├── page.tsx               # /use-cases hub
│   ├── enthusiasts/
│   │   └── page.tsx
│   ├── builders/
│   │   └── page.tsx
│   ├── reviewers/
│   │   └── page.tsx
│   └── manufacturers/
│       └── page.tsx
├── technical/
│   └── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx

components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── atoms/
│   ├── Button.tsx
│   ├── Chip.tsx
│   ├── Slider.tsx
│   ├── Toggle.tsx
│   └── Badge.tsx
├── molecules/
│   ├── Card.tsx
│   ├── FeatureCard.tsx
│   ├── RecordingRow.tsx
│   ├── UseCaseCard.tsx
│   └── FormInput.tsx
├── organisms/
│   ├── HeroSection.tsx
│   ├── FeatureGrid.tsx
│   ├── UseCaseHub.tsx
│   ├── TestimonialsCarousel.tsx
│   └── InteractiveDemo.tsx (optional)
└── common/
    └── SEO.tsx                # Metadata management

public/
├── images/
│   ├── mockups/               # iPhone mockups, iPad previews
│   ├── icons/                 # Feature icons, keycap symbols
│   ├── screenshots/           # App UI screenshots
│   └── themes/                # Theme palette swatches
└── data/
    └── testimonials.json      # Sample user quotes

styles/
├── globals.css                # Tailwind base, theme variables
├── theme.css                  # Design system tokens
└── animations.css             # Transitions, keycap interactions

lib/
├── metadata.ts                # SEO metadata generator
├── constants.ts               # Feature lists, copy
└── utils.ts                   # Helpers

---

## 7. Key Features & Interactions

### Theme Switcher
- **Header toggle** to switch between 5 themes (Default, Dark, Light, Beige, Neon)
- Uses CSS variables for instant theme swap
- Persists selection in `localStorage`

### Interactive Spectrum Demo (Optional)
- Embedded web audio API component
- Captures user's microphone (with permission)
- Renders simple FFT visualization in real-time
- Demonstrates the core capability of the app

### Feature Cards → Detail Pages
- Clicking a feature card navigates to a dedicated page with deeper information, screenshots, and CTAs

### Responsive Navigation
- **Mobile:** Hamburger menu collapsing into drawer
- **Tablet/Desktop:** Horizontal nav bar

### Testimonial Carousel / Slider
- Display 3–4 user quotes with optional avatars
- Auto-rotate or manual paging controls

### Call-to-Action Pattern
- App Store button (with badge graphic) appears multiple times
- Newsletter signup form (optional, for ongoing engagement)

---

## 8. SEO & Metadata Strategy

### Meta Tags
- `<title>`: Clackalyzer — Mechanical Keyboard Acoustic Analysis Tool
- `<meta name="description">`: Professional FFT-based spectrum analyzer for iOS
- Open Graph tags: `og:title`, `og:description`, `og:image` (hero screenshot)
- Twitter Card tags for social sharing

### Structured Data
- JSON-LD for **Product** schema (name, description, app store link, rating, pricing)
- JSON-LD for **Organization** schema (Yall Tech Studios)

### URL Structure
- Clean, descriptive URLs: `/features/spectrum-analyzer` not `/f/sa`
- Canonical tags to prevent duplicate content

### Performance Targets
- Lighthouse Score: ≥ 90 (all metrics)
- Core Web Vitals: Green across all metrics
- Image optimization: next/image with responsive sizes

---

## 9. Analytics & Tracking

### Events to Track
- **Page Views:** Landing, each feature page, use-case pages
- **CTAs:** App Store button clicks, newsletter signup, contact form submissions
- **Interactions:** Theme switch, feature card clicks, feature carousel navigation
- **Referrers:** Track where users are coming from (ProductHunt, Reddit, etc.)

### Implementation
- Google Analytics 4 (GA4)
- Vercel Analytics (built-in performance metrics)
- Conversion tracking for App Store downloads (if possible via Apple app tracking)

---

## 10. Future Enhancements

- **Blog / Updates:** Announce new features, share acoustic tips, case studies
- **Community Gallery:** User-submitted spectrum comparisons, builds
- **API Documentation:** If planning developer partnerships
- **Live Pricing / Monetization:** Free vs. premium tier information (if applicable)
- **Video Walkthrough:** Embedded YouTube video of the app in action
- **Downloadable Resources:** PDF guides for reviewers, builders (how to use Clackalyzer effectively)

---

## 11. Deployment & Maintenance

- **Hosting:** Vercel (automatic deployments from GitHub `main` branch)
- **Domain:** TBD (e.g., `clackalyzer.com`, `clackalyzer.app`)
- **CDN:** Vercel's global CDN (built-in)
- **SSL:** Automatic HTTPS
- **Environment Variables:** API keys (if needed), Google Analytics ID, newsletter service keys

---

## Summary

This architecture provides a clear, user-centric website that educates potential users, showcases Clackalyzer's powerful capabilities, and drives downloads to the App Store. The multi-use-case approach ensures that enthusiasts, builders, reviewers, and manufacturers all see themselves represented and understand the app's value to them specifically.

The Next.js + Tailwind stack enables fast iteration and easy maintenance, while the component-based structure keeps the codebase scalable and beginner-friendly.
