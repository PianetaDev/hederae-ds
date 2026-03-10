/**
 * Hederae DS — HeroSection organism
 * Sezione hero — multi-brand, 5 varianti.
 *
 * Token-driven: colori, font, CTA adattati al brand attivo.
 * Varianti: Default (headline+sub+CTA), Stats bar, Media (screenshot),
 *            Centrato, Hub editoriale (con filtri topic).
 */

export default {
  title: '⬡ Organisms/HeroSection — Hero',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Sezione hero. Multi-brand via CSS vars. Varianti:
- **Default** — headline + sub + CTA primario/secondario
- **Con stats bar** — hero + striscia statistiche 4-col (Pianeta.green, Susdef)
- **Con media** — hero + screenshot/mockup applicazione a destra
- **Centrato** — hero centrato con dot-pattern decorativo
- **Hub editoriale** — hero compatto + topic chips (Susdef, EPOS)

Token attivi:
\`--color-surface-inverse\` (bg), \`--color-brand-accent\` (highlight testo/CTA),
\`--font-display\` (titolo), \`--font-body\`, \`--color-interactive-accent-label\`.`,
      },
    },
  },
};

/* ── Shared CSS ──────────────────────────────────────────────── */
const css = `
<style>
  /* ── Hero base ── */
  .hero {
    background: var(--color-surface-inverse);
    padding: 96px 48px 80px;
    position: relative; overflow: hidden;
  }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--font-ui, 'IBM Plex Mono', monospace);
    font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--color-brand-accent, #D8EC28);
    margin-bottom: 20px;
  }
  .hero-eyebrow-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--color-brand-accent, #D8EC28);
  }
  .hero-title {
    font-family: var(--font-display); font-size: clamp(36px, 5vw, 62px);
    font-weight: 800; line-height: 1.08; letter-spacing: -0.02em;
    color: #fff; max-width: 800px; margin-bottom: 20px;
  }
  .hero-title-accent {
    color: var(--color-brand-accent, #D8EC28);
  }
  .hero-sub {
    font-family: var(--font-body); font-size: 18px; line-height: 1.65;
    color: rgba(255,255,255,0.62); max-width: 560px; margin-bottom: 36px;
  }
  .hero-actions {
    display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  }
  .hero-cta-primary {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 14px 28px; border-radius: 99px;
    font-family: var(--font-body); font-size: 15px; font-weight: 600;
    background: var(--color-brand-accent, #D8EC28);
    color: var(--color-interactive-accent-label, #000);
    text-decoration: none; transition: filter .12s;
  }
  .hero-cta-primary:hover { filter: brightness(1.08); }
  .hero-cta-secondary {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 14px 24px; border-radius: 99px;
    font-family: var(--font-body); font-size: 15px; font-weight: 500;
    color: rgba(255,255,255,0.8); text-decoration: none;
    border: 1px solid rgba(255,255,255,0.2);
    transition: border-color .12s, color .12s;
  }
  .hero-cta-secondary:hover { border-color: rgba(255,255,255,0.5); color: #fff; }

  /* Decorative noise/grid bg */
  .hero::before {
    content: '';
    position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle at 70% 40%,
      rgba(var(--color-brand-accent-rgb, 216,236,40), 0.06) 0%,
      transparent 60%);
  }

  /* ── Stats bar ── */
  .hero-stats-bar {
    background: rgba(0,0,0,0.3);
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 24px 48px;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
  .stat-item {
    padding: 0 24px; border-right: 1px solid rgba(255,255,255,0.1);
  }
  .stat-item:first-child { padding-left: 0; }
  .stat-item:last-child { border-right: none; }
  .stat-value {
    font-family: var(--font-display); font-size: 32px; font-weight: 800;
    color: #fff; line-height: 1; margin-bottom: 4px;
    letter-spacing: -0.02em;
  }
  .stat-accent { color: var(--color-brand-accent, #D8EC28); }
  .stat-label {
    font-family: var(--font-body); font-size: 13px;
    color: rgba(255,255,255,0.45);
  }

  /* ── Hero + media layout ── */
  .hero-split {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 64px; align-items: center;
  }
  .hero-media-frame {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 16px; overflow: hidden;
    position: relative;
    aspect-ratio: 16/10;
    display: flex; flex-direction: column;
  }
  .hero-media-bar {
    background: rgba(255,255,255,0.08);
    padding: 10px 14px; display: flex; align-items: center; gap: 6px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .media-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(255,255,255,0.15);
  }
  .media-dot.red { background: #FF5F57; }
  .media-dot.yellow { background: #FEBC2E; }
  .media-dot.green { background: #28C840; }
  .hero-media-content {
    flex: 1; padding: 20px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .media-line {
    height: 10px; border-radius: 4px; background: rgba(255,255,255,0.08);
  }
  .media-line-accent { background: rgba(var(--color-brand-accent-rgb, 216,236,40), 0.25); }
  .media-card-row {
    display: flex; gap: 8px; margin-top: 4px;
  }
  .media-card {
    flex: 1; height: 60px; border-radius: 8px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
  }

  /* ── Centered hero ── */
  .hero-centered {
    text-align: center; padding: 112px 48px 88px;
  }
  .hero-centered .hero-title { max-width: 700px; margin: 0 auto 20px; }
  .hero-centered .hero-sub { margin: 0 auto 36px; max-width: 520px; }
  .hero-centered .hero-actions { justify-content: center; }
  .hero-badge-row {
    display: flex; align-items: center; justify-content: center;
    gap: 8px; margin-bottom: 28px;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 12px; border-radius: 99px;
    border: 1px solid rgba(255,255,255,0.15);
    font-family: var(--font-ui, monospace); font-size: 11px;
    color: rgba(255,255,255,0.5); letter-spacing: 0.04em;
  }
  /* Dot pattern */
  .hero-centered::after {
    content: '';
    position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 24px 24px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%);
  }

  /* ── Hub editoriale hero ── */
  .hero-hub {
    padding: 64px 48px 0;
  }
  .hero-hub .hero-title { font-size: 44px; max-width: 640px; }
  .hero-hub .hero-sub { font-size: 16px; margin-bottom: 28px; }
  .topic-chips {
    display: flex; flex-wrap: wrap; gap: 8px;
    padding-bottom: 40px;
  }
  .topic-chip {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 14px; border-radius: 99px;
    font-family: var(--font-body); font-size: 12px; font-weight: 500;
    border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.65); text-decoration: none;
    transition: border-color .1s, color .1s, background .1s;
  }
  .topic-chip:hover { background: rgba(255,255,255,0.06); color: #fff; border-color: rgba(255,255,255,0.3); }
  .topic-chip.active {
    background: var(--color-brand-accent, #D8EC28);
    color: var(--color-interactive-accent-label, #000);
    border-color: transparent;
  }
  .topic-dot { width: 6px; height: 6px; border-radius: 50%; }
  .topic-chip-count {
    font-size: 10px; opacity: 0.6; letter-spacing: 0.02em;
  }

  .preview-label {
    font-family: var(--font-ui, monospace); font-size: 10px; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--color-content-secondary, #666);
    padding: 24px 48px 16px; background: var(--color-surface-page, #fff);
  }
</style>
`;

/* ── Story: Default ──────────────────────────────────────────── */
export const Default = {
  name: 'Default — headline + CTA',
  render: () => `${css}
<div class="preview-label">HeroSection — default (cambia brand con il switcher 🎨)</div>
<section class="hero">
  <div style="position:relative;z-index:1;">
    <div class="hero-eyebrow">
      <span class="hero-eyebrow-dot"></span>
      Novità 2026
    </div>
    <h1 class="hero-title">
      La piattaforma per la<br>
      <span class="hero-title-accent">transizione ecologica</span>
    </h1>
    <p class="hero-sub">
      Documenta, condividi e amplifica il lavoro delle organizzazioni
      che costruiscono un futuro sostenibile.
    </p>
    <div class="hero-actions">
      <a class="hero-cta-primary" href="#">Inizia gratis →</a>
      <a class="hero-cta-secondary" href="#">Guarda la demo ▷</a>
    </div>
  </div>
</section>`,
};

/* ── Story: Con stats bar ────────────────────────────────────── */
export const WithStats = {
  name: 'Con stats bar — 4 numeri',
  render: () => `${css}
<div class="preview-label">HeroSection + stats bar — Pianeta.green / Susdef style</div>
<section class="hero" style="padding-bottom:0;">
  <div style="position:relative;z-index:1;">
    <div class="hero-eyebrow">
      <span class="hero-eyebrow-dot"></span>
      Hosting 100% Rinnovabile
    </div>
    <h1 class="hero-title">
      Veloce. Sostenibile.<br>
      <span class="hero-title-accent">Misurabile.</span>
    </h1>
    <p class="hero-sub">
      Ogni sito che ospitiamo genera meno CO₂ dell'invio di una email.
      Lo misuriamo. Lo certifichiamo. Lo pubblichiamo.
    </p>
    <div class="hero-actions">
      <a class="hero-cta-primary" href="#">Scopri i piani →</a>
      <a class="hero-cta-secondary" href="#">Misura il tuo sito</a>
    </div>
  </div>
</section>
<div class="hero-stats-bar">
  <div class="stat-item">
    <div class="stat-value">100<span class="stat-accent">%</span></div>
    <div class="stat-label">energia rinnovabile</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">3.200<span class="stat-accent">+</span></div>
    <div class="stat-label">siti ospitati</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">99.9<span class="stat-accent">%</span></div>
    <div class="stat-label">uptime garantito</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">0<span class="stat-accent">t</span></div>
    <div class="stat-label">CO₂ netta emessa</div>
  </div>
</div>`,
};

/* ── Story: Con media ────────────────────────────────────────── */
export const WithMedia = {
  name: 'Con media — layout split',
  render: () => `${css}
<div class="preview-label">HeroSection + media (screenshot/mockup app) — layout 2-col</div>
<section class="hero">
  <div class="hero-split" style="position:relative;z-index:1;">
    <div>
      <div class="hero-eyebrow">
        <span class="hero-eyebrow-dot"></span>
        Area Clienti
      </div>
      <h1 class="hero-title" style="font-size:48px;">
        I tuoi siti,<br>
        <span class="hero-title-accent">tutti sotto controllo</span>
      </h1>
      <p class="hero-sub" style="font-size:16px;">
        Dashboard unificata per gestire hosting, CMS, GreenMeter
        e Analytics di tutti i tuoi siti da un unico punto.
      </p>
      <div class="hero-actions">
        <a class="hero-cta-primary" href="#">Accedi all'area →</a>
        <a class="hero-cta-secondary" href="#">Scopri i piani</a>
      </div>
    </div>
    <div>
      <div class="hero-media-frame">
        <div class="hero-media-bar">
          <div class="media-dot red"></div>
          <div class="media-dot yellow"></div>
          <div class="media-dot green"></div>
          <div style="flex:1;height:8px;border-radius:4px;background:rgba(255,255,255,0.08);margin-left:8px;max-width:180px;"></div>
        </div>
        <div class="hero-media-content">
          <div style="display:flex;gap:12px;">
            <div style="width:80px;height:100%;border-radius:8px;background:rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;gap:6px;padding:8px;">
              <div class="media-line" style="width:40px;height:8px;"></div>
              <div class="media-line" style="width:55px;height:6px;"></div>
              <div class="media-line" style="width:45px;height:6px;"></div>
              <div class="media-line" style="width:50px;height:6px;"></div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;gap:8px;">
                <div style="flex:1;height:36px;border-radius:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);"></div>
                <div style="flex:1;height:36px;border-radius:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);"></div>
                <div style="flex:1;height:36px;border-radius:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);"></div>
                <div style="flex:1;height:36px;border-radius:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);"></div>
              </div>
              <div class="media-card-row">
                <div class="media-card"></div>
                <div class="media-card"></div>
              </div>
              <div style="height:40px;border-radius:8px;background:rgba(var(--color-brand-accent-rgb,216,236,40),0.1);border:1px solid rgba(var(--color-brand-accent-rgb,216,236,40),0.2);"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
};

/* ── Story: Centrato ─────────────────────────────────────────── */
export const Centered = {
  name: 'Centrato — con dot pattern',
  render: () => `${css}
<div class="preview-label">HeroSection centrato — con dot-pattern decorativo e badge row</div>
<section class="hero hero-centered" style="position:relative;">
  <div style="position:relative;z-index:1;">
    <div class="hero-badge-row">
      <div class="hero-badge">🌿 Eco-certificato</div>
      <div class="hero-badge">⚡ 100% Rinnovabile</div>
      <div class="hero-badge">★★★★★ su Trustpilot</div>
    </div>
    <h1 class="hero-title">
      Il web che rispetta<br>
      <span class="hero-title-accent">il pianeta</span>
    </h1>
    <p class="hero-sub">
      Hosting sostenibile, GreenMeter integrato e siti gestiti
      per chi vuole ridurre il proprio impatto digitale.
    </p>
    <div class="hero-actions">
      <a class="hero-cta-primary" href="#">Prova gratis 30 giorni →</a>
      <a class="hero-cta-secondary" href="#">Guarda come funziona ▷</a>
    </div>
  </div>
</section>`,
};

/* ── Story: Hub editoriale ───────────────────────────────────── */
export const HubEditoriale = {
  name: 'Hub editoriale — con topic chips',
  render: () => `${css}
<div class="preview-label">HeroSection hub — compatto con filtri tematici (Susdef / EPOS style)</div>
<section class="hero hero-hub">
  <div style="position:relative;z-index:1;">
    <div class="hero-eyebrow">
      <span class="hero-eyebrow-dot"></span>
      Sviluppo Sostenibile
    </div>
    <h1 class="hero-title" style="font-size:44px;max-width:640px;">
      Notizie, ricerche e<br>
      <span class="hero-title-accent">idee che contano</span>
    </h1>
    <p class="hero-sub" style="font-size:15px;margin-bottom:24px;">
      Il punto di riferimento italiano per la transizione ecologica.
      Documentazione, analisi e comunità.
    </p>
    <div class="topic-chips">
      <a class="topic-chip active" href="#">
        Tutti <span class="topic-chip-count">248</span>
      </a>
      <a class="topic-chip" href="#">
        <span class="topic-dot" style="background:#FF8C01;"></span>
        Eco-innovazione <span class="topic-chip-count">42</span>
      </a>
      <a class="topic-chip" href="#">
        <span class="topic-dot" style="background:#2792B9;"></span>
        Energia & Clima <span class="topic-chip-count">67</span>
      </a>
      <a class="topic-chip" href="#">
        <span class="topic-dot" style="background:#BEBFF8;"></span>
        Economia Circolare <span class="topic-chip-count">38</span>
      </a>
      <a class="topic-chip" href="#">
        <span class="topic-dot" style="background:#CE9B62;"></span>
        Mobilità <span class="topic-chip-count">29</span>
      </a>
      <a class="topic-chip" href="#">
        <span class="topic-dot" style="background:#B9284F;"></span>
        Green City <span class="topic-chip-count">31</span>
      </a>
      <a class="topic-chip" href="#">
        <span class="topic-dot" style="background:#FFC310;"></span>
        Agroecologia <span class="topic-chip-count">24</span>
      </a>
      <a class="topic-chip" href="#">
        <span class="topic-dot" style="background:#9EDFC9;"></span>
        Corsi <span class="topic-chip-count">17</span>
      </a>
    </div>
  </div>
</section>`,
};
