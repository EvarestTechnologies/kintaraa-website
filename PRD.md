# Kintaraa Marketing Website - Product Requirements Document

## Executive Summary

### Purpose
Create a professional marketing website for Kintaraa, a GBV (Gender-Based Violence) support platform mobile app. The website will serve as:
- Public-facing landing page for app discovery
- Legal compliance hub (Privacy Policy & Terms of Service)
- App store submission requirement (Apple & Google require legal policy URLs)
- Trust-building platform for survivors and service providers

### Goals
1. **Primary**: Enable app store submission by providing required legal URLs
2. **Secondary**: Attract potential users and service providers
3. **Tertiary**: Build trust and credibility for the platform

### Success Metrics
- ✅ Legal URLs accessible: `kintaraa.com/privacy` and `kintaraa.com/terms`
- ✅ Page load time < 3 seconds
- ✅ Mobile responsive (100% Lighthouse mobile score)
- ✅ SEO optimized (meta tags, OpenGraph, sitemap)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ SSL/HTTPS enabled
- ✅ Zero cost hosting (Vercel free tier)

---

## User Personas

### Primary: GBV Survivors
- **Demographics**: Women aged 18-45, diverse backgrounds
- **Needs**: Safe, anonymous support; coordinated care; easy access to resources
- **Concerns**: Privacy, safety, trust, anonymity
- **Tech Savvy**: Basic to intermediate
- **Goals**: Find help quickly, feel safe, access multiple services

### Secondary: Service Providers
- **Types**: Healthcare, Legal, Law Enforcement, Counseling, Social Services, GBV Rescue, Community Health Workers
- **Needs**: Efficient case management, secure communication, coordination tools
- **Concerns**: Data security, compliance, workflow efficiency
- **Tech Savvy**: Intermediate to advanced
- **Goals**: Help more survivors, streamline workflows, coordinate with other providers

### Tertiary: General Public
- **Demographics**: General audience seeking information about GBV support
- **Needs**: Learn about the platform, understand how to help
- **Goals**: Awareness, education, potential app download

### Quaternary: App Store Reviewers
- **Needs**: Clear legal policies, legitimate business presence
- **Goals**: Verify app legitimacy, ensure compliance

---

## Features & Pages

### 1. Landing Page (`/`)
**Purpose**: First impression, app introduction, trust building

**Sections**:
- **Hero Section**
  - Headline: "Empowering GBV Survivors Through Connected Care"
  - Subheadline: "Connecting survivors with specialized service providers for comprehensive support"
  - CTA buttons: "Download on App Store" (coming soon) | "Get it on Google Play" (coming soon)
  - Hero image/illustration (optional, can use gradient background)

- **Problem Statement**
  - Brief context about GBV challenges
  - Need for coordinated care
  - Current gaps in support systems

- **Solution Overview**
  - How Kintaraa addresses the problem
  - 2-3 key value propositions
  - Visual representation (icons, graphics)

- **Key Features Grid**
  - Anonymous incident reporting
  - Intelligent provider matching
  - Secure encrypted messaging
  - Mental health & wellbeing resources
  - Safety planning tools
  - Multi-provider care coordination
  - Real-time case updates
  - 7 provider types support

- **User Types Section**
  - For Survivors: Safety, anonymity, coordinated care
  - For Providers: Efficiency, coordination, secure communication

- **Trust & Security**
  - End-to-end encryption
  - Data privacy commitment
  - Anonymity protection
  - Security certifications (if any)

- **Download CTA**
  - App store badges (grayed out with "Coming Soon" overlay)
  - Email signup for launch notification (optional)

- **Footer**
  - Links: Privacy | Terms | About | Contact
  - Copyright © 2025 Kintaraa
  - Social media links (if applicable)

### 2. Privacy Policy Page (`/privacy`)
**Purpose**: Legal compliance for app stores, user trust

**Requirements**:
- Must be publicly accessible (no login required)
- Must have direct URL: `https://kintaraa.com/privacy`
- Must cover: Data collection, usage, storage, sharing, user rights, children's privacy
- Must reference mobile app specifically
- Must include: GDPR compliance, contact information for privacy concerns
- Last updated date
- Easy to read formatting with table of contents

**Content Structure**:
1. Introduction
2. Information We Collect
3. How We Use Your Information
4. Data Security & Encryption
5. Data Sharing & Third Parties
6. User Rights & Control
7. Children's Privacy
8. International Users
9. Changes to Privacy Policy
10. Contact Information

### 3. Terms of Service Page (`/terms`)
**Purpose**: Legal compliance for app stores, define usage terms

**Requirements**:
- Must be publicly accessible (no login required)
- Must have direct URL: `https://kintaraa.com/terms`
- Must cover: Acceptable use, prohibited conduct, disclaimers, limitations of liability
- Must reference mobile app specifically
- Must include: User responsibilities, termination rights, dispute resolution
- Last updated date
- Easy to read formatting with table of contents

**Content Structure**:
1. Acceptance of Terms
2. Description of Service
3. User Accounts & Registration
4. Acceptable Use Policy
5. Prohibited Conduct
6. Content & Intellectual Property
7. Disclaimers
8. Limitation of Liability
9. Indemnification
10. Termination
11. Dispute Resolution
12. Governing Law
13. Changes to Terms
14. Contact Information

### 4. About Page (`/about`) - Optional (Phase 2)
**Purpose**: Build credibility, tell the story

**Sections**:
- Mission & Vision
- The Problem (GBV statistics)
- Our Solution
- Team (if applicable)
- Partners (if applicable)
- Impact metrics (when available)

### 5. Contact Page (`/contact`) - Optional (Phase 2)
**Purpose**: Support inquiries, partnerships

**Content**:
- Email: support@kintaraa.com (to be set up)
- Contact form (optional)
- Response time expectations
- For emergencies: Link to crisis resources

---

## Technical Stack

### Frontend Framework
**Choice**: Next.js 14+ (App Router)

**Rationale**:
- ✅ Built-in SEO optimization (metadata API)
- ✅ Static site generation (SSG) for fast loading
- ✅ Image optimization out of the box
- ✅ TypeScript support (consistency with mobile app)
- ✅ Zero-config deployment to Vercel
- ✅ Best-in-class developer experience
- ✅ Industry standard for React marketing sites

### Language
**Choice**: TypeScript (strict mode)

**Rationale**:
- ✅ Consistency with mobile app (React Native + TypeScript)
- ✅ Type safety reduces bugs
- ✅ Better IDE support and autocomplete
- ✅ Self-documenting code
- ✅ Easier maintenance

### Styling
**Choice**: Tailwind CSS

**Rationale**:
- ✅ Matches mobile app design system (NativeWind)
- ✅ Rapid development with utility classes
- ✅ Consistent design system
- ✅ Built-in responsive design
- ✅ Excellent performance (purges unused CSS)
- ✅ Dark mode support (if needed later)

### Hosting & Deployment
**Choice**: Vercel (free tier)

**Rationale**:
- ✅ Zero-config Next.js deployment
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN for fast loading
- ✅ Custom domain support (kintaraa.com)
- ✅ Automatic Git integration
- ✅ Preview deployments for each commit
- ✅ Free tier is generous (100GB bandwidth/month)
- ✅ Built by Next.js creators

**Alternative**: Netlify (if Vercel doesn't work)

### Domain
**Domain**: kintaraa.com

**Registrar Options**:
1. **Namecheap** (recommended) - $8-12/year, free WHOIS privacy
2. **Google Domains** (migrating to Squarespace) - $12/year
3. **Cloudflare Registrar** - At-cost pricing (~$8-10/year)
4. **Vercel Domains** - Built-in, but more expensive

**DNS**: Vercel DNS (automatic when deploying)

### Email
**For support@kintaraa.com**:
- Option 1: Google Workspace ($6/user/month) - Professional
- Option 2: Zoho Mail (Free tier) - 5GB, 1 domain
- Option 3: Forward to personal email via Namecheap

---

## Design System

### Brand Colors
```css
/* Primary Colors */
--primary: #6366F1;      /* Indigo */
--secondary: #8B5CF6;    /* Purple */
--success: #10B981;      /* Green */
--warning: #F59E0B;      /* Amber */
--error: #EF4444;        /* Red */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-purple: linear-gradient(to right, #8B5CF6, #6366F1);

/* Neutrals */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
```

### Typography
```css
/* Font Families */
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing
- Use Tailwind's default spacing scale (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64)
- Section padding: `py-16` (desktop), `py-12` (mobile)
- Container max-width: `max-w-7xl` (1280px)

### Component Patterns
- **Buttons**: Rounded corners (`rounded-lg`), solid or outline styles
- **Cards**: White background, subtle shadow, rounded corners
- **Icons**: Lucide React (lightweight, consistent)
- **Animations**: Subtle hover effects, smooth transitions (200-300ms)

### Responsive Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Accessibility (WCAG 2.1 AA)
- ✅ Color contrast ratio ≥ 4.5:1 for text
- ✅ Focus indicators on all interactive elements
- ✅ Semantic HTML (headings hierarchy)
- ✅ Alt text for all images
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Skip to main content link

---

## Content Strategy

### Tone of Voice
- **Empathetic**: Acknowledge the sensitivity of GBV issues
- **Professional**: Build trust and credibility
- **Clear**: Avoid jargon, use plain language
- **Empowering**: Focus on solutions and hope
- **Respectful**: Honor survivors' experiences
- **Inclusive**: Welcome all genders, backgrounds

### Key Messages
1. **Safety First**: "Your privacy and safety are our top priorities"
2. **Connected Care**: "Coordinated support from multiple specialists"
3. **Anonymous**: "Report incidents and seek help without revealing your identity"
4. **Comprehensive**: "Healthcare, legal, counseling, and social services in one place"
5. **Empowerment**: "Take control of your recovery journey"

### SEO Keywords
**Primary**: GBV support, gender-based violence app, survivor support platform
**Secondary**: anonymous reporting, coordinated care, mental health resources, safety planning
**Long-tail**: connect with GBV service providers, multi-provider care coordination, secure messaging for survivors

### Meta Tags
```html
<title>Kintaraa - Empowering GBV Survivors Through Connected Care</title>
<meta name="description" content="Kintaraa connects GBV survivors with specialized service providers for comprehensive, coordinated support. Anonymous reporting, secure messaging, and mental health resources." />
<meta name="keywords" content="GBV support, gender-based violence, survivor support, coordinated care, mental health" />
```

### OpenGraph (Social Sharing)
```html
<meta property="og:title" content="Kintaraa - Empowering GBV Survivors" />
<meta property="og:description" content="Connecting survivors with specialized service providers for comprehensive support" />
<meta property="og:image" content="https://kintaraa.com/og-image.png" />
<meta property="og:url" content="https://kintaraa.com" />
<meta property="og:type" content="website" />
```

---

## Launch Plan

### MVP Scope (Phase 1) - ASAP
**Timeline**: 4-6 hours

**Deliverables**:
- ✅ Landing page (hero, features, download CTAs)
- ✅ Privacy Policy page (`/privacy`)
- ✅ Terms of Service page (`/terms`)
- ✅ Deployed to Vercel
- ✅ Custom domain configured (kintaraa.com)
- ✅ SSL/HTTPS enabled
- ✅ Mobile responsive
- ✅ SEO optimized

**Blockers to Resolve**:
- Purchase kintaraa.com domain
- Configure DNS records

### Phase 2 Enhancements (Post-Launch)
**Timeline**: 1-2 weeks after MVP

**Features**:
- About page with mission/vision
- Contact page with form
- Resources page (crisis hotlines, educational content)
- Blog/News section (optional)
- Email newsletter signup
- Analytics integration (Google Analytics or Plausible)
- Testimonials (if available, anonymized)

### Phase 3 Optimization (Ongoing)
**Timeline**: Post-app launch

**Features**:
- A/B testing for conversion optimization
- Download conversion tracking
- User feedback collection
- Content updates based on app usage
- SEO improvements based on search rankings
- Accessibility audit and improvements
- Performance optimization (if needed)

---

## Maintenance Plan

### Content Updates
**Frequency**: As needed
- Privacy Policy: Review quarterly, update when features change
- Terms of Service: Review quarterly, update when features change
- Landing page: Update when app launches, add screenshots

### Technical Maintenance
**Frequency**: Monthly
- Dependency updates (npm audit, security patches)
- Next.js version updates (quarterly)
- SSL certificate renewal (automatic via Vercel)
- Performance monitoring (Lighthouse CI)

### Monitoring
- **Uptime**: Vercel provides 99.99% uptime SLA
- **Performance**: Vercel Analytics (free tier)
- **SEO**: Google Search Console
- **Errors**: Vercel logs and monitoring

---

## Budget & Resources

### Development
- **Time**: 4-6 hours (one developer session)
- **Cost**: $0 (using Claude Code)

### Domain
- **Cost**: $8-12/year
- **Provider**: Namecheap or Cloudflare

### Hosting
- **Cost**: $0 (Vercel free tier)
- **Limits**: 100GB bandwidth/month (sufficient for MVP)

### Email (Optional)
- **Cost**: $0-6/month
- **Options**: Zoho Free or Google Workspace

### Total Year 1 Cost
- **Minimum**: $8-12/year (domain only)
- **Recommended**: $80-100/year (domain + professional email)

---

## Success Criteria

### Must-Have (App Store Submission)
- ✅ `https://kintaraa.com/privacy` returns valid privacy policy
- ✅ `https://kintaraa.com/terms` returns valid terms of service
- ✅ Both pages are publicly accessible (no auth required)
- ✅ SSL/HTTPS enabled
- ✅ Mobile responsive

### Should-Have (Quality)
- ✅ Page load time < 3 seconds
- ✅ Lighthouse score > 90 (Performance, Accessibility, SEO)
- ✅ Zero console errors
- ✅ All links work correctly
- ✅ Professional design matching brand

### Nice-to-Have (Polish)
- ✅ Smooth animations and transitions
- ✅ High-quality visuals/illustrations
- ✅ Testimonials or social proof
- ✅ Email capture for launch notification
- ✅ Analytics integration

---

## Risk Mitigation

### Technical Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Vercel deployment failure | Low | High | Have Netlify as backup |
| Domain purchase delay | Medium | High | Start domain purchase immediately |
| DNS propagation delay | Medium | Medium | Allow 24-48 hours for propagation |
| SSL certificate issues | Low | High | Vercel handles automatically |
| Build failures | Low | Medium | Test locally before deploying |

### Content Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Privacy policy missing required sections | Low | High | Use template + legal review (if possible) |
| Terms of service not comprehensive | Low | High | Use template + legal review (if possible) |
| Messaging inappropriate for sensitive topic | Medium | Medium | Use empathetic, respectful language |

### Timeline Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Development takes longer than expected | Low | Medium | Simple design, proven tech stack |
| App store rejection due to policies | Low | High | Follow Apple/Google guidelines exactly |

---

## Next Steps

### Immediate (Now)
1. ✅ Initialize Next.js 14 + TypeScript + Tailwind project
2. ✅ Set up project structure
3. ✅ Build landing page
4. ✅ Build privacy policy page
5. ✅ Build terms of service page
6. ✅ Test locally

### Deploy (Same Day)
1. Push to GitHub
2. Connect to Vercel
3. Deploy to production
4. Get temporary Vercel URL (e.g., `kintaraa.vercel.app`)

### Domain Setup (1-2 Days)
1. Purchase kintaraa.com domain
2. Configure DNS in Namecheap (point to Vercel)
3. Add custom domain in Vercel dashboard
4. Wait for DNS propagation (1-24 hours)
5. Verify SSL certificate is active

### App Store Submission (After Domain Active)
1. Update mobile app with website URLs
2. Submit to Apple App Store
3. Submit to Google Play Store

---

## Appendix

### Legal Disclaimer
**IMPORTANT**: This PRD provides a technical implementation plan. The Privacy Policy and Terms of Service content should ideally be reviewed by a legal professional before publication. However, for MVP purposes, we will use industry-standard templates adapted to Kintaraa's specific features.

### References
- Apple App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Google Play Store Policies: https://play.google.com/about/developer-content-policy/
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Vercel Documentation: https://vercel.com/docs
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

---

**Document Version**: 1.0
**Last Updated**: November 16, 2025
**Author**: Claude Code
**Status**: Approved - Ready for Implementation
