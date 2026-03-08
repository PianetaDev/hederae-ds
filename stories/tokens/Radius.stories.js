export default {
  title: '⬡ Tokens/Border Radius',
  parameters: { layout: 'padded' },
};

const radii = [
  { tok: '--radius-none', label: 'None',  usage: 'Tabelle, divisori, elementi flat' },
  { tok: '--radius-sm',   label: 'Small', usage: 'Badge, tag, input, bottoni (Susdef: 4px, AGESCI: 8px)' },
  { tok: '--radius-md',   label: 'Medium', usage: 'Card, panel, modal (Susdef: 8px, AGESCI: 16px)' },
  { tok: '--radius-lg',   label: 'Large',  usage: 'Drawer, sheet, card prominente' },
  { tok: '--radius-xl',   label: 'XL',     usage: 'Hero card, showcase element' },
  { tok: '--radius-full', label: 'Full',   usage: 'Pill: chip settore, avatar, badge notifica' },
];

export const Scale = {
  render: () => `
<div style="padding:32px;max-width:800px;">
  <h1 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Border Radius</h1>
  <p style="font-family:var(--font-body);font-size:14px;color:var(--color-content-secondary);margin:0 0 40px;">Il raggio cambia per brand — Susdef usa valori più stretti (istituzionale), AGESCI più ampi (friendly).</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
    ${radii.map(r => `
      <div style="background:var(--color-surface-raised);border:1px solid var(--color-border-default);border-radius:8px;padding:20px;">
        <div style="
          width:100%;height:72px;
          background:var(--color-brand-primary,#013E39);
          opacity:0.15;
          border-radius:var(${r.tok});
          border:2px solid var(--color-brand-primary,#013E39);
          margin-bottom:14px;
        "></div>
        <div style="font-family:var(--font-body);font-size:14px;font-weight:600;color:var(--color-content-primary);margin-bottom:4px;">${r.label}</div>
        <code style="font-family:var(--font-ui);font-size:11px;color:var(--color-content-secondary);">${r.tok}</code>
        <div style="font-family:var(--font-body);font-size:12px;color:var(--color-content-secondary);margin-top:6px;">${r.usage}</div>
      </div>
    `).join('')}
  </div>
</div>
  `,
};
