# Streamlined Enterprises LLC - Enterprise Technology Consulting Website

A production-ready, single-page consulting website built with Astro 5+ and Tailwind CSS, optimized for Netlify deployment.

## Business Overview

**Company:** Streamlined Enterprises LLC  
**Principal Consultant:** Executive technology leader with 20+ years scaling FinTech/SaaS infrastructure from startup through two Fortune 500 acquisitions.

**Core Expertise Areas:**
- AI Strategy & Governance
- Security & Compliance Leadership (CISSP, CISA, CISM, CCSP)
- Cloud & Infrastructure Transformation
- Fractional CTO Services
- Technical Due Diligence for M&A

## Tech Stack

- **Framework:** Astro 5+
- **Styling:** Tailwind CSS
- **Deployment:** Netlify (static site)
- **Forms:** Netlify Forms

## Project Structure

```
se-website/
├── src/
│   ├── components/
│   │   ├── Header.astro       # Sticky header with navigation
│   │   ├── Hero.astro         # Hero section with CTAs
│   │   ├── TrustBar.astro     # Trust indicators section
│   │   ├── Services.astro     # Services section with cards
│   │   ├── Expertise.astro    # Credentials and track record
│   │   ├── Contact.astro      # Contact form (Netlify Forms)
│   │   └── Footer.astro       # Footer with links and social
│   ├── layouts/
│   │   └── Layout.astro       # Base layout with SEO
│   └── pages/
│       ├── index.astro        # Main single-page application
│       └── 404.astro          # Custom 404 page
├── public/
│   └── favicon.svg            # Custom favicon
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
└── package.json               # Dependencies
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd se-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Access at http://localhost:4321
```

### Build for Production

```bash
# Build static site
npm run build

# Output in dist/ directory
```

### Preview Production Build

```bash
npm run preview
```

## Netlify Deployment

### Option 1: Git-based Deployment (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Log in to [Netlify](https://netlify.com)

3. Click "Add new site" → "Import an existing project"

4. Select your Git provider and repository

5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 or higher

6. Click "Deploy site"

### Option 2: CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Netlify Forms Configuration

The contact form is configured for Netlify's Forms feature:

- **Form name:** `contact`
- **Honeypot field:** `url-field` (spam prevention)
- **Method:** POST
- **Configuration:** `data-netlify="true"`

Netlify will automatically:
- Parse form submissions
- Store submissions in the dashboard
- Send email notifications (configurable)

To configure email notifications:
1. Go to Netlify Dashboard → Your Site → Forms
2. Click "Form notification settings"
3. Add email address for notifications

## Customization

### Content Updates

Edit the component files in `src/components/` to update:
- Service descriptions
- Credentials and certifications
- Track record achievements
- Contact information

### Styling

- **Colors:** Modify `tailwind.config.mjs` to change the color palette
- **Typography:** Update font family in `tailwind.config.mjs`
- **Effects:** Adjust animation settings in `tailwind.config.mjs`

### SEO & Meta Tags

Update `src/layouts/Layout.astro`:
- Title and description
- Open Graph tags
- Structured data (JSON-LD)
- Canonical URL

### Social Links

Update `src/components/Footer.astro`:
- LinkedIn URL
- GitHub URL
- Email address

## Performance

- **Lighthouse Score:** Target 95+ across all metrics
- **JavaScript:** Minimal (only for mobile menu and scroll effects)
- **CSS:** Inline critical styles via Tailwind
- **Images:** No heavy images (all SVG icons)

## Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Skip to main content link
- Focus visible states
- Color contrast compliant with WCAG AA

## License

Copyright © 2026 Streamlined Enterprises LLC. All rights reserved.

## Contact

**Streamlined Enterprises LLC**  
Email: contact@streamlinedenterprises.com  
LinkedIn: https://linkedin.com/company/streamlined-enterprises  
GitHub: https://github.com/streamlined-enterprises
