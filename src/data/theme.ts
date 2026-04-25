// filepath: src/data/theme.ts
import type { Config } from 'tailwindcss';

// Tailwind v3 color palette names
export type ColorPalette = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime'
  | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky'
  | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia'
  | 'pink' | 'rose';

export type BorderRadius = 'sharp' | 'soft' | 'pill';

export interface ThemeConfig {
  // Color palettes (Tailwind v3 names)
  primaryColor: ColorPalette;
  neutralColor: ColorPalette;
  
  // Typography
  fontFamily: string;
  fontCDNUrl: string;
  
  // Appearance
  darkMode: boolean;
  borderRadius: BorderRadius;
  
  // Logo (uses currentColor for stroke/fill)
  logoSVG: string;
}

export const theme: ThemeConfig = {
  primaryColor: 'teal',
  neutralColor: 'slate',
  fontFamily: 'Inter',
  fontCDNUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  darkMode: true,
  borderRadius: 'soft',
  logoSVG: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M6 8 L16 16 L6 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 8 L24 16 L14 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
</svg>`,
} as const;