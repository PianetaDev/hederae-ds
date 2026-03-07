/**
 * Hederae DS — Tailwind Config for Susdef
 * Tier 2 — Light theme, WCAG 2.1 AA
 *
 * Usage:
 *   // nuxt.config.ts
 *   import tailwindConfig from './hederae-ds/tailwind/susdef.tailwind.config.js'
 *   css: ['./hederae-ds/css/themes/susdef.css']
 *
 * Extra utility classes provided:
 *   - bg-sector-* / text-sector-* for 8 thematic areas
 *   - font-ui for IBM Plex Mono UI labels
 */

const { hederaeBase } = require('./base.config.js')
const { merge } = require('./utils.js')

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],

  ...merge(hederaeBase, {
    theme: {
      extend: {
        fontFamily: {
          // Susdef adds a third family: Mono for UI chrome
          ui: ['var(--font-ui)', 'IBM Plex Mono', 'monospace'],
        },

        borderRadius: {
          // Susdef uses tighter radius — more institutional
          DEFAULT: 'var(--radius-sm)',
        },

        colors: {
          // Sector-specific color utilities
          // Usage: bg-sector-ecoinnovazione / bg-sector-ecoinnovazione-muted
          sector: {
            ecoinnovazione:   {
              DEFAULT: 'var(--color-sector-ecoinnovazione-primary)',
              muted:   'var(--color-sector-ecoinnovazione-muted)',
            },
            'energia-clima': {
              DEFAULT: 'var(--color-sector-energia-clima-primary)',
              muted:   'var(--color-sector-energia-clima-muted)',
            },
            'economia-circolare': {
              DEFAULT: 'var(--color-sector-economia-circolare-primary)',
              muted:   'var(--color-sector-economia-circolare-muted)',
            },
            'mobilita-sostenibile': {
              DEFAULT: 'var(--color-sector-mobilita-sostenibile-primary)',
              muted:   'var(--color-sector-mobilita-sostenibile-muted)',
            },
            'green-city': {
              DEFAULT: 'var(--color-sector-green-city-primary)',
              muted:   'var(--color-sector-green-city-muted)',
            },
            agroecologia: {
              DEFAULT: 'var(--color-sector-agroecologia-primary)',
              muted:   'var(--color-sector-agroecologia-muted)',
            },
            'stati-generali': {
              DEFAULT: 'var(--color-sector-stati-generali-primary)',
              muted:   'var(--color-sector-stati-generali-muted)',
            },
            'corsi-formazione': {
              DEFAULT: 'var(--color-sector-corsi-formazione-primary)',
              muted:   'var(--color-sector-corsi-formazione-muted)',
            },
          },
        },
      },
    },

    // Susdef is light — dark: selector points to inverse green surface sections
    darkMode: ['selector', '[data-brand="susdef"] .surface-inverse'],
  }),
}
