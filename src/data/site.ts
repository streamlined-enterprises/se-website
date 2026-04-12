// src/data/site.ts
// Centralized configuration for all brand strings.
// Use these values throughout the site instead of hardcoded strings.

export const site = {
  name: "Streamline IT",
  legalName: "Streamlined Enterprises LLC",
  tagline: "Enterprise Technology Leadership",
  taglineSub: "When You Need It",
  description: "Strategic consulting for enterprises and growth-stage companies. 22+ years expertise in secure AI adoption, risk-based security, and reliable cloud platforms. Zero-breach track record.",
  domain: "streamline.it.com",
  canonicalURL: "https://streamline.it.com",
  location: "Kansas City Metro",
  email: "contact@streamlinedenterprises.com",
  linkedin: "https://linkedin.com/company/streamlined-enterprises",
  github: "https://github.com/streamlined-enterprises",
  reportsURL: "", // set when Evidence subdomain is live, e.g. "https://reports.streamline.it.com"
  nav: [
    { label: "Services", href: "#services" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ],
  trustStats: [
    { value: "20+", label: "Years Experience", icon: "clock" },
    { value: "Zero", label: "Breach Record", icon: "shield" },
    { value: "Fortune 500", label: "Trusted Partner", icon: "building" },
  ],
  certs: ["CISSP", "CISA", "CISM", "CCSP"],
  trackRecord: [
    "Two decades of continuous accountability in FinTech/SaaS infrastructure",
    "Scaled operations from startup through two Fortune 500 acquisitions (Heartland Payment Systems 2014, Global Payments 2016)",
    "Maintained >99.99% SaaS uptime serving billions of dollars in payment transactions",
    "Zero-breach security record across PCI, SOC, and regulatory compliance frameworks",
    "Built and scaled IT organizations exceeding 25 people through rapid growth and digital transformation",
  ],
  credibility: [
    { heading: "Thought Leadership", body: "Regular presentations at industry conferences, PCI user sessions, and technology workshops" },
    { heading: "Team Capabilities", body: "Deep bench of expertise across security, cloud infrastructure, and enterprise AI implementations" },
    { heading: "Headquarters", body: "Kansas City Metro (serving clients nationwide with remote and hybrid engagement options)" },
  ],
  copyright: new Date().getFullYear(),
} as const;
