export default {
  title: '⬡ Tokens/Tipografia',
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Scala tipografica. Ogni brand usa famiglie font diverse: Susdef → IBM Plex (Serif + Sans + Mono), AGESCI → Cabinet Grotesk + Inter.' } },
  },
};

const scale = [
  { role: 'Display',  family: 'var(--font-display)', size: '56px',  weight: 500, lh: 1.05, sample: 'La conoscenza che serve' },
  { role: 'H1',       family: 'var(--font-display)', size: '40px',  weight: 500, lh: 1.15, sample: 'Titolo pagina principale' },
  { role: 'H2',       family: 'var(--font-heading)', size: '28px',  weight: 500, lh: 1.25, sample: 'Sezione di contenuto' },
  { role: 'H3',       family: 'var(--font-heading)', size: '20px',  weight: 500, lh: 1.3,  sample: 'Card o sotto-sezione' },
  { role: 'H4',       family: 'var(--font-heading)', size: '16px',  weight: 600, lh: 1.35, sample: 'Gruppo etichette' },
  { role: 'Body LG',  family: 'var(--font-body)',    size: '18px',  weight: 400, lh: 1.65, sample: 'Testo corpo principale. Usato per abstract, descrizioni lunghe e contenuto editoriale di qualità.' },
  { role: 'Body',     family: 'var(--font-body)',    size: '16px',  weight: 400, lh: 1.6,  sample: 'Testo secondario. Usato per metadati, note, caption e contenuto di supporto.' },
  { role: 'Body SM',  family: 'var(--font-body)',    size: '14px',  weight: 400, lh: 1.5,  sample: 'Testo piccolo per etichette, breadcrumb e dettagli.' },
  { role: 'Label',    family: 'var(--font-ui)',      size: '11px',  weight: 400, lh: 1.2,  sample: 'LABEL / EYEBROW', ls: '0.14em', upper: true },
  { role: 'UI',       family: 'var(--font-ui)',      size: '13px',  weight: 400, lh: 1.4,  sample: 'Elemento interfaccia, badge, tag, codice' },
  { role: 'UI SM',    family: 'var(--font-ui)',      size: '11px',  weight: 400, lh: 1.3,  sample: 'Versione token · v0.2.0 · metadata' },
];

export const TypeScale = {
  render: () => `
<div style="padding:32px;max-width:900px;">
  <h1 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Type Scale</h1>
  <p style="font-family:var(--font-body);font-size:14px;color:var(--color-content-secondary);margin:0 0 40px;">Scala tipografica del brand corrente. Il font cambia con il brand switcher 🎨.</p>
  <div>
    ${scale.map(s => `
      <div style="display:grid;grid-template-columns:72px 1fr auto;gap:16px 24px;align-items:baseline;padding:20px 0;border-bottom:1px solid var(--color-border-default);">
        <div style="font-family:var(--font-ui);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-content-secondary);padding-top:4px;">${s.role}</div>
        <div style="
          font-family:${s.family};
          font-size:${s.size};
          font-weight:${s.weight};
          line-height:${s.lh};
          ${s.ls ? `letter-spacing:${s.ls};` : ''}
          ${s.upper ? 'text-transform:uppercase;' : ''}
          color:var(--color-content-primary);
        ">${s.sample}</div>
        <div style="text-align:right;white-space:nowrap;">
          <div style="font-family:var(--font-ui);font-size:11px;color:var(--color-content-secondary);">${s.size} / w${s.weight}</div>
          <div style="font-family:var(--font-ui);font-size:10px;color:var(--color-content-disabled);">${s.family.replace('var(','').replace(')','')}</div>
        </div>
      </div>
    `).join('')}
  </div>
</div>
  `,
};

export const FontFamilies = {
  name: 'Font Families',
  render: () => `
<div style="padding:32px;max-width:900px;">
  <h1 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 40px;">Font Families</h1>
  ${[
    { tok: '--font-display', role: 'Display / Headings', sample: 'La transizione ecologica inizia dalla conoscenza.' },
    { tok: '--font-heading', role: 'Heading',            sample: 'Sezioni e titoli di secondo livello.' },
    { tok: '--font-body',    role: 'Body',               sample: 'Testo corpo, paragrafi, descrizioni, metadati e tutto il contenuto editoriale.' },
    { tok: '--font-ui',      role: 'UI / Mono',          sample: 'LABEL · TAG · badge · v0.2.0 · monospace-token' },
  ].map(f => `
    <div style="margin-bottom:32px;padding:24px;background:var(--color-surface-raised);border-radius:8px;border:1px solid var(--color-border-default);">
      <div style="font-family:var(--font-ui);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-content-secondary);margin-bottom:8px;">${f.role}</div>
      <div style="font-family:${f.tok};font-size:24px;color:var(--color-content-primary);line-height:1.3;margin-bottom:10px;">${f.sample}</div>
      <code style="font-family:var(--font-ui);font-size:11px;background:var(--color-surface-card);padding:3px 7px;border-radius:3px;color:var(--color-content-secondary);">${f.tok}</code>
    </div>
  `).join('')}
</div>
  `,
};
