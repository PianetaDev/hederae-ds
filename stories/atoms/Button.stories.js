export default {
  title: '⬡ Atoms/Button',
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Bottoni del DS. 4 varianti (Primary, Secondary, Ghost, Accent) × 3 dimensioni × stati hover/disabled/loading. I token cambiano per brand.' } },
  },
};

const css = `
  <style>
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      font-family: var(--font-body); font-weight: 600; cursor: pointer;
      border: none; text-decoration: none; transition: all 0.15s;
      white-space: nowrap; vertical-align: middle;
    }
    /* Sizes */
    .btn-sm  { height: 32px; padding: 0 12px; font-size: 13px; border-radius: var(--radius-sm); }
    .btn-md  { height: 40px; padding: 0 18px; font-size: 15px; border-radius: var(--radius-sm); }
    .btn-lg  { height: 48px; padding: 0 24px; font-size: 16px; border-radius: var(--radius-sm); }
    /* Primary */
    .btn-primary { background: var(--color-interactive-primary-bg); color: var(--color-interactive-primary-label); }
    .btn-primary:hover { background: var(--color-interactive-primary-bg-hover); }
    .btn-primary:disabled, .btn-primary.disabled { background: var(--color-interactive-primary-bg-disabled); cursor: not-allowed; opacity: 0.6; }
    /* Secondary */
    .btn-secondary {
      background: transparent;
      color: var(--color-interactive-secondary-label);
      border: 1.5px solid var(--color-interactive-secondary-border);
    }
    .btn-secondary:hover { background: var(--color-interactive-secondary-bg-hover, rgba(0,0,0,.05)); }
    /* Ghost */
    .btn-ghost {
      background: transparent;
      color: var(--color-interactive-ghost-label);
      border: none;
    }
    .btn-ghost:hover { background: var(--color-interactive-ghost-bg-hover); }
    /* Accent */
    .btn-accent {
      background: var(--color-interactive-accent-bg);
      color: var(--color-interactive-accent-label);
    }
    .btn-accent:hover { background: var(--color-interactive-accent-bg-hover); }
    /* Icon */
    .btn-icon { width: 40px; padding: 0; }
    .btn-icon.btn-sm { width: 32px; }
    .btn-icon.btn-lg { width: 48px; }

    .row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-bottom: 20px; }
    .section-title { font-family: var(--font-ui); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--color-content-secondary); margin: 32px 0 12px; }
  </style>
`;

export const AllVariants = {
  name: 'Tutte le varianti',
  render: () => `${css}
<div style="padding:32px;max-width:900px;">
  <h1 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Buttons</h1>
  <p style="font-family:var(--font-body);font-size:14px;color:var(--color-content-secondary);margin:0 0 32px;">Prova i diversi brand con il switcher 🎨 — il colore e il radius cambiano automaticamente.</p>

  <div class="section-title">Primary</div>
  <div class="row">
    <button class="btn btn-primary btn-sm">Small</button>
    <button class="btn btn-primary btn-md">Medium (default)</button>
    <button class="btn btn-primary btn-lg">Large</button>
    <button class="btn btn-primary btn-md" disabled>Disabled</button>
    <button class="btn btn-primary btn-md">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      Con icona
    </button>
  </div>

  <div class="section-title">Secondary (outlined)</div>
  <div class="row">
    <button class="btn btn-secondary btn-sm">Small</button>
    <button class="btn btn-secondary btn-md">Medium</button>
    <button class="btn btn-secondary btn-lg">Large</button>
    <button class="btn btn-secondary btn-md" disabled style="opacity:.45;cursor:not-allowed;">Disabled</button>
  </div>

  <div class="section-title">Ghost</div>
  <div class="row">
    <button class="btn btn-ghost btn-sm">Small</button>
    <button class="btn btn-ghost btn-md">Medium</button>
    <button class="btn btn-ghost btn-lg">Apri documento →</button>
  </div>

  <div class="section-title">Accent (decorativo — solo su superfici inverse o in contesti specifici)</div>
  <div class="row">
    <button class="btn btn-accent btn-sm">Small</button>
    <button class="btn btn-accent btn-md">Esplora la biblioteca</button>
    <button class="btn btn-accent btn-lg">Iscriviti alla newsletter</button>
  </div>

  <div class="section-title">Bottoni icona</div>
  <div class="row">
    <button class="btn btn-primary btn-icon btn-sm" title="Cerca">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="2"/><path d="M11 11l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
    <button class="btn btn-primary btn-icon btn-md" title="Cerca">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="2"/><path d="M11 11l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
    <button class="btn btn-secondary btn-icon btn-md" title="Filtri">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M5 8h6M7 12h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
    <button class="btn btn-ghost btn-icon btn-md" title="Chiudi">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
  </div>

  <div class="section-title">Su superficie inverse (header/footer)</div>
  <div class="row" style="background:var(--color-surface-inverse);padding:20px;border-radius:8px;">
    <button class="btn btn-accent btn-md">Esplora →</button>
    <button class="btn btn-ghost btn-md" style="color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.25);">Chi siamo</button>
    <button class="btn btn-ghost btn-md" style="color:rgba(255,255,255,.6);">Accedi</button>
  </div>
</div>
  `,
};

export const Primary   = { render: () => `${css}<div style="padding:24px;"><button class="btn btn-primary btn-md">Esplora la biblioteca</button></div>` };
export const Secondary = { render: () => `${css}<div style="padding:24px;"><button class="btn btn-secondary btn-md">Scarica documento</button></div>` };
export const Ghost     = { render: () => `${css}<div style="padding:24px;"><button class="btn btn-ghost btn-md">Annulla</button></div>` };
export const Accent    = { render: () => `${css}<div style="padding:24px;"><button class="btn btn-accent btn-md">Iscriviti</button></div>` };
