export default {
  title: '⬡ Tokens/Elevation',
  parameters: { layout: 'padded' },
};

const shadows = [
  { tok: '--shadow-sm',         label: 'Small',       usage: 'Card resting, input, dropdown item' },
  { tok: '--shadow-md',         label: 'Medium',      usage: 'Card hover, popover, tooltip' },
  { tok: '--shadow-lg',         label: 'Large',       usage: 'Modal, dialog, overlay' },
  { tok: '--shadow-glow-brand', label: 'Glow Brand',  usage: 'Focus highlight, hero element, CTA attivo' },
];

export const Scale = {
  render: () => `
<div style="padding:40px;max-width:800px;background:var(--color-surface-card);">
  <h1 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Elevation / Shadow</h1>
  <p style="font-family:var(--font-body);font-size:14px;color:var(--color-content-secondary);margin:0 0 40px;">Le ombre trasmettono gerarchia visiva. Usa sempre i token — mai <code>box-shadow</code> arbitrari.</p>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:32px;">
    ${shadows.map(s => `
      <div style="
        background:var(--color-surface-page);
        border-radius:10px;
        padding:32px 24px;
        box-shadow:var(${s.tok});
      ">
        <div style="font-family:var(--font-body);font-size:16px;font-weight:600;color:var(--color-content-primary);margin-bottom:4px;">${s.label}</div>
        <code style="font-family:var(--font-ui);font-size:11px;color:var(--color-content-secondary);display:block;margin-bottom:8px;">${s.tok}</code>
        <div style="font-family:var(--font-body);font-size:13px;color:var(--color-content-secondary);">${s.usage}</div>
      </div>
    `).join('')}
  </div>
</div>
  `,
};
