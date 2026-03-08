export default {
  title: '⬡ Tokens/Colori',
  parameters: {
    layout: 'padded',
    docs: {
      description: { component: 'Token semantici di colore. I valori cambiano in base al brand selezionato nel toolbar. Usa il switcher 🎨 in alto per passare da Susdef a AGESCI, Rara, Corner Table.' },
    },
  },
};

const section = (label, desc, tokens) => `
  <div style="margin-bottom:48px;">
    <h2 style="font-family:var(--font-ui,monospace);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-content-secondary);margin:0 0 4px;">${label}</h2>
    <p style="font-family:var(--font-body,sans-serif);font-size:13px;color:var(--color-content-secondary);margin:0 0 16px;">${desc}</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
      ${tokens.map(t => `
        <div style="display:flex;flex-direction:column;gap:8px;min-width:96px;max-width:120px;">
          <div style="
            background:${t.bg ? t.bg : `var(${t.v})`};
            width:80px;height:64px;border-radius:8px;
            border:1px solid rgba(0,0,0,.08);
            ${t.ring ? `box-shadow:0 0 0 3px var(${t.v})` : ''}
          "></div>
          <div>
            <div style="font-family:var(--font-body,sans-serif);font-size:12px;font-weight:600;color:var(--color-content-primary);">${t.l}</div>
            <div style="font-family:var(--font-ui,monospace);font-size:10px;color:var(--color-content-secondary);word-break:break-all;">${t.v}</div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const render = () => `
<div style="padding:32px;max-width:960px;">
  <h1 style="font-family:var(--font-display,serif);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Color Tokens</h1>
  <p style="font-family:var(--font-body,sans-serif);font-size:14px;color:var(--color-content-secondary);margin:0 0 48px;">Token semantici attivi per il brand corrente. Cambia brand con il switcher 🎨 nel toolbar.</p>

  ${section('Surface', 'Livelli di profondità dello sfondo', [
    { v: '--color-surface-page',    l: 'Page' },
    { v: '--color-surface-raised',  l: 'Raised' },
    { v: '--color-surface-card',    l: 'Card' },
    { v: '--color-surface-deep',    l: 'Deep', bg: 'var(--color-surface-deep,#E9E3D7)' },
    { v: '--color-surface-inverse', l: 'Inverse' },
  ])}

  ${section('Content', 'Testo e icone', [
    { v: '--color-content-primary',   l: 'Primary' },
    { v: '--color-content-secondary', l: 'Secondary' },
    { v: '--color-content-disabled',  l: 'Disabled' },
    { v: '--color-content-inverse',   l: 'Inverse' },
    { v: '--color-content-brand',     l: 'Brand' },
  ])}

  ${section('Border', 'Bordi e separatori', [
    { v: '--color-border-default', l: 'Default' },
    { v: '--color-border-subtle',  l: 'Subtle' },
    { v: '--color-border-brand',   l: 'Brand' },
    { v: '--color-border-focus',   l: 'Focus', ring: true },
  ])}

  ${section('Interactive — Primary', 'Bottone CTA principale', [
    { v: '--color-interactive-primary-bg',          l: 'BG' },
    { v: '--color-interactive-primary-bg-hover',    l: 'Hover' },
    { v: '--color-interactive-primary-bg-active',   l: 'Active' },
    { v: '--color-interactive-primary-bg-disabled', l: 'Disabled' },
    { v: '--color-interactive-primary-label',       l: 'Label' },
  ])}

  ${section('Interactive — Secondary', 'Bottone outlined', [
    { v: '--color-interactive-secondary-border', l: 'Border' },
    { v: '--color-interactive-secondary-label',  l: 'Label' },
  ])}

  ${section('Brand', 'Identità brand', [
    { v: '--color-brand-primary',   l: 'Primary' },
    { v: '--color-brand-secondary', l: 'Secondary' },
    { v: '--color-brand-accent',    l: 'Accent' },
    { v: '--color-brand-muted',     l: 'Muted' },
  ])}

  ${section('Feedback', 'Stati di sistema', [
    { v: '--color-feedback-success-bg',   l: 'Success BG' },
    { v: '--color-feedback-success-text', l: 'Success Text' },
    { v: '--color-feedback-warning-bg',   l: 'Warning BG' },
    { v: '--color-feedback-warning-text', l: 'Warning Text' },
    { v: '--color-feedback-error-bg',     l: 'Error BG' },
    { v: '--color-feedback-error-text',   l: 'Error Text' },
    { v: '--color-feedback-info-bg',      l: 'Info BG' },
    { v: '--color-feedback-info-text',    l: 'Info Text' },
  ])}
</div>
`;

export const Semantici = { render };

export const SettoriSusdef = {
  name: 'Settori (Susdef)',
  parameters: { docs: { description: { story: 'Token colore per gli 8 settori tematici. Disponibili solo nel brand Susdef.' } } },
  render: () => `
<div style="padding:32px;max-width:960px;">
  <h1 style="font-family:var(--font-display,serif);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Sector Colors — Susdef</h1>
  <p style="font-family:var(--font-body,sans-serif);font-size:14px;color:var(--color-content-secondary);margin:0 0 40px;">8 settori tematici. I colori <code>-primary</code> sono per bordi/accenti, i <code>-muted</code> per background tag/chip.</p>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
    ${[
      { name: 'Eco-innovazione',      p: '--color-sector-ecoinnovazione-primary',      m: '--color-sector-ecoinnovazione-muted' },
      { name: 'Energia e Clima',      p: '--color-sector-energia-clima-primary',       m: '--color-sector-energia-clima-muted' },
      { name: 'Economia Circolare',   p: '--color-sector-economia-circolare-primary',  m: '--color-sector-economia-circolare-muted' },
      { name: 'Mobilità Sostenibile', p: '--color-sector-mobilita-sostenibile-primary',m: '--color-sector-mobilita-sostenibile-muted' },
      { name: 'Green City',           p: '--color-sector-green-city-primary',          m: '--color-sector-green-city-muted' },
      { name: 'Agroecologia',         p: '--color-sector-agroecologia-primary',        m: '--color-sector-agroecologia-muted' },
      { name: 'Stati Generali',       p: '--color-sector-stati-generali-primary',      m: '--color-sector-stati-generali-muted' },
      { name: 'Corsi e Formazione',   p: '--color-sector-corsi-formazione-primary',    m: '--color-sector-corsi-formazione-muted' },
    ].map(s => `
      <div style="border:1px solid var(--color-border-default,#ddd);border-radius:8px;overflow:hidden;">
        <div style="display:grid;grid-template-columns:1fr 1fr;">
          <div style="height:64px;background:var(${s.p});"></div>
          <div style="height:64px;background:var(${s.m});"></div>
        </div>
        <div style="padding:10px 12px;">
          <div style="font-family:var(--font-body,sans-serif);font-size:13px;font-weight:600;color:var(--color-content-primary);margin-bottom:4px;">${s.name}</div>
          <div style="font-family:var(--font-ui,monospace);font-size:9px;color:var(--color-content-secondary);">${s.p.replace('--color-','')} <br>${s.m.replace('--color-','')}</div>
        </div>
      </div>
    `).join('')}
  </div>
</div>
  `,
};
