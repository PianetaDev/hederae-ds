export default {
  title: '⬡ Molecules/Search Bar',
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Barra di ricerca. Varianti: hero (grande, homepage), inline (filtri hub), compact (header). Tutte le varianti supportano placeholder, icona lente, pulsante submit.' } },
  },
};

const css = `<style>
  /* Hero search */
  .search-hero {
    display: flex; align-items: center;
    background: var(--color-surface-page);
    border: 2px solid var(--color-border-default);
    border-radius: var(--radius-lg, 12px);
    overflow: hidden;
    transition: border-color .15s, box-shadow .15s;
    box-shadow: var(--shadow-sm);
  }
  .search-hero:focus-within {
    border-color: var(--color-border-brand);
    box-shadow: var(--shadow-glow-brand);
  }
  .search-hero-input {
    flex: 1; border: none; outline: none;
    font-family: var(--font-body); font-size: 17px;
    color: var(--color-content-primary);
    background: transparent;
    padding: 18px 20px;
  }
  .search-hero-input::placeholder { color: var(--color-content-secondary); }
  .search-hero-btn {
    margin: 6px; padding: 12px 24px;
    font-family: var(--font-ui); font-size: 14px; font-weight: 600;
    background: var(--color-interactive-primary-bg);
    color: var(--color-interactive-primary-text);
    border: none; border-radius: var(--radius-md); cursor: pointer;
    white-space: nowrap; transition: background .12s;
  }
  .search-hero-btn:hover { filter: brightness(1.08); }
  /* Inline search (filtri) */
  .search-inline {
    display: flex; align-items: center; gap: 0;
    background: var(--color-surface-page);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-sm);
    overflow: hidden;
    transition: border-color .15s;
  }
  .search-inline:focus-within { border-color: var(--color-border-brand); }
  .search-inline-icon {
    padding: 0 12px; color: var(--color-content-secondary); font-size: 15px;
    display: flex; align-items: center; flex-shrink: 0;
  }
  .search-inline-input {
    flex: 1; border: none; outline: none;
    font-family: var(--font-body); font-size: 14px;
    color: var(--color-content-primary); background: transparent;
    padding: 10px 8px 10px 0;
  }
  .search-inline-input::placeholder { color: var(--color-content-secondary); }
  .search-inline-btn {
    padding: 10px 16px;
    font-family: var(--font-ui); font-size: 13px; font-weight: 600;
    background: var(--color-interactive-primary-bg);
    color: var(--color-interactive-primary-text);
    border: none; cursor: pointer;
    transition: background .12s;
  }
  .search-inline-btn:hover { filter: brightness(1.08); }
  /* Compact (header) */
  .search-compact {
    display: flex; align-items: center;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-full, 999px);
    padding: 6px 12px 6px 14px; gap: 8px;
    transition: border-color .15s, box-shadow .15s;
    min-width: 220px;
  }
  .search-compact:focus-within { border-color: var(--color-border-brand); box-shadow: var(--shadow-sm); }
  .search-compact-input {
    flex: 1; border: none; outline: none;
    font-family: var(--font-body); font-size: 13px;
    color: var(--color-content-primary); background: transparent;
  }
  .search-compact-input::placeholder { color: var(--color-content-secondary); }
  .search-compact-icon { color: var(--color-content-secondary); font-size: 14px; display: flex; align-items: center; }
  /* Filter row */
  .filter-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  .filter-select {
    font-family: var(--font-ui); font-size: 13px;
    color: var(--color-content-primary);
    background: var(--color-surface-page);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-sm);
    padding: 8px 12px; cursor: pointer;
    transition: border-color .12s;
  }
  .filter-select:focus { outline: none; border-color: var(--color-border-brand); }
  .filter-tag {
    font-family: var(--font-ui); font-size: 11px; letter-spacing: .05em;
    padding: 5px 10px; border-radius: var(--radius-full, 999px);
    border: 1px solid var(--color-border-default);
    background: var(--color-surface-raised);
    color: var(--color-content-secondary);
    cursor: pointer; transition: border-color .12s, color .12s, background .12s;
  }
  .filter-tag.active {
    border-color: var(--color-border-brand);
    background: var(--color-interactive-primary-bg);
    color: var(--color-interactive-primary-text);
  }
  .filter-tag:hover:not(.active) { border-color: var(--color-border-brand); color: var(--color-content-brand); }
</style>`;

export const Hero = {
  name: 'Hero (Homepage)',
  render: () => `${css}
<div style="padding:32px;max-width:680px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 20px;">Search Bar — Hero</h2>
  <div class="search-hero">
    <input class="search-hero-input" type="search" placeholder="Cerca documenti, settori, autori…" />
    <button class="search-hero-btn">Cerca</button>
  </div>
  <p style="font-family:var(--font-body);font-size:12px;color:var(--color-content-secondary);margin:10px 0 0;">Suggerimenti: «energie rinnovabili», «economia circolare 2023», «PNRR mobilità»</p>
</div>`,
};

export const InlineWithFilters = {
  name: 'Inline + filtri (Hub settore)',
  render: () => `${css}
<div style="padding:32px;max-width:760px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 20px;">Search Bar — Inline + filtri</h2>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div class="search-inline">
      <span class="search-inline-icon">🔍</span>
      <input class="search-inline-input" type="search" placeholder="Cerca in Energia e Clima…" />
      <button class="search-inline-btn">Cerca</button>
    </div>
    <div class="filter-row">
      <select class="filter-select">
        <option>Tipo: tutti</option>
        <option>Rapporto</option>
        <option>Policy brief</option>
        <option>Working paper</option>
        <option>Dataset</option>
      </select>
      <select class="filter-select">
        <option>Anno: tutti</option>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
      </select>
      <select class="filter-select">
        <option>Accesso: tutti</option>
        <option>Aperto</option>
        <option>Riservato</option>
      </select>
    </div>
    <div class="filter-row">
      <span style="font-family:var(--font-ui);font-size:11px;color:var(--color-content-secondary);letter-spacing:.06em;text-transform:uppercase;margin-right:4px;">Temi:</span>
      <button class="filter-tag active">Rinnovabili</button>
      <button class="filter-tag">Efficienza</button>
      <button class="filter-tag">PNRR</button>
      <button class="filter-tag">Carbon pricing</button>
      <button class="filter-tag">Comunità energetiche</button>
      <button class="filter-tag">H₂ / Gas</button>
    </div>
  </div>
</div>`,
};

export const Compact = {
  name: 'Compact (Header)',
  render: () => `${css}
<div style="padding:32px;display:flex;flex-direction:column;gap:16px;max-width:400px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 8px;">Search Bar — Compact</h2>
  <div class="search-compact">
    <span class="search-compact-icon">🔍</span>
    <input class="search-compact-input" type="search" placeholder="Cerca…" />
  </div>
  <div class="search-compact" style="min-width:280px;">
    <span class="search-compact-icon">🔍</span>
    <input class="search-compact-input" type="search" placeholder="Cerca documenti e settori…" />
  </div>
</div>`,
};
