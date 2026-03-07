/**
 * Hederae DS — Tailwind Config for Rara
 *
 * Usage in your Nuxt/Rara project:
 *
 *   // nuxt.config.ts
 *   import tailwindConfig from './hederae-ds/tailwind/rara.tailwind.config.js'
 *
 *   export default defineNuxtConfig({
 *     modules: ['@nuxtjs/tailwindcss'],
 *     tailwindcss: {
 *       config: tailwindConfig
 *     }
 *   })
 *
 * The CSS theme file (rara.css) must be imported globally:
 *   // app.vue or nuxt.config.ts css array
 *   import 'hederae-ds/css/themes/rara.css'
 */

const { hederaeBase } = require('./base.config.js')
const { merge } = require('./utils.js') // see utils.js

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],

  ...merge(hederaeBase, {
    theme: {
      extend: {
        // Rara-specific additions on top of base
        // (most things are already covered by CSS vars in rara.css)
      },
    },

    // Rara uses dark mode via data-brand attribute, not Tailwind dark:
    darkMode: ['selector', '[data-brand="rara"]'],
  }),
}
