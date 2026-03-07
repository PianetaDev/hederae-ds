/**
 * Hederae DS — Tailwind Base Config
 *
 * All semantic color tokens are CSS custom properties, so they
 * automatically switch when you change [data-brand] attribute.
 *
 * Usage in nuxt.config.ts:
 *   import { hederaeBase } from './hederae-ds/tailwind/base.config.js'
 *   // extend your tailwind config with hederaeBase
 */

/** @type {import('tailwindcss').Config} */
const hederaeBase = {
  theme: {
    extend: {

      // ─── Font Families ──────────────────────────────────────
      fontFamily: {
        display: ['var(--font-display)'],
        heading:  ['var(--font-heading)'],
        body:     ['var(--font-body)'],
      },

      // ─── Font Sizes (from primitive scale) ──────────────────
      fontSize: {
        'xs':      ['14px',  { lineHeight: '1.5' }],
        'sm':      ['16px',  { lineHeight: '1.2' }],
        'md':      ['18px',  { lineHeight: '1.2' }],
        'lg':      ['22px',  { lineHeight: '1.2' }],
        'xl':      ['24px',  { lineHeight: '1' }],
        '2xl':     ['32px',  { lineHeight: '1' }],
        '3xl':     ['40px',  { lineHeight: '1' }],
        '4xl':     ['56px',  { lineHeight: '1' }],
        '5xl':     ['64px',  { lineHeight: '1' }],
        'display': ['120px', { lineHeight: '1' }],
      },

      // ─── Spacing (from primitive scale) ─────────────────────
      spacing: {
        '0':  '0px',
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '6':  '24px',
        '8':  '32px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '30': '120px',
      },

      // ─── Border Radius ───────────────────────────────────────
      borderRadius: {
        'none': '0px',
        'sm':   '8px',
        'md':   '16px',
        'lg':   '24px',
        'xl':   '32px',
        'full': '9999px',
        DEFAULT: 'var(--radius-md)',
      },

      // ─── Semantic Colors (via CSS vars — theme-switchable) ───
      colors: {

        // Surface
        surface: {
          page:    'var(--color-surface-page)',
          raised:  'var(--color-surface-raised)',
          card:    'var(--color-surface-card)',
          overlay: 'var(--color-surface-overlay)',
          inverse: 'var(--color-surface-inverse)',
        },

        // Content / Text
        content: {
          primary:   'var(--color-content-primary)',
          secondary: 'var(--color-content-secondary)',
          disabled:  'var(--color-content-disabled)',
          inverse:   'var(--color-content-inverse)',
          brand:     'var(--color-content-brand)',
          accent:    'var(--color-content-accent)',
        },

        // Borders
        border: {
          DEFAULT: 'var(--color-border-default)',
          subtle:  'var(--color-border-subtle)',
          brand:   'var(--color-border-brand)',
          focus:   'var(--color-border-focus)',
        },

        // Interactive — Primary button
        'interactive-primary': {
          bg:          'var(--color-interactive-primary-bg)',
          'bg-hover':  'var(--color-interactive-primary-bg-hover)',
          'bg-active': 'var(--color-interactive-primary-bg-active)',
          'bg-disabled':'var(--color-interactive-primary-bg-disabled)',
          label:       'var(--color-interactive-primary-label)',
        },

        // Interactive — Secondary button
        'interactive-secondary': {
          bg:         'var(--color-interactive-secondary-bg)',
          'bg-hover': 'var(--color-interactive-secondary-bg-hover)',
          border:     'var(--color-interactive-secondary-border)',
          label:      'var(--color-interactive-secondary-label)',
        },

        // Interactive — Ghost button
        'interactive-ghost': {
          'bg-hover': 'var(--color-interactive-ghost-bg-hover)',
          label:      'var(--color-interactive-ghost-label)',
        },

        // Interactive — Accent (orange CTA in Rara)
        'interactive-accent': {
          bg:         'var(--color-interactive-accent-bg)',
          'bg-hover': 'var(--color-interactive-accent-bg-hover)',
          label:      'var(--color-interactive-accent-label)',
        },

        // Link
        link: {
          DEFAULT: 'var(--color-link-default)',
          hover:   'var(--color-link-hover)',
          visited: 'var(--color-link-visited)',
        },

        // Feedback
        feedback: {
          'success-bg':   'var(--color-feedback-success-bg)',
          'success-text': 'var(--color-feedback-success-text)',
          'warning-bg':   'var(--color-feedback-warning-bg)',
          'warning-text': 'var(--color-feedback-warning-text)',
          'error-bg':     'var(--color-feedback-error-bg)',
          'error-text':   'var(--color-feedback-error-text)',
          'info-bg':      'var(--color-feedback-info-bg)',
          'info-text':    'var(--color-feedback-info-text)',
        },

        // Brand (primary color of the active brand)
        brand: {
          primary:   'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          muted:     'var(--color-brand-muted)',
        },
      },

      // ─── Box Shadows ─────────────────────────────────────────
      boxShadow: {
        sm:          'var(--shadow-sm)',
        md:          'var(--shadow-md)',
        lg:          'var(--shadow-lg)',
        'glow-brand':'var(--shadow-glow-brand)',
      },

      // ─── Letter Spacing ──────────────────────────────────────
      letterSpacing: {
        tight:  '0px',
        normal: '0.125em',
        wide:   '2em',
      },

      // ─── Transition / Motion ─────────────────────────────────
      transitionDuration: {
        fast:   'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow:   'var(--duration-slow)',
      },
      transitionTimingFunction: {
        default:     'var(--easing-default)',
        decelerate:  'var(--easing-decelerate)',
        spring:      'var(--easing-spring)',
      },
    },
  },

  plugins: [],
}

module.exports = { hederaeBase }
