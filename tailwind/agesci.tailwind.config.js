/**
 * Hederae DS — Tailwind Config for AGESCI
 * Tier 1 — Light theme, WCAG 2.1 AA
 *
 * Usage:
 *   // nuxt.config.ts
 *   import tailwindConfig from './hederae-ds/tailwind/agesci.tailwind.config.js'
 *   css: ['./hederae-ds/css/themes/agesci.css']
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
        // AGESCI pill radius is used extensively
        borderRadius: {
          pill: '9999px',
        },
      },
    },

    // AGESCI is light — dark: selector points to inverse surface sections
    darkMode: ['selector', '[data-brand="agesci"] .surface-inverse'],
  }),
}
