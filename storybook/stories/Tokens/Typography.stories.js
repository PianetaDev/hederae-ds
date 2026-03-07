export default {
  title: 'Hederae DS / Tokens / Typography',
  tags: ['autodocs'],
}

const typeScale = [
  { role: 'H1',       family: 'var(--font-display)', size: '64px',  weight: 700, tracking: '0.125em', lineHeight: 1,   sample: 'Design that grows' },
  { role: 'H2',       family: 'var(--font-display)', size: '56px',  weight: 700, tracking: '0.125em', lineHeight: 1,   sample: 'Section title' },
  { role: 'H3',       family: 'var(--font-heading)', size: '32px',  weight: 700, tracking: '0.125em', lineHeight: 1,   sample: 'Sub-section' },
  { role: 'H4',       family: 'var(--font-heading)', size: '24px',  weight: 700, tracking: '0.125em', lineHeight: 1,   sample: 'Card title' },
  { role: 'Subtitle', family: 'var(--font-body)',    size: '32px',  weight: 600, tracking: '0.125em', lineHeight: 1.2, sample: 'Lead paragraph copy' },
  { role: 'Body LG',  family: 'var(--font-body)',    size: '22px',  weight: 400, tracking: '0.125em', lineHeight: 1.2, sample: 'Primary body text' },
  { role: 'Body',     family: 'var(--font-body)',    size: '18px',  weight: 400, tracking: '0.125em', lineHeight: 1.2, sample: 'Default paragraph text goes here' },
  { role: 'Body SM',  family: 'var(--font-body)',    size: '16px',  weight: 400, tracking: '0.125em', lineHeight: 1.5, sample: 'Small print and caption text' },
  { role: 'Label',    family: 'var(--font-heading)', size: '16px',  weight: 700, tracking: '2em',     lineHeight: 1.2, sample: 'category', transform: 'uppercase' },
  { role: 'Button',   family: 'var(--font-heading)', size: '18px',  weight: 700, tracking: '0.125em', lineHeight: 1.2, sample: 'Call to Action' },
  { role: 'Nav',      family: 'var(--font-heading)', size: '18px',  weight: 700, tracking: '2em',     lineHeight: 1.2, sample: 'navigation' },
  { role: 'Display',  family: 'var(--font-heading)', size: '80px',  weight: 700, tracking: '0.125em', lineHeight: 1,   sample: '144' },
]

export const TypeScale = {
  render: () => ({
    template: /* html */ `
      <div style="padding: 32px; background: var(--color-surface-page); min-height: 100vh;">
        <h1 style="font-family: var(--font-display); color: var(--color-content-primary); font-size: 40px; margin: 0 0 48px;">Type Scale</h1>
        <div v-for="style in typeScale" :key="style.role"
          style="display: flex; align-items: baseline; gap: 24px; padding: 24px 0; border-bottom: 1px solid var(--color-border-subtle);">
          <div style="min-width: 80px;">
            <span style="font-family: var(--font-heading); color: var(--color-content-secondary); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">{{ style.role }}</span>
          </div>
          <div :style="{
            fontFamily: style.family,
            fontSize: style.size,
            fontWeight: style.weight,
            letterSpacing: style.tracking,
            lineHeight: style.lineHeight,
            textTransform: style.transform || 'none',
            color: 'var(--color-content-primary)',
            flex: 1,
          }">{{ style.sample }}</div>
          <div style="min-width: 160px; text-align: right;">
            <div style="font-family: var(--font-body); color: var(--color-content-secondary); font-size: 11px;">{{ style.size }} · w{{ style.weight }}</div>
          </div>
        </div>
      </div>
    `,
    data() {
      return { typeScale }
    },
  }),
}
