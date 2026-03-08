export default {
  title: '⬡ Atoms/Badge & Chip',
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Badge, chip, pill e tag. Usati per stato accesso documenti, settori tematici, tipo documento, notifiche.' } },
  },
};

const css = `<style>
  .badge {
    display: inline-flex; align-items: center; gap: 5px;
    font-family: var(--font-ui); font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
    padding: 3px 8px; border-radius: var(--radius-sm); font-weight: 400; white-space: nowrap;
  }
  .badge-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  /* Status */
  .badge-success { background: var(--color-feedback-success-bg); color: var(--color-feedback-success-text); }
  .badge-warning { background: var(--color-feedback-warning-bg); color: var(--color-feedback-warning-text); }
  .badge-error   { background: var(--color-feedback-error-bg);   color: var(--color-feedback-error-text); }
  .badge-info    { background: var(--color-feedback-info-bg, #dbeafe); color: var(--color-feedback-info-text, #1e40af); }
  .badge-neutral { background: var(--color-surface-card); color: var(--color-content-secondary); border: 1px solid var(--color-border-default); }
  .badge-brand   { background: var(--color-brand-muted); color: var(--color-content-brand); }
  /* Pill */
  .pill {
    display: inline-flex; align-items: center; gap: 5px;
    font-family: var(--font-ui); font-size: 11px; letter-spacing: .06em;
    padding: 4px 10px; border-radius: var(--radius-full); border: 1px solid transparent;
  }
  /* Sector chips */
  .chip-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
  .label { font-family: var(--font-ui); font-size: 11px; letter-spacing:.12em; text-transform:uppercase; color: var(--color-content-secondary); margin: 28px 0 10px; display: block; }
</style>`;

export const AllBadges = {
  name: 'Tutti i badge',
  render: () => `${css}
<div style="padding:32px;max-width:800px;">
  <h1 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Badge & Chip</h1>
  <p style="font-family:var(--font-body);font-size:14px;color:var(--color-content-secondary);margin:0 0 32px;">Indicatori di stato, accesso, tipo e settore.</p>

  <span class="label">Status / Feedback</span>
  <div class="row">
    <span class="badge badge-success"><span class="badge-dot" style="background:var(--color-feedback-success-text)"></span>Aperto</span>
    <span class="badge badge-warning"><span class="badge-dot" style="background:var(--color-feedback-warning-text)"></span>In revisione</span>
    <span class="badge badge-error"><span class="badge-dot" style="background:var(--color-feedback-error-text)"></span>Scaduto</span>
    <span class="badge badge-info">In arrivo</span>
    <span class="badge badge-neutral">Riservato</span>
    <span class="badge badge-neutral">Bozza</span>
    <span class="badge badge-brand">✅ Verificato</span>
  </div>

  <span class="label">Tipo documento</span>
  <div class="row">
    <span class="badge badge-neutral">Rapporto</span>
    <span class="badge badge-neutral">Policy brief</span>
    <span class="badge badge-neutral">Working paper</span>
    <span class="badge badge-neutral">Dataset</span>
    <span class="badge badge-neutral">Executive summary</span>
    <span class="badge badge-neutral">Linee guida</span>
  </div>

  <span class="label">Accesso documento</span>
  <div class="row">
    <span class="badge badge-success">Aperto</span>
    <span class="badge badge-neutral">Riservato</span>
    <span class="badge badge-warning">Abbonamento</span>
    <span class="badge badge-error">Accesso negato</span>
  </div>

  <span class="label">Chip settore (Susdef) — con colore dinamico</span>
  <div class="row">
    ${[
      { name: 'Eco-innovazione',      p: '#FF8C01', m: '#FFF1D9' },
      { name: 'Energia e Clima',      p: '#2792B9', m: '#D9EEF7' },
      { name: 'Economia Circolare',   p: '#7B7EC8', m: '#EEEEFF' },
      { name: 'Mobilità',             p: '#CE9B62', m: '#F5EAD8' },
      { name: 'Green City',           p: '#B9284F', m: '#F7D4DC' },
      { name: 'Agroecologia',         p: '#B08800', m: '#FFF7D9' },
      { name: 'Stati Generali',       p: '#2A8A6A', m: '#E5F7F2' },
      { name: 'Corsi e Formazione',   p: '#C25490', m: '#FEE8F3' },
    ].map(s => `
      <span class="pill" style="background:${s.m};border-color:${s.p}20;color:#212121;">
        <span class="chip-dot" style="background:${s.p};"></span>
        ${s.name}
      </span>
    `).join('')}
  </div>

  <span class="label">Version / Meta badge</span>
  <div class="row">
    <span class="badge badge-brand">v0.2.0</span>
    <span class="badge badge-neutral">Tier 2</span>
    <span class="badge badge-success">WCAG AA</span>
    <span class="badge badge-neutral">IT</span>
    <span class="badge badge-neutral">EN</span>
    <span class="badge badge-info">⏳ Pianificato</span>
  </div>

  <span class="label">Notifica / counter</span>
  <div class="row" style="align-items:center;">
    <span style="
      display:inline-flex;align-items:center;justify-content:center;
      width:20px;height:20px;border-radius:50%;
      background:var(--color-feedback-notification, #FF3636);
      color:#fff;font-family:var(--font-ui);font-size:11px;font-weight:600;
    ">3</span>
    <span style="
      display:inline-flex;align-items:center;justify-content:center;
      min-width:20px;height:20px;padding:0 6px;border-radius:var(--radius-full);
      background:var(--color-brand-primary);
      color:#fff;font-family:var(--font-ui);font-size:11px;
    ">12</span>
  </div>
</div>
  `,
};
