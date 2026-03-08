export default {
  title: '⬡ Molecules/Breadcrumb',
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Breadcrumb di navigazione. Varianti: default (link testo), con icona home, condensato (solo parent + current). Usa token colore contenuto e bordo.' } },
  },
};

const css = `<style>
  .breadcrumb {
    display: flex; align-items: center; gap: 0;
    font-family: var(--font-ui); font-size: 13px;
    list-style: none; margin: 0; padding: 0;
    flex-wrap: wrap;
  }
  .breadcrumb li { display: flex; align-items: center; }
  .breadcrumb a {
    color: var(--color-content-secondary); text-decoration: none;
    padding: 4px 2px; border-radius: 3px;
    transition: color .12s;
  }
  .breadcrumb a:hover { color: var(--color-content-brand); text-decoration: underline; }
  .breadcrumb-sep {
    color: var(--color-border-default); margin: 0 6px;
    font-size: 14px; line-height: 1; user-select: none;
  }
  .breadcrumb li:last-child a {
    color: var(--color-content-primary); font-weight: 500; pointer-events: none;
  }
  /* Pill variant */
  .breadcrumb-pill {
    display: flex; align-items: center; gap: 4px;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-full);
    padding: 4px 12px;
    width: fit-content;
    font-family: var(--font-ui); font-size: 12px;
  }
  .breadcrumb-pill a {
    color: var(--color-content-secondary); text-decoration: none;
  }
  .breadcrumb-pill a:hover { color: var(--color-content-brand); }
  .breadcrumb-pill span { color: var(--color-content-tertiary, var(--color-content-secondary)); }
  .breadcrumb-pill .bc-current { color: var(--color-content-primary); font-weight: 500; }
  /* Sector chip in breadcrumb */
  .bc-sector-chip {
    display: inline-flex; align-items: center; gap: 4px;
    font-family: var(--font-ui); font-size: 10px; letter-spacing: .06em; text-transform: uppercase;
    padding: 2px 8px; border-radius: 3px;
    background: var(--s-muted, #D9EEF7); color: var(--s-primary, #2792B9);
  }
  .bc-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
</style>`;

export const Default = {
  name: 'Default',
  render: () => `${css}
<div style="padding:32px;display:flex;flex-direction:column;gap:32px;">
  <div>
    <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin-bottom:12px;">1 livello</div>
    <nav aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li><a href="#">Home</a><span class="breadcrumb-sep">/</span></li>
        <li><a href="#" aria-current="page">Documenti</a></li>
      </ol>
    </nav>
  </div>
  <div>
    <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin-bottom:12px;">2 livelli</div>
    <nav aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li><a href="#">Home</a><span class="breadcrumb-sep">/</span></li>
        <li><a href="#">Energia e Clima</a><span class="breadcrumb-sep">/</span></li>
        <li><a href="#" aria-current="page">Fonti Rinnovabili</a></li>
      </ol>
    </nav>
  </div>
  <div>
    <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin-bottom:12px;">3 livelli (doc detail)</div>
    <nav aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li><a href="#">Home</a><span class="breadcrumb-sep">/</span></li>
        <li><a href="#">Energia e Clima</a><span class="breadcrumb-sep">/</span></li>
        <li><a href="#">Fonti Rinnovabili</a><span class="breadcrumb-sep">/</span></li>
        <li><a href="#" aria-current="page">Stato delle energie rinnovabili al 2035</a></li>
      </ol>
    </nav>
  </div>
</div>`,
};

export const WithSectorChip = {
  name: 'Con chip settore',
  render: () => `${css}
<div style="padding:32px;display:flex;flex-direction:column;gap:24px;">
  <div>
    <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin-bottom:12px;">Energia e Clima</div>
    <nav aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li><a href="#">Home</a><span class="breadcrumb-sep">/</span></li>
        <li>
          <a href="#" style="--s-primary:#2792B9;--s-muted:#D9EEF7;">
            <span class="bc-sector-chip" style="--s-primary:#2792B9;--s-muted:#D9EEF7;">
              <span class="bc-dot"></span>Energia e Clima
            </span>
          </a>
          <span class="breadcrumb-sep">/</span>
        </li>
        <li><a href="#" aria-current="page">Fonti Rinnovabili</a></li>
      </ol>
    </nav>
  </div>
  <div>
    <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin-bottom:12px;">Eco-innovazione</div>
    <nav aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li><a href="#">Home</a><span class="breadcrumb-sep">/</span></li>
        <li>
          <a href="#">
            <span class="bc-sector-chip" style="--s-primary:#FF8C01;--s-muted:#FFF1D9;">
              <span class="bc-dot"></span>Eco-innovazione
            </span>
          </a>
          <span class="breadcrumb-sep">/</span>
        </li>
        <li><a href="#" aria-current="page">Green procurement nelle PMI</a></li>
      </ol>
    </nav>
  </div>
</div>`,
};

export const PillVariant = {
  name: 'Pill variant (compatta)',
  render: () => `${css}
<div style="padding:32px;display:flex;flex-direction:column;gap:16px;">
  <h2 style="font-family:var(--font-display);font-size:24px;font-weight:500;color:var(--color-content-primary);margin:0 0 8px;">Breadcrumb — Pill</h2>
  <div class="breadcrumb-pill">
    <a href="#">Home</a>
    <span>›</span>
    <a href="#">Energia e Clima</a>
    <span>›</span>
    <span class="bc-current">Fonti Rinnovabili</span>
  </div>
  <div class="breadcrumb-pill">
    <a href="#">Home</a>
    <span>›</span>
    <span class="bc-current">Documenti</span>
  </div>
</div>`,
};
