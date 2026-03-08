export default {
  title: '⬡ Tokens/Spaziatura',
  parameters: { layout: 'padded' },
};

const spaces = [
  { tok: '--space-0',  px: '0px' },
  { tok: '--space-1',  px: '4px' },
  { tok: '--space-2',  px: '8px' },
  { tok: '--space-3',  px: '12px' },
  { tok: '--space-4',  px: '16px' },
  { tok: '--space-6',  px: '24px' },
  { tok: '--space-8',  px: '32px' },
  { tok: '--space-12', px: '48px' },
  { tok: '--space-16', px: '64px' },
  { tok: '--space-20', px: '80px' },
  { tok: '--space-30', px: '120px' },
];

export const Scale = {
  render: () => `
<div style="padding:32px;max-width:800px;">
  <h1 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Spacing Scale</h1>
  <p style="font-family:var(--font-body);font-size:14px;color:var(--color-content-secondary);margin:0 0 40px;">Scala 4-point. Usa sempre i token, mai valori arbitrari.</p>
  <div style="display:flex;flex-direction:column;gap:12px;">
    ${spaces.map(s => `
      <div style="display:grid;grid-template-columns:120px auto 1fr;gap:16px;align-items:center;">
        <div style="font-family:var(--font-ui);font-size:12px;color:var(--color-content-secondary);">${s.tok}</div>
        <div style="font-family:var(--font-ui);font-size:12px;color:var(--color-content-primary);min-width:40px;">${s.px}</div>
        <div style="height:20px;background:var(--color-brand-primary,#013E39);opacity:0.6;border-radius:2px;width:${s.px};min-width:2px;"></div>
      </div>
    `).join('')}
  </div>
</div>
  `,
};
