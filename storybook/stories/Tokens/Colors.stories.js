export default {
  title: 'Hederae DS / Tokens / Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Token semantici di colore. Ogni swatches mostra il valore CSS custom property attivo per il tema corrente. Cambia il tema dal switcher in alto a destra per vedere il comportamento multi-brand.',
      },
    },
  },
}

const colorGroups = [
  {
    group: 'Surface',
    description: 'Livelli di profondità dello sfondo',
    tokens: [
      { name: 'surface-page',    var: '--color-surface-page',    label: 'Page' },
      { name: 'surface-raised',  var: '--color-surface-raised',  label: 'Raised' },
      { name: 'surface-card',    var: '--color-surface-card',    label: 'Card' },
      { name: 'surface-inverse', var: '--color-surface-inverse', label: 'Inverse' },
    ],
  },
  {
    group: 'Content',
    description: 'Colori per testo e icone',
    tokens: [
      { name: 'content-primary',   var: '--color-content-primary',   label: 'Primary' },
      { name: 'content-secondary', var: '--color-content-secondary', label: 'Secondary' },
      { name: 'content-disabled',  var: '--color-content-disabled',  label: 'Disabled' },
      { name: 'content-inverse',   var: '--color-content-inverse',   label: 'Inverse' },
      { name: 'content-brand',     var: '--color-content-brand',     label: 'Brand' },
      { name: 'content-accent',    var: '--color-content-accent',    label: 'Accent' },
    ],
  },
  {
    group: 'Interactive — Primary',
    description: 'Bottone CTA principale',
    tokens: [
      { name: 'interactive-primary-bg',          var: '--color-interactive-primary-bg',          label: 'Background' },
      { name: 'interactive-primary-bg-hover',    var: '--color-interactive-primary-bg-hover',    label: 'Hover' },
      { name: 'interactive-primary-bg-active',   var: '--color-interactive-primary-bg-active',   label: 'Active' },
      { name: 'interactive-primary-bg-disabled', var: '--color-interactive-primary-bg-disabled', label: 'Disabled' },
      { name: 'interactive-primary-label',       var: '--color-interactive-primary-label',       label: 'Label' },
    ],
  },
  {
    group: 'Brand',
    description: 'Colori identitari del brand attivo',
    tokens: [
      { name: 'brand-primary',   var: '--color-brand-primary',   label: 'Primary' },
      { name: 'brand-secondary', var: '--color-brand-secondary', label: 'Secondary' },
      { name: 'brand-muted',     var: '--color-brand-muted',     label: 'Muted' },
    ],
  },
  {
    group: 'Border',
    description: 'Bordi e separatori',
    tokens: [
      { name: 'border-default', var: '--color-border-default', label: 'Default' },
      { name: 'border-subtle',  var: '--color-border-subtle',  label: 'Subtle' },
      { name: 'border-brand',   var: '--color-border-brand',   label: 'Brand' },
      { name: 'border-focus',   var: '--color-border-focus',   label: 'Focus' },
    ],
  },
  {
    group: 'Feedback',
    description: 'Stati di sistema',
    tokens: [
      { name: 'feedback-success-bg',   var: '--color-feedback-success-bg',   label: 'Success BG' },
      { name: 'feedback-success-text', var: '--color-feedback-success-text', label: 'Success Text' },
      { name: 'feedback-error-bg',     var: '--color-feedback-error-bg',     label: 'Error BG' },
      { name: 'feedback-error-text',   var: '--color-feedback-error-text',   label: 'Error Text' },
      { name: 'feedback-warning-bg',   var: '--color-feedback-warning-bg',   label: 'Warning BG' },
      { name: 'feedback-warning-text', var: '--color-feedback-warning-text', label: 'Warning Text' },
    ],
  },
]

export const AllColors = {
  render: () => ({
    template: /* html */ `
      <div style="padding: 24px; background: var(--color-surface-page); min-height: 100vh;">
        <h1 style="font-family: var(--font-display); color: var(--color-content-primary); font-size: 40px; margin: 0 0 8px;">Color Tokens</h1>
        <p style="font-family: var(--font-body); color: var(--color-content-secondary); margin: 0 0 48px; font-size: 16px;">
          I valori cambiano al cambio del tema. Usa il brand switcher in alto a destra.
        </p>

        <div v-for="group in colorGroups" :key="group.group" style="margin-bottom: 48px;">
          <h2 style="font-family: var(--font-heading); color: var(--color-content-brand); font-size: 12px; letter-spacing: 2em; text-transform: uppercase; margin: 0 0 8px;">{{ group.group }}</h2>
          <p style="font-family: var(--font-body); color: var(--color-content-secondary); font-size: 14px; margin: 0 0 16px;">{{ group.description }}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px;">
            <div v-for="token in group.tokens" :key="token.name"
              style="display: flex; flex-direction: column; gap: 8px; min-width: 100px;">
              <div :style="{ background: 'var(' + token.var + ')', width: '80px', height: '80px', borderRadius: '8px', border: '1px solid rgba(249,249,249,0.1)' }"></div>
              <div>
                <div style="font-family: var(--font-heading); color: var(--color-content-primary); font-size: 12px; font-weight: 700;">{{ token.label }}</div>
                <div style="font-family: var(--font-body); color: var(--color-content-secondary); font-size: 10px; word-break: break-all;">{{ token.var }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    data() {
      return { colorGroups }
    },
  }),
}
