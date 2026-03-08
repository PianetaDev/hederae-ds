export default {
  title: '⬡ Molecules/Doc Card',
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Card documento in tre formati: compact (grid), full (rich detail), list-row (tabella). Il chip settore usa i token --color-sector-*.' } },
  },
};

const css = `<style>
  .doc-card {
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    padding: 20px;
    display: flex; flex-direction: column; gap: 12px;
    text-decoration: none;
    transition: border-color .15s, box-shadow .15s;
    cursor: pointer;
  }
  .doc-card:hover { border-color: var(--color-border-brand); box-shadow: var(--shadow-sm); }
  .doc-card-tag {
    display: inline-flex; align-items: center; gap: 5px;
    font-family: var(--font-ui); font-size: 10px; letter-spacing: .08em; text-transform: uppercase;
    padding: 3px 8px; border-radius: var(--radius-sm);
    width: fit-content;
  }
  .doc-tag-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  .doc-card-title {
    font-family: var(--font-heading); font-size: 15px; font-weight: 500;
    color: var(--color-content-primary); line-height: 1.35;
    flex: 1;
  }
  .doc-card-abstract {
    font-size: 13px; color: var(--color-content-secondary); line-height: 1.55;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
  .doc-card-meta {
    font-size: 12px; color: var(--color-content-secondary);
    display: flex; gap: 10px; flex-wrap: wrap; align-items: center;
    border-top: 1px solid var(--color-border-default); padding-top: 10px;
  }
  .badge-sm {
    font-family: var(--font-ui); font-size: 10px; letter-spacing: .06em; text-transform: uppercase;
    padding: 2px 6px; border-radius: 3px;
  }
  .badge-open { background: var(--color-feedback-success-bg); color: var(--color-feedback-success-text); }
  .badge-rest { background: var(--color-surface-card); color: var(--color-content-secondary); }
  /* Row variant */
  .doc-row {
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    padding: 16px 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px 20px;
    text-decoration: none;
    transition: border-color .15s;
    cursor: pointer;
  }
  .doc-row:hover { border-color: var(--color-border-brand); }
  .doc-row-title {
    font-family: var(--font-heading); font-size: 15px; font-weight: 500;
    color: var(--color-content-primary); line-height: 1.3;
  }
  .doc-row-meta { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  .doc-row-aside { grid-row: 1 / 3; display: flex; flex-direction: column; align-items: flex-end; gap: 8px; justify-content: center; }
  .doc-cta {
    font-family: var(--font-body); font-size: 13px; font-weight: 600;
    color: var(--color-content-brand); text-decoration: none;
    border: 1px solid var(--color-border-brand); padding: 6px 12px; border-radius: var(--radius-sm);
  }
</style>`;

const sampleCards = (open) => {
  const a = open ? 'badge-open">Aperto' : 'badge-rest">Riservato';
  return `
  <a class="doc-card">
    <div class="doc-card-tag" style="background:#D9EEF7;color:#2792B9;">
      <span class="doc-tag-dot" style="background:#2792B9;"></span>Energia e Clima
    </div>
    <div class="doc-card-title">Stato delle energie rinnovabili in Italia: scenari al 2035</div>
    <div class="doc-card-abstract">Analisi prospettica sulla capacità installata di solare, eolico e idroelettrico. Include simulazioni di scenario e focus sull'impatto occupazionale.</div>
    <div class="doc-card-meta">
      <span>Rapporto · 2024</span>
      <span>ENEA, RSE S.p.A.</span>
      <span class="badge-sm ${a}</span>
    </div>
  </a>`;
};

export const Grid = {
  name: 'Grid (3 colonne)',
  render: () => `${css}
<div style="padding:32px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 20px;">Doc Card — Grid</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:960px;">
    <a class="doc-card">
      <div class="doc-card-tag" style="background:#D9EEF7;color:#2792B9;"><span class="doc-tag-dot" style="background:#2792B9;"></span>Energia e Clima</div>
      <div class="doc-card-title">Stato delle energie rinnovabili in Italia: scenari al 2035</div>
      <div class="doc-card-meta"><span>Rapporto · 2024</span><span class="badge-sm badge-open">Aperto</span></div>
    </a>
    <a class="doc-card">
      <div class="doc-card-tag" style="background:#FFF1D9;color:#FF8C01;"><span class="doc-tag-dot" style="background:#FF8C01;"></span>Eco-innovazione</div>
      <div class="doc-card-title">Green procurement nelle PMI italiane: barriere e opportunità</div>
      <div class="doc-card-meta"><span>Policy brief · 2024</span><span class="badge-sm badge-rest">Riservato</span></div>
    </a>
    <a class="doc-card">
      <div class="doc-card-tag" style="background:#EEEEFF;color:#7B7EC8;"><span class="doc-tag-dot" style="background:#7B7EC8;"></span>Economia Circolare</div>
      <div class="doc-card-title">Rapporto sull'Economia Circolare in Italia 2023</div>
      <div class="doc-card-meta"><span>Rapporto · 2023</span><span class="badge-sm badge-rest">Riservato</span></div>
    </a>
  </div>
</div>`,
};

export const Full = {
  name: 'Card con abstract',
  render: () => `${css}
<div style="padding:32px;max-width:400px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 20px;">Doc Card — Full</h2>
  ${sampleCards(true)}
</div>`,
};

export const ListRow = {
  name: 'List row',
  render: () => `${css}
<div style="padding:32px;max-width:760px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 20px;">Doc Card — List row</h2>
  <div style="display:flex;flex-direction:column;gap:10px;">
    ${[
      { title: 'Stato delle energie rinnovabili al 2035', sector: 'Energia e Clima', sc: '#2792B9', sm: '#D9EEF7', type: 'Rapporto', year: '2024', open: true },
      { title: 'Green procurement nelle PMI italiane', sector: 'Eco-innovazione', sc: '#FF8C01', sm: '#FFF1D9', type: 'Policy brief', year: '2024', open: false },
      { title: 'Carbon pricing in Europa: impatti 2021–2023', sector: 'Energia e Clima', sc: '#2792B9', sm: '#D9EEF7', type: 'Working paper', year: '2023', open: false },
    ].map(d => `
      <a class="doc-row">
        <div>
          <div class="doc-row-title">${d.title}</div>
        </div>
        <div class="doc-row-meta">
          <span style="display:inline-flex;align-items:center;gap:4px;font-family:var(--font-ui);font-size:10px;text-transform:uppercase;letter-spacing:.06em;background:${d.sm};color:${d.sc};padding:2px 7px;border-radius:3px;">
            <span style="width:5px;height:5px;border-radius:50%;background:${d.sc};"></span>${d.sector}
          </span>
          <span style="font-family:var(--font-ui);font-size:11px;color:var(--color-content-secondary);">${d.type} · ${d.year}</span>
          <span class="badge-sm ${d.open ? 'badge-open">Aperto' : 'badge-rest">Riservato'}</span>
        </div>
        <div class="doc-row-aside">
          <span class="doc-cta">${d.open ? 'Leggi →' : 'Accedi →'}</span>
        </div>
      </a>
    `).join('')}
  </div>
</div>`,
};
