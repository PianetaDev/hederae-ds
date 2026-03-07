/**
 * Hederae DS — Tailwind Config for Corner Table
 * Status: DRAFT — complete after CSS theme is populated
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
      extend: {},
    },
    darkMode: ['selector', '[data-brand="corner-table"]'],
  }),
}
