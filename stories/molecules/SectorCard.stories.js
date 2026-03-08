export default {
  title: '⬡ Molecules/Sector Card',
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Card settore tematico usata nella homepage (grid 8 settori). Ogni card usa variabili CSS --s-primary e --s-muted per il colore settore. Varianti: compact (homepage grid) e featured (card in evidenza).' } },
  },
};

const css = `<style>
  .sector-card {
    display: flex; flex-direction: column; gap: 12px;
    padding: 20px;
    border-radius: var(--radius-md);
    background: var(--s-muted, #F0F4F8);
    border: 1px solid transparent;
    text-decoration: none;
    cursor: pointer;
    transition: border-color .15s, box-shadow .15s, transform .15s;
  }
  .sector-card:hover {
    border-color: var(--s-primary);
    box-shadow: var(--shadow-sm);
    transform: translateY(-2px);
  }
  .sector-icon {
    width: 36px; height: 36px; border-radius: var(--radius-sm);
    background: var(--s-primary);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .sector-name {
    font-family: var(--font-heading); font-size: 15px; font-weight: 500;
    color: var(--color-content-primary); line-height: 1.3;
  }
  .sector-count {
    font-family: var(--font-ui); font-size: 11px; letter-spacing: .04em; text-transform: uppercase;
    color: var(--s-primary);
  }
  /* Featured variant */
  .sector-card-featured {
    display: grid; grid-template-columns: auto 1fr; gap: 16px; align-items: center;
    padding: 24px;
    border-radius: var(--radius-md);
    background: var(--s-muted);
    border: 1px solid transparent;
    text-decoration: none; cursor: pointer;
    transition: border-color .15s, box-shadow .15s;
  }
  .sector-card-featured:hover { border-color: var(--s-primary); box-shadow: var(--shadow-md); }
  .sector-icon-lg {
    width: 52px; height: 52px; border-radius: var(--radius-md);
    background: var(--s-primary);
    display: flex; align-items: center; justify-content: center; font-size: 26px;
  }
  .sector-card-featured .sector-name { font-size: 17px; }
  .sector-desc {
    font-size: 13px; color: var(--color-content-secondary); line-height: 1.5;
    margin-top: 4px;
  }
  .sector-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
  .sector-tag {
    font-family: var(--font-ui); font-size: 10px; letter-spacing: .06em; text-transform: uppercase;
    padding: 2px 7px; border-radius: 3px;
    background: var(--color-surface-raised); color: var(--color-content-secondary);
  }
</style>`;

const sectors = [
  { name: 'Energia e Clima',          emoji: '⚡', sc: '#2792B9', sm: '#D9EEF7', count: 312, tags: ['Rinnovabili', 'PNRR', 'Carbon pricing'] },
  { name: 'Eco-innovazione',           emoji: '🌱', sc: '#FF8C01', sm: '#FFF1D9', count: 189, tags: ['Green tech', 'Startup', 'R&D'] },
  { name: 'Economia Circolare',        emoji: '♻️', sc: '#7B7EC8', sm: '#EEEEFF', count: 245, tags: ['Waste', 'Riciclo', 'EPR'] },
  { name: 'Mobilità Sostenibile',      emoji: '🚲', sc: '#2ECC8A', sm: '#D5F5EB', count: 167, tags: ['EV', 'TPL', 'Ciclovie'] },
  { name: 'Città e Territori',         emoji: '🏙️', sc: '#E64C6C', sm: '#FFE8ED', count: 204, tags: ['PNRR', 'Housing', 'NBS'] },
  { name: 'Acqua e Biodiversità',      emoji: '💧', sc: '#1A7F6A', sm: '#D4EDE8', count: 143, tags: ['Idrologia', 'Habitat', 'One Health'] },
  { name: 'Governance e Policy',       emoji: '⚖️', sc: '#8B6914', sm: '#FDF3D8', count: 298, tags: ['Regolazione', 'Tassonomia UE'] },
  { name: 'Finanza Sostenibile',       emoji: '📊', sc: '#5A4FCF', sm: '#EBEBFF', count: 176, tags: ['ESG', 'Green bonds', 'SFDR'] },
];

export const Grid = {
  name: 'Grid 4×2 (Homepage)',
  render: () => `${css}
<div style="padding:32px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 20px;">Sector Card — Grid</h2>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:960px;">
    ${sectors.map(s => `
    <a class="sector-card" style="--s-primary:${s.sc};--s-muted:${s.sm};">
      <div class="sector-icon">${s.emoji}</div>
      <div>
        <div class="sector-name">${s.name}</div>
        <div class="sector-count">${s.count} documenti</div>
      </div>
    </a>`).join('')}
  </div>
</div>`,
};

export const Featured = {
  name: 'Card featured (con descrizione)',
  render: () => `${css}
<div style="padding:32px;max-width:680px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 20px;">Sector Card — Featured</h2>
  <div style="display:flex;flex-direction:column;gap:12px;">
    ${sectors.slice(0,3).map(s => `
    <a class="sector-card-featured" style="--s-primary:${s.sc};--s-muted:${s.sm};">
      <div class="sector-icon-lg">${s.emoji}</div>
      <div>
        <div class="sector-name">${s.name}</div>
        <div class="sector-desc">${s.count} documenti · policy brief, rapporti, working paper</div>
        <div class="sector-tags">${s.tags.map(t => `<span class="sector-tag">${t}</span>`).join('')}</div>
      </div>
    </a>`).join('')}
  </div>
</div>`,
};

export const SingleCard = {
  name: 'Singola card',
  render: () => `${css}
<div style="padding:32px;max-width:220px;">
  <a class="sector-card" style="--s-primary:#2792B9;--s-muted:#D9EEF7;">
    <div class="sector-icon">⚡</div>
    <div>
      <div class="sector-name">Energia e Clima</div>
      <div class="sector-count">312 documenti</div>
    </div>
  </a>
</div>`,
};
