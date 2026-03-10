/**
 * Hederae DS — Header organism
 * Site navigation header — multi-brand, tutte le varianti.
 *
 * Token-driven: logo color, bg, font, CTA si adattano al brand attivo.
 * Varianti: Default, Scrolled (shadow), Con utente loggato, Mega-menu aperto,
 *            Hub (con breadcrumb sub-bar), Mobile (320px).
 */

export default {
  title: '⬡ Organisms/Header — Navigazione',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Componente header sito. Multi-brand via CSS vars. Varianti:
- **Default** — header trasparente/colore su superficie inversa
- **Scrolled** — con shadow e bg opaco (scroll > 60px)
- **Con utente** — avatar + menu dropdown utente
- **Mega-menu** — nav a colonne con sezioni e CTA interna
- **Hub sub-bar** — seconda barra con filtri tematici (Susdef / Pianeta.green)
- **Mobile 390** — hamburger + drawer

Token attivi per brand:
\`--color-surface-inverse\` (bg), \`--color-content-inverse\` (testo),
\`--color-brand-accent\` (CTA), \`--font-display\` (logo), \`--font-body\` (link).`,
      },
    },
  },
};

/* ── Shared CSS ──────────────────────────────────────────────── */
const css = `
<style>
  .hdr {
    background: var(--color-surface-inverse);
    padding: 0 48px;
    height: 64px;
    display: flex; align-items: center; gap: 0;
    position: relative;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .hdr-logo {
    font-family: var(--font-display); font-size: 18px; font-weight: 700;
    color: var(--color-content-inverse); text-decoration: none;
    display: flex; align-items: center; gap: 8px; margin-right: 48px;
    flex-shrink: 0;
  }
  .hdr-logo-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--color-brand-accent, var(--color-brand-secondary, #D8EC28));
  }
  .hdr-nav {
    display: flex; align-items: center; gap: 2px;
    flex: 1;
  }
  .hdr-link {
    font-family: var(--font-body); font-size: 14px; font-weight: 500;
    color: rgba(255,255,255,0.72); text-decoration: none;
    padding: 8px 14px; border-radius: 6px;
    transition: color .12s, background .12s;
    white-space: nowrap;
  }
  .hdr-link:hover { color: #fff; background: rgba(255,255,255,0.08); }
  .hdr-link.active { color: #fff; }
  .hdr-actions {
    display: flex; align-items: center; gap: 10px; margin-left: auto;
  }
  .hdr-btn-ghost {
    font-family: var(--font-body); font-size: 13px; font-weight: 500;
    color: rgba(255,255,255,0.72); text-decoration: none;
    padding: 8px 16px; border-radius: 99px;
    border: 1px solid rgba(255,255,255,0.2);
    transition: border-color .12s, color .12s;
  }
  .hdr-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
  .hdr-btn-cta {
    font-family: var(--font-body); font-size: 13px; font-weight: 600;
    color: var(--color-interactive-accent-label, #000);
    background: var(--color-brand-accent, var(--color-brand-secondary, #D8EC28));
    text-decoration: none; padding: 8px 18px; border-radius: 99px;
    transition: filter .12s;
    white-space: nowrap;
  }
  .hdr-btn-cta:hover { filter: brightness(1.08); }

  /* Scrolled state */
  .hdr.scrolled {
    box-shadow: 0 2px 16px rgba(0,0,0,0.18);
    border-bottom-color: rgba(255,255,255,0.12);
  }

  /* Avatar */
  .hdr-avatar {
    width: 34px; height: 34px; border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    font-size: 15px; cursor: pointer; border: 1.5px solid rgba(255,255,255,0.2);
    flex-shrink: 0;
  }
  .hdr-avatar-name {
    font-family: var(--font-body); font-size: 13px; font-weight: 500;
    color: rgba(255,255,255,0.8);
  }

  /* Dropdown */
  .hdr-dropdown {
    position: absolute; top: 100%; right: 24px;
    background: #fff; border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.14);
    min-width: 200px; padding: 8px 0; z-index: 100;
    margin-top: 8px;
    border: 1px solid rgba(0,0,0,0.06);
  }
  .dropdown-item {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 16px; font-size: 13px;
    color: #111; text-decoration: none; cursor: pointer;
    transition: background .1s;
  }
  .dropdown-item:hover { background: #f4f4f4; }
  .dropdown-item.danger { color: #C62828; }
  .dropdown-sep { height: 1px; background: #eee; margin: 4px 0; }

  /* Chip badge */
  .hdr-chip {
    background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.7);
    font-family: var(--font-ui, 'IBM Plex Mono', monospace);
    font-size: 10px; padding: 2px 8px; border-radius: 10px; letter-spacing: 0.04em;
  }

  /* Mega-menu */
  .hdr-megamenu {
    position: absolute; top: 100%; left: 0; right: 0;
    background: var(--color-surface-inverse);
    border-top: 1px solid rgba(255,255,255,0.10);
    border-bottom: 1px solid rgba(255,255,255,0.10);
    padding: 28px 48px 32px; z-index: 99;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  }
  .mega-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
  .mega-col-title {
    font-family: var(--font-ui, monospace); font-size: 10px; letter-spacing: 0.1em;
    text-transform: uppercase; color: rgba(255,255,255,0.35);
    margin-bottom: 12px;
  }
  .mega-link {
    display: flex; align-items: center; gap: 8px;
    font-size: 13px; color: rgba(255,255,255,0.72);
    text-decoration: none; padding: 5px 0;
    border-radius: 4px; transition: color .1s;
  }
  .mega-link:hover { color: #fff; }
  .mega-link-dot {
    width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
    background: var(--color-brand-accent, #D8EC28);
  }
  .mega-cta {
    background: rgba(255,255,255,0.06); border-radius: 10px;
    padding: 20px; border: 1px solid rgba(255,255,255,0.1);
  }
  .mega-cta-label {
    font-family: var(--font-ui, monospace); font-size: 10px; letter-spacing: 0.08em;
    text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 8px;
  }
  .mega-cta-title {
    font-family: var(--font-display); font-size: 17px; font-weight: 700;
    color: #fff; margin-bottom: 8px;
  }
  .mega-cta-sub { font-size: 12px; color: rgba(255,255,255,0.55); margin-bottom: 14px; line-height: 1.5; }
  .mega-cta-btn {
    display: inline-block; padding: 7px 16px; border-radius: 99px;
    font-size: 12px; font-weight: 600;
    background: var(--color-brand-accent, #D8EC28);
    color: var(--color-interactive-accent-label, #000);
    text-decoration: none;
  }

  /* Sub-bar (hub) */
  .hdr-subbar {
    background: rgba(0,0,0,0.25); padding: 0 48px;
    display: flex; align-items: center; gap: 0;
    height: 42px; border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .subbar-link {
    font-family: var(--font-ui, monospace); font-size: 11px; letter-spacing: 0.04em;
    text-transform: uppercase; color: rgba(255,255,255,0.55);
    text-decoration: none; padding: 0 14px; height: 42px;
    display: flex; align-items: center; border-bottom: 2px solid transparent;
    transition: color .1s, border-color .1s;
  }
  .subbar-link:hover { color: rgba(255,255,255,0.9); }
  .subbar-link.active {
    color: var(--color-brand-accent, #D8EC28);
    border-bottom-color: var(--color-brand-accent, #D8EC28);
  }

  /* Mobile */
  .hdr-mobile {
    background: var(--color-surface-inverse);
    padding: 0 20px; height: 56px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .hdr-mobile-logo {
    font-family: var(--font-display); font-size: 16px; font-weight: 700;
    color: #fff; text-decoration: none; display: flex; align-items: center; gap: 6px;
  }
  .hdr-hamburger {
    width: 36px; height: 36px; border-radius: 8px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 4px; cursor: pointer; background: rgba(255,255,255,0.08);
  }
  .hdr-hamburger span {
    width: 18px; height: 1.5px; background: #fff; border-radius: 1px;
  }
  .mobile-drawer {
    background: var(--color-surface-inverse);
    padding: 16px 20px; border-top: 1px solid rgba(255,255,255,0.08);
  }
  .mobile-nav-link {
    display: flex; align-items: center; justify-content: space-between;
    font-family: var(--font-body); font-size: 15px; font-weight: 500;
    color: rgba(255,255,255,0.8); text-decoration: none;
    padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .mobile-nav-link:last-of-type { border-bottom: none; }
  .mobile-cta {
    margin-top: 16px; display: block; text-align: center;
    padding: 13px; border-radius: 99px; font-size: 14px; font-weight: 600;
    background: var(--color-brand-accent, #D8EC28);
    color: var(--color-interactive-accent-label, #000); text-decoration: none;
  }

  .preview-label {
    font-family: var(--font-ui, monospace); font-size: 10px; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--color-content-secondary, #666);
    padding: 24px 0 8px 48px;
  }
  .preview-label-mobile { padding-left: 20px; }
</style>
`;

/* ── Story: Default ──────────────────────────────────────────── */
export const Default = {
  name: 'Default — desktop',
  render: () => `${css}
<div class="preview-label">Header — stato default</div>
<div class="hdr">
  <a class="hdr-logo" href="#">
    <span class="hdr-logo-dot"></span>
    Brand
  </a>
  <nav class="hdr-nav">
    <a class="hdr-link active" href="#">Home</a>
    <a class="hdr-link" href="#">Settori</a>
    <a class="hdr-link" href="#">Documentazione</a>
    <a class="hdr-link" href="#">Notizie</a>
    <a class="hdr-link" href="#">Chi siamo</a>
  </nav>
  <div class="hdr-actions">
    <a class="hdr-btn-ghost" href="#">Accedi</a>
    <a class="hdr-btn-cta" href="#">Inizia →</a>
  </div>
</div>

<div style="background:var(--color-surface-page,#fff);padding:48px;text-align:center;">
  <p style="font-family:var(--font-body);color:var(--color-content-secondary);">Contenuto pagina — cambia brand con il switcher 🎨 in alto a destra</p>
</div>`,
};

/* ── Story: Scrolled ─────────────────────────────────────────── */
export const Scrolled = {
  name: 'Scrolled — con shadow',
  render: () => `${css}
<div class="preview-label">Header — stato scrolled (scroll > 60px)</div>
<div class="hdr scrolled">
  <a class="hdr-logo" href="#">
    <span class="hdr-logo-dot"></span>
    Brand
  </a>
  <nav class="hdr-nav">
    <a class="hdr-link" href="#">Home</a>
    <a class="hdr-link active" href="#">Settori</a>
    <a class="hdr-link" href="#">Documentazione</a>
    <a class="hdr-link" href="#">Notizie</a>
    <a class="hdr-link" href="#">Chi siamo</a>
  </nav>
  <div class="hdr-actions">
    <a class="hdr-btn-ghost" href="#">Accedi</a>
    <a class="hdr-btn-cta" href="#">Inizia →</a>
  </div>
</div>

<div style="background:var(--color-surface-page,#fff);padding:48px;"></div>`,
};

/* ── Story: Con utente loggato ───────────────────────────────── */
export const WithUser = {
  name: 'Utente loggato + dropdown',
  render: () => `${css}
<div class="preview-label">Header — utente autenticato con dropdown aperto</div>
<div class="hdr" style="margin-bottom:0;">
  <a class="hdr-logo" href="#">
    <span class="hdr-logo-dot"></span>
    Brand
  </a>
  <nav class="hdr-nav">
    <a class="hdr-link active" href="#">Dashboard</a>
    <a class="hdr-link" href="#">I miei siti</a>
    <a class="hdr-link" href="#">GreenMeter</a>
    <a class="hdr-link" href="#">Analytics</a>
  </nav>
  <div class="hdr-actions">
    <span class="hdr-chip">Piano Foresta</span>
    <div style="display:flex;align-items:center;gap:8px;cursor:pointer;">
      <div class="hdr-avatar">🧑</div>
      <span class="hdr-avatar-name">Marco F.</span>
      <span style="color:rgba(255,255,255,0.4);font-size:11px;">▾</span>
    </div>
  </div>
  <!-- Dropdown aperto -->
  <div class="hdr-dropdown">
    <div style="padding:12px 16px 10px;border-bottom:1px solid #eee;">
      <div style="font-size:13px;font-weight:600;color:#111;">Marco Ferretti</div>
      <div style="font-size:11px;color:#888;">marco@rara.com</div>
    </div>
    <a class="dropdown-item" href="#">⊞ Dashboard</a>
    <a class="dropdown-item" href="#">🌐 I miei siti</a>
    <a class="dropdown-item" href="#">📊 GreenMeter</a>
    <a class="dropdown-item" href="#">📄 Fatture</a>
    <div class="dropdown-sep"></div>
    <a class="dropdown-item" href="#">⚙️ Impostazioni</a>
    <a class="dropdown-item danger" href="#">→ Esci</a>
  </div>
</div>

<div style="background:var(--color-surface-page,#fff);padding:48px;height:200px;"></div>`,
};

/* ── Story: Mega-menu ────────────────────────────────────────── */
export const MegaMenu = {
  name: 'Mega-menu aperto',
  render: () => `${css}
<div class="preview-label">Header — mega-menu "Settori" aperto (dropdown a colonne)</div>
<div class="hdr" style="margin-bottom:0;">
  <a class="hdr-logo" href="#">
    <span class="hdr-logo-dot"></span>
    Brand
  </a>
  <nav class="hdr-nav">
    <a class="hdr-link" href="#">Home</a>
    <a class="hdr-link active" href="#">Settori ▾</a>
    <a class="hdr-link" href="#">Documentazione</a>
    <a class="hdr-link" href="#">Notizie</a>
  </nav>
  <div class="hdr-actions">
    <a class="hdr-btn-ghost" href="#">Accedi</a>
    <a class="hdr-btn-cta" href="#">Esplora →</a>
  </div>
</div>
<div class="hdr-megamenu">
  <div class="mega-grid">
    <div>
      <div class="mega-col-title">Temi principali</div>
      <a class="mega-link" href="#"><span class="mega-link-dot" style="background:#FF8C01;"></span>Eco-innovazione</a>
      <a class="mega-link" href="#"><span class="mega-link-dot" style="background:#2792B9;"></span>Energia & Clima</a>
      <a class="mega-link" href="#"><span class="mega-link-dot" style="background:#BEBFF8;"></span>Economia Circolare</a>
      <a class="mega-link" href="#"><span class="mega-link-dot" style="background:#CE9B62;"></span>Mobilità Sostenibile</a>
    </div>
    <div>
      <div class="mega-col-title">Altri temi</div>
      <a class="mega-link" href="#"><span class="mega-link-dot" style="background:#B9284F;"></span>Green City</a>
      <a class="mega-link" href="#"><span class="mega-link-dot" style="background:#FFC310;"></span>Agroecologia</a>
      <a class="mega-link" href="#"><span class="mega-link-dot" style="background:#9EDFC9;"></span>Stati Generali</a>
      <a class="mega-link" href="#"><span class="mega-link-dot" style="background:#F993C5;"></span>Corsi & Formazione</a>
    </div>
    <div>
      <div class="mega-col-title">Risorse</div>
      <a class="mega-link" href="#">📄 Rapporti annuali</a>
      <a class="mega-link" href="#">🔬 Ricerche e dati</a>
      <a class="mega-link" href="#">📰 Newsletter</a>
      <a class="mega-link" href="#">🎙 Podcast & Video</a>
    </div>
    <div>
      <div class="mega-cta">
        <div class="mega-cta-label">In evidenza</div>
        <div class="mega-cta-title">Rapporto Italia 2026</div>
        <div class="mega-cta-sub">L'analisi più completa sulla transizione ecologica in Italia.</div>
        <a class="mega-cta-btn" href="#">Scarica PDF →</a>
      </div>
    </div>
  </div>
</div>

<div style="background:var(--color-surface-page,#fff);padding:48px;height:100px;"></div>`,
};

/* ── Story: Hub sub-bar ──────────────────────────────────────── */
export const WithSubbar = {
  name: 'Hub — con sub-bar tematica',
  render: () => `${css}
<div class="preview-label">Header + sub-bar — per pagine hub (Susdef, EPOS, Pianeta.green area clienti)</div>
<div class="hdr">
  <a class="hdr-logo" href="#">
    <span class="hdr-logo-dot"></span>
    Brand
  </a>
  <nav class="hdr-nav">
    <a class="hdr-link active" href="#">Settori</a>
    <a class="hdr-link" href="#">Documentazione</a>
    <a class="hdr-link" href="#">Notizie</a>
    <a class="hdr-link" href="#">Chi siamo</a>
  </nav>
  <div class="hdr-actions">
    <a class="hdr-btn-cta" href="#">Iscriviti</a>
  </div>
</div>
<div class="hdr-subbar">
  <a class="subbar-link active" href="#">Tutti</a>
  <a class="subbar-link" href="#">Eco-innovazione</a>
  <a class="subbar-link" href="#">Energia & Clima</a>
  <a class="subbar-link" href="#">Economia Circolare</a>
  <a class="subbar-link" href="#">Mobilità</a>
  <a class="subbar-link" href="#">Green City</a>
  <a class="subbar-link" href="#">Agroecologia</a>
</div>

<div style="background:var(--color-surface-page,#fff);padding:48px;"></div>`,
};

/* ── Story: Mobile ───────────────────────────────────────────── */
export const Mobile = {
  name: 'Mobile 390 — drawer aperto',
  render: () => `${css}
<div style="max-width:390px;">
  <div class="preview-label preview-label-mobile">Header mobile — drawer aperto</div>
  <div class="hdr-mobile">
    <a class="hdr-mobile-logo" href="#">
      <span style="width:7px;height:7px;border-radius:50%;background:var(--color-brand-accent,#D8EC28);"></span>
      Brand
    </a>
    <div style="display:flex;gap:8px;align-items:center;">
      <div class="hdr-avatar" style="width:30px;height:30px;font-size:13px;">🧑</div>
      <div class="hdr-hamburger" style="background:rgba(255,255,255,0.1);">
        <span></span><span style="width:12px;"></span><span></span>
      </div>
    </div>
  </div>
  <div class="mobile-drawer">
    <a class="mobile-nav-link" href="#">Home <span style="color:rgba(255,255,255,0.3);">›</span></a>
    <a class="mobile-nav-link" href="#">Settori <span style="color:rgba(255,255,255,0.3);">›</span></a>
    <a class="mobile-nav-link" href="#">Documentazione <span style="color:rgba(255,255,255,0.3);">›</span></a>
    <a class="mobile-nav-link" href="#">Notizie <span style="color:rgba(255,255,255,0.3);">›</span></a>
    <a class="mobile-nav-link" href="#">Chi siamo <span style="color:rgba(255,255,255,0.3);">›</span></a>
    <a class="mobile-cta" href="#">Inizia gratis →</a>
  </div>
</div>`,
};
