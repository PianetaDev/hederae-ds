/**
 * Hederae DS — FilterBar organism
 * Barra filtri / ricerca — multi-brand, 5 varianti.
 *
 * Token-driven: colori, font adattati al brand attivo.
 * Varianti: Default (chips), Con ricerca, Con sort, Filtri attivi, Compatta (inline).
 */

export default {
  title: '⬡ Organisms/FilterBar — Filtri e ricerca',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Barra filtri e ricerca. Multi-brand via CSS vars. Varianti:
- **Default** — chips filtro orizzontali con counter
- **Con ricerca** — input search + chips
- **Con sort** — chips + dropdown ordinamento
- **Filtri attivi** — stato con tag filtri selezionati + reset
- **Compatta** — versione inline per toolbar / card header

Token attivi:
\`--color-brand-accent\` (chip attivo), \`--color-interactive-accent-label\`,
\`--font-body\`, \`--font-ui\`, \`--color-content-secondary\`.`,
      },
    },
  },
};

/* ── Shared CSS ──────────────────────────────────────────────── */
const css = `
<style>
  /* ── FilterBar container ── */
  .filterbar {
    background: var(--color-surface-page, #fff);
    border-bottom: 1px solid var(--color-border-default, #e5e5e5);
    padding: 0 48px;
    display: flex; align-items: center; gap: 12px;
    min-height: 52px; position: sticky; top: 0; z-index: 10;
  }

  /* ── Filter chips ── */
  .filter-chips {
    display: flex; align-items: center; gap: 6px;
    flex: 1; flex-wrap: nowrap; overflow-x: auto;
    scrollbar-width: none;
  }
  .filter-chips::-webkit-scrollbar { display: none; }

  .filter-chip {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 6px 12px; border-radius: 99px; white-space: nowrap;
    font-family: var(--font-body); font-size: 13px; font-weight: 500;
    border: 1.5px solid var(--color-border-default, #ddd);
    color: var(--color-content-secondary, #555);
    text-decoration: none; cursor: pointer;
    background: transparent;
    transition: border-color .12s, background .12s, color .12s;
  }
  .filter-chip:hover {
    border-color: var(--color-brand-accent, #D8EC28);
    background: rgba(0,0,0,0.02);
  }
  .filter-chip.active {
    background: var(--color-brand-accent, #D8EC28);
    border-color: var(--color-brand-accent, #D8EC28);
    color: var(--color-interactive-accent-label, #000);
    font-weight: 600;
  }
  .chip-count {
    font-size: 11px; opacity: 0.65; letter-spacing: 0.01em;
  }
  .chip-dot {
    width: 6px; height: 6px; border-radius: 50;
    flex-shrink: 0;
  }

  /* ── Search input ── */
  .filter-search-wrap {
    position: relative; flex-shrink: 0;
  }
  .filter-search-icon {
    position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
    font-size: 14px; color: var(--color-content-secondary, #999);
    pointer-events: none;
  }
  .filter-search {
    padding: 7px 14px 7px 34px; border-radius: 99px;
    border: 1.5px solid var(--color-border-default, #ddd);
    font-family: var(--font-body); font-size: 13px;
    color: var(--color-content-primary, #111); outline: none;
    width: 240px; transition: border-color .12s;
    background: var(--color-surface-page, #fff);
  }
  .filter-search::placeholder { color: var(--color-content-secondary, #aaa); }
  .filter-search:focus {
    border-color: var(--color-brand-accent, #D8EC28);
    box-shadow: 0 0 0 3px rgba(var(--color-brand-accent-rgb, 216,236,40), 0.12);
  }

  /* ── Sort select ── */
  .filter-sort {
    display: flex; align-items: center; gap: 6px;
    flex-shrink: 0; margin-left: auto;
  }
  .filter-sort-label {
    font-family: var(--font-ui, monospace); font-size: 10px;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--color-content-secondary, #999);
  }
  .filter-sort-select {
    padding: 6px 28px 6px 12px; border-radius: 8px;
    border: 1.5px solid var(--color-border-default, #ddd);
    font-family: var(--font-body); font-size: 12px;
    color: var(--color-content-primary, #111); outline: none;
    background: var(--color-surface-page, #fff);
    appearance: none; cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    transition: border-color .12s;
  }
  .filter-sort-select:focus { border-color: var(--color-brand-accent, #D8EC28); }

  /* ── Active tags ── */
  .filter-active-wrap {
    display: flex; align-items: center; gap: 8px;
    flex-wrap: wrap; padding: 8px 48px;
    background: var(--color-surface-page, #fff);
    border-bottom: 1px solid var(--color-border-default, #e5e5e5);
  }
  .filter-active-label {
    font-family: var(--font-ui, monospace); font-size: 10px;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--color-content-secondary, #999);
    flex-shrink: 0;
  }
  .filter-tag {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 6px;
    background: rgba(0,0,0,0.05);
    font-family: var(--font-body); font-size: 12px;
    color: var(--color-content-primary, #333);
    border: none; cursor: pointer; transition: background .1s;
  }
  .filter-tag:hover { background: rgba(0,0,0,0.1); }
  .filter-tag-x {
    width: 14px; height: 14px; border-radius: 50%;
    background: rgba(0,0,0,0.12); display: inline-flex;
    align-items: center; justify-content: center; font-size: 9px;
    color: var(--color-content-secondary, #666);
    flex-shrink: 0;
  }
  .filter-reset {
    margin-left: auto; font-family: var(--font-body); font-size: 12px;
    color: var(--color-content-secondary, #888); text-decoration: none;
    border: none; background: none; cursor: pointer;
    padding: 4px 8px; border-radius: 6px; transition: background .1s;
  }
  .filter-reset:hover { background: rgba(0,0,0,0.06); color: var(--color-content-primary, #333); }

  /* ── Divider vertical ── */
  .filter-sep {
    width: 1px; height: 20px;
    background: var(--color-border-default, #e0e0e0);
    flex-shrink: 0;
  }

  /* ── Result count ── */
  .filter-count {
    font-family: var(--font-ui, monospace); font-size: 11px;
    color: var(--color-content-secondary, #999); flex-shrink: 0;
    letter-spacing: 0.02em; white-space: nowrap;
  }

  /* ── Compact inline ── */
  .filterbar-compact {
    display: flex; align-items: center; gap: 8px;
    padding: 10px 24px; background: var(--color-surface-page, #fff);
    border-radius: 10px; border: 1px solid var(--color-border-default, #eee);
  }
  .filterbar-compact .filter-chip { padding: 4px 10px; font-size: 12px; }

  /* ── FilterBar inverse (su bg scuro) ── */
  .filterbar-dark {
    background: rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    padding: 0 48px;
    display: flex; align-items: center; gap: 12px;
    min-height: 52px;
  }
  .filterbar-dark .filter-chip {
    border-color: rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.65);
  }
  .filterbar-dark .filter-chip:hover {
    border-color: var(--color-brand-accent, #D8EC28);
    color: #fff;
  }
  .filterbar-dark .filter-chip.active {
    background: var(--color-brand-accent, #D8EC28);
    border-color: var(--color-brand-accent, #D8EC28);
    color: var(--color-interactive-accent-label, #000);
  }
  .filterbar-dark .filter-count { color: rgba(255,255,255,0.35); }
  .filterbar-dark .filter-sep { background: rgba(255,255,255,0.12); }
  .filterbar-dark .filter-sort-label { color: rgba(255,255,255,0.4); }

  .preview-label {
    font-family: var(--font-ui, monospace); font-size: 10px; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--color-content-secondary, #666);
    padding: 24px 48px 16px; background: var(--color-surface-page, #fff);
  }
  .preview-content {
    background: var(--color-surface-page, #f5f5f5);
    padding: 48px; min-height: 120px;
  }
</style>
`;

/* ── Story: Default ──────────────────────────────────────────── */
export const Default = {
  name: 'Default — chips filtro',
  render: () => `${css}
<div class="preview-label">FilterBar — chips filtro orizzontali con counter articoli</div>
<div class="filterbar">
  <div class="filter-chips">
    <a class="filter-chip active" href="#">Tutti <span class="chip-count">248</span></a>
    <a class="filter-chip" href="#">
      <span class="chip-dot" style="background:#FF8C01;border-radius:50%;"></span>
      Eco-innovazione <span class="chip-count">42</span>
    </a>
    <a class="filter-chip" href="#">
      <span class="chip-dot" style="background:#2792B9;border-radius:50%;"></span>
      Energia & Clima <span class="chip-count">67</span>
    </a>
    <a class="filter-chip" href="#">
      <span class="chip-dot" style="background:#BEBFF8;border-radius:50%;"></span>
      Economia Circolare <span class="chip-count">38</span>
    </a>
    <a class="filter-chip" href="#">
      <span class="chip-dot" style="background:#CE9B62;border-radius:50%;"></span>
      Mobilità <span class="chip-count">29</span>
    </a>
    <a class="filter-chip" href="#">
      <span class="chip-dot" style="background:#B9284F;border-radius:50%;"></span>
      Green City <span class="chip-count">31</span>
    </a>
    <a class="filter-chip" href="#">Agroecologia <span class="chip-count">24</span></a>
    <a class="filter-chip" href="#">Corsi <span class="chip-count">17</span></a>
  </div>
  <div class="filter-sep"></div>
  <div class="filter-count">248 contenuti</div>
</div>
<div class="preview-content"></div>`,
};

/* ── Story: Con ricerca ──────────────────────────────────────── */
export const WithSearch = {
  name: 'Con ricerca — search + chips',
  render: () => `${css}
<div class="preview-label">FilterBar — input di ricerca + chips filtro</div>
<div class="filterbar">
  <div class="filter-search-wrap">
    <span class="filter-search-icon">🔍</span>
    <input class="filter-search" type="search" placeholder="Cerca articoli, autori, temi…">
  </div>
  <div class="filter-sep"></div>
  <div class="filter-chips">
    <a class="filter-chip active" href="#">Tutti</a>
    <a class="filter-chip" href="#">Articoli</a>
    <a class="filter-chip" href="#">Ricerche</a>
    <a class="filter-chip" href="#">Rapporti</a>
    <a class="filter-chip" href="#">Video</a>
    <a class="filter-chip" href="#">Podcast</a>
    <a class="filter-chip" href="#">Newsletter</a>
  </div>
  <div class="filter-sep"></div>
  <div class="filter-count">248 risultati</div>
</div>
<div class="preview-content"></div>`,
};

/* ── Story: Con sort ─────────────────────────────────────────── */
export const WithSort = {
  name: 'Con sort — filtri + ordinamento',
  render: () => `${css}
<div class="preview-label">FilterBar — chips filtro + dropdown ordinamento</div>
<div class="filterbar">
  <div class="filter-chips">
    <a class="filter-chip active" href="#">Tutti <span class="chip-count">3.200</span></a>
    <a class="filter-chip" href="#">🟢 Online <span class="chip-count">2.940</span></a>
    <a class="filter-chip" href="#">🟡 In manutenzione <span class="chip-count">218</span></a>
    <a class="filter-chip" href="#">🔴 Offline <span class="chip-count">42</span></a>
    <a class="filter-chip" href="#">⚠️ Scaduto SSL <span class="chip-count">12</span></a>
  </div>
  <div class="filter-sep"></div>
  <div class="filter-sort">
    <span class="filter-sort-label">Ordina per</span>
    <select class="filter-sort-select">
      <option>Più recente</option>
      <option>Più visitato</option>
      <option>Score GreenMeter</option>
      <option>A–Z</option>
    </select>
  </div>
</div>
<div class="preview-content"></div>`,
};

/* ── Story: Filtri attivi ────────────────────────────────────── */
export const ActiveFilters = {
  name: 'Filtri attivi — tag + reset',
  render: () => `${css}
<div class="preview-label">FilterBar — con filtri selezionati mostrati come tag rimovibili</div>
<div class="filterbar">
  <div class="filter-chips">
    <a class="filter-chip" href="#">Tutti <span class="chip-count">248</span></a>
    <a class="filter-chip active" href="#">
      <span class="chip-dot" style="background:#2792B9;border-radius:50%;"></span>
      Energia & Clima <span class="chip-count">67</span>
    </a>
    <a class="filter-chip" href="#">Eco-innovazione</a>
    <a class="filter-chip" href="#">Economia Circolare</a>
    <a class="filter-chip" href="#">Mobilità</a>
    <a class="filter-chip" href="#">Green City</a>
  </div>
  <div class="filter-sep"></div>
  <div class="filter-sort">
    <select class="filter-sort-select">
      <option>Più recente</option>
      <option>Più letto</option>
    </select>
  </div>
</div>
<!-- Riga filtri attivi -->
<div class="filter-active-wrap">
  <span class="filter-active-label">Filtri attivi:</span>
  <button class="filter-tag">
    <span class="chip-dot" style="background:#2792B9;border-radius:50%;"></span>
    Energia & Clima
    <span class="filter-tag-x">✕</span>
  </button>
  <button class="filter-tag">
    2024
    <span class="filter-tag-x">✕</span>
  </button>
  <button class="filter-tag">
    Ricercatori
    <span class="filter-tag-x">✕</span>
  </button>
  <button class="filter-reset">Rimuovi tutti ✕</button>
</div>
<div class="preview-content"></div>`,
};

/* ── Story: Versione dark (su bg scuro) ──────────────────────── */
export const DarkVariant = {
  name: 'Dark — su sfondo scuro',
  render: () => `${css}
<div class="preview-label">FilterBar dark — per pagine con bg scuro (header + sub-bar, area clienti)</div>
<div style="background:var(--color-surface-inverse);">
  <div class="filterbar-dark">
    <div class="filter-chips">
      <a class="filter-chip active" href="#">Dashboard</a>
      <a class="filter-chip" href="#">Siti</a>
      <a class="filter-chip" href="#">GreenMeter</a>
      <a class="filter-chip" href="#">Analytics</a>
      <a class="filter-chip" href="#">Backup</a>
      <a class="filter-chip" href="#">Fatture</a>
    </div>
    <div class="filter-sep"></div>
    <div class="filter-count">6 sezioni</div>
    <div class="filter-sort" style="margin-left:auto;">
      <span class="filter-sort-label" style="color:rgba(255,255,255,0.35);">Vista</span>
      <select class="filter-sort-select" style="background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.12);color:#fff;">
        <option>Griglia</option>
        <option>Lista</option>
        <option>Tabella</option>
      </select>
    </div>
  </div>
  <div style="padding:32px;min-height:120px;"></div>
</div>`,
};

/* ── Story: Compatta ─────────────────────────────────────────── */
export const Compact = {
  name: 'Compatta — inline card/toolbar',
  render: () => `${css}
<div class="preview-label">FilterBar compatta — inline dentro card, toolbar, header sezione</div>
<div class="preview-content" style="display:flex;flex-direction:column;gap:24px;">
  <!-- Esempio 1: in una card header -->
  <div style="background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden;">
    <div style="padding:16px 20px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;">
      <div style="font-family:var(--font-display);font-size:15px;font-weight:700;color:var(--color-content-primary,#111);">Siti recenti</div>
      <div class="filterbar-compact" style="padding:6px 12px;">
        <a class="filter-chip active" href="#" style="font-size:11px;padding:3px 9px;">Tutti</a>
        <a class="filter-chip" href="#" style="font-size:11px;padding:3px 9px;">🟢 Online</a>
        <a class="filter-chip" href="#" style="font-size:11px;padding:3px 9px;">⚠️ Attenzione</a>
      </div>
    </div>
    <div style="padding:24px;min-height:80px;background:#fafafa;"></div>
  </div>

  <!-- Esempio 2: toolbar actions -->
  <div style="background:#fff;border:1px solid #eee;border-radius:12px;padding:14px 20px;display:flex;align-items:center;gap:10px;">
    <div style="font-family:var(--font-ui,monospace);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#aaa;margin-right:4px;">Periodo</div>
    <a class="filter-chip" href="#" style="font-size:12px;padding:5px 10px;">7gg</a>
    <a class="filter-chip active" href="#" style="font-size:12px;padding:5px 10px;">30gg</a>
    <a class="filter-chip" href="#" style="font-size:12px;padding:5px 10px;">90gg</a>
    <a class="filter-chip" href="#" style="font-size:12px;padding:5px 10px;">Anno</a>
    <div style="margin-left:auto;font-family:var(--font-ui,monospace);font-size:11px;color:#aaa;">Aggiornato: oggi 09:41</div>
  </div>
</div>`,
};
