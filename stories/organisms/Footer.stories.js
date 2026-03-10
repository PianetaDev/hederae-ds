/**
 * Hederae DS — Footer organism
 * Footer sito — multi-brand, 4 varianti.
 *
 * Token-driven: bg, colori, font si adattano al brand attivo.
 * Varianti: Default (3-col), Con newsletter, Slim (app shell), Certificazioni.
 */

export default {
  title: '⬡ Organisms/Footer — Piè di pagina',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Componente footer sito. Multi-brand via CSS vars. Varianti:
- **Default** — layout 3-col (brand/nav/contatti) + barra copyright
- **Con newsletter** — footer + form iscrizione in-footer
- **Slim** — footer minimale per app-shell (Area Clienti, tool interni)
- **Certificazioni** — footer con badge/loghi certificazione (Pianeta.green)

Token attivi per brand:
\`--color-surface-inverse\` (bg), \`--color-content-inverse\` (testo),
\`--color-brand-accent\` (accenti), \`--font-display\`, \`--font-body\`, \`--font-ui\`.`,
      },
    },
  },
};

/* ── Shared CSS ──────────────────────────────────────────────── */
const css = `
<style>
  .ftr {
    background: var(--color-surface-inverse);
    padding: 56px 48px 0;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .ftr-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
    gap: 48px;
    padding-bottom: 48px;
  }
  .ftr-brand-name {
    font-family: var(--font-display); font-size: 18px; font-weight: 700;
    color: var(--color-content-inverse, #fff);
    display: flex; align-items: center; gap: 8px; margin-bottom: 12px;
  }
  .ftr-brand-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--color-brand-accent, #D8EC28);
    flex-shrink: 0;
  }
  .ftr-tagline {
    font-family: var(--font-body); font-size: 13px; line-height: 1.6;
    color: rgba(255,255,255,0.5); max-width: 240px; margin-bottom: 20px;
  }
  .ftr-social {
    display: flex; gap: 8px;
  }
  .ftr-social-link {
    width: 34px; height: 34px; border-radius: 8px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center;
    font-size: 15px; text-decoration: none; transition: background .12s;
  }
  .ftr-social-link:hover { background: rgba(255,255,255,0.14); }

  .ftr-col-title {
    font-family: var(--font-ui, 'IBM Plex Mono', monospace);
    font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
    color: rgba(255,255,255,0.3); margin-bottom: 16px;
  }
  .ftr-link {
    display: block; font-family: var(--font-body); font-size: 13px;
    color: rgba(255,255,255,0.6); text-decoration: none;
    padding: 5px 0; transition: color .1s;
  }
  .ftr-link:hover { color: #fff; }
  .ftr-link-accent {
    color: var(--color-brand-accent, #D8EC28) !important;
  }

  .ftr-contact-item {
    display: flex; align-items: flex-start; gap: 10px;
    font-family: var(--font-body); font-size: 13px;
    color: rgba(255,255,255,0.6); margin-bottom: 10px; line-height: 1.5;
  }
  .ftr-contact-icon { font-size: 14px; flex-shrink: 0; margin-top: 1px; }

  .ftr-divider {
    height: 1px; background: rgba(255,255,255,0.08);
  }
  .ftr-bottom {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 0; gap: 16px;
  }
  .ftr-copy {
    font-family: var(--font-ui, monospace); font-size: 11px;
    color: rgba(255,255,255,0.3); letter-spacing: 0.02em;
  }
  .ftr-legal {
    display: flex; gap: 20px;
  }
  .ftr-legal a {
    font-family: var(--font-ui, monospace); font-size: 11px;
    color: rgba(255,255,255,0.3); text-decoration: none; letter-spacing: 0.02em;
    transition: color .1s;
  }
  .ftr-legal a:hover { color: rgba(255,255,255,0.7); }

  /* Newsletter in-footer */
  .ftr-newsletter-band {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 28px 32px;
    display: flex; align-items: center; gap: 32px; margin-bottom: 48px;
  }
  .ftr-nl-text { flex: 1; }
  .ftr-nl-title {
    font-family: var(--font-display); font-size: 18px; font-weight: 700;
    color: #fff; margin-bottom: 4px;
  }
  .ftr-nl-sub { font-size: 13px; color: rgba(255,255,255,0.55); }
  .ftr-nl-form {
    display: flex; gap: 8px; flex-shrink: 0;
  }
  .ftr-nl-input {
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
    border-radius: 99px; padding: 10px 18px;
    font-family: var(--font-body); font-size: 13px; color: #fff;
    outline: none; width: 240px;
  }
  .ftr-nl-input::placeholder { color: rgba(255,255,255,0.35); }
  .ftr-nl-input:focus { border-color: var(--color-brand-accent, #D8EC28); }
  .ftr-nl-btn {
    padding: 10px 20px; border-radius: 99px; border: none; cursor: pointer;
    font-family: var(--font-body); font-size: 13px; font-weight: 600;
    background: var(--color-brand-accent, #D8EC28);
    color: var(--color-interactive-accent-label, #000);
    white-space: nowrap;
  }

  /* Slim footer */
  .ftr-slim {
    background: var(--color-surface-inverse);
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 0 32px;
    height: 52px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .ftr-slim-brand {
    font-family: var(--font-display); font-size: 13px; font-weight: 700;
    color: rgba(255,255,255,0.5); display: flex; align-items: center; gap: 6px;
  }
  .ftr-slim-links {
    display: flex; gap: 20px;
  }
  .ftr-slim-links a {
    font-family: var(--font-ui, monospace); font-size: 11px;
    color: rgba(255,255,255,0.3); text-decoration: none; letter-spacing: 0.02em;
    transition: color .1s;
  }
  .ftr-slim-links a:hover { color: rgba(255,255,255,0.6); }

  /* Badge certificazioni */
  .ftr-certs {
    display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  }
  .ftr-cert-badge {
    display: flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px; padding: 6px 10px;
    font-family: var(--font-ui, monospace); font-size: 10px;
    color: rgba(255,255,255,0.5); letter-spacing: 0.04em;
  }
  .ftr-cert-icon { font-size: 14px; }

  .preview-label {
    font-family: var(--font-ui, monospace); font-size: 10px; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--color-content-secondary, #666);
    padding: 24px 48px 16px;
  }
</style>
`;

/* ── Story: Default ──────────────────────────────────────────── */
export const Default = {
  name: 'Default — 4 colonne',
  render: () => `${css}
<div class="preview-label">Footer — layout 4-col (brand / nav / risorse / contatti)</div>
<footer class="ftr">
  <div class="ftr-grid">

    <!-- Col 1: Brand -->
    <div>
      <div class="ftr-brand-name">
        <span class="ftr-brand-dot"></span>
        Brand
      </div>
      <p class="ftr-tagline">La piattaforma per organizzazioni che vogliono fare la differenza sul territorio.</p>
      <div class="ftr-social">
        <a class="ftr-social-link" href="#">𝕏</a>
        <a class="ftr-social-link" href="#">in</a>
        <a class="ftr-social-link" href="#">yt</a>
        <a class="ftr-social-link" href="#">ig</a>
      </div>
    </div>

    <!-- Col 2: Navigazione -->
    <div>
      <div class="ftr-col-title">Navigazione</div>
      <a class="ftr-link" href="#">Home</a>
      <a class="ftr-link" href="#">Settori tematici</a>
      <a class="ftr-link" href="#">Documentazione</a>
      <a class="ftr-link" href="#">Notizie</a>
      <a class="ftr-link" href="#">Chi siamo</a>
      <a class="ftr-link" href="#">Contatti</a>
    </div>

    <!-- Col 3: Risorse -->
    <div>
      <div class="ftr-col-title">Risorse</div>
      <a class="ftr-link" href="#">Rapporti annuali</a>
      <a class="ftr-link" href="#">Ricerche e dati</a>
      <a class="ftr-link" href="#">Newsletter</a>
      <a class="ftr-link" href="#">Podcast & Video</a>
      <a class="ftr-link ftr-link-accent" href="#">↗ Ultime notizie</a>
    </div>

    <!-- Col 4: Contatti -->
    <div>
      <div class="ftr-col-title">Contatti</div>
      <div class="ftr-contact-item">
        <span class="ftr-contact-icon">📍</span>
        <span>Via Esempio 12<br>20121 Milano, IT</span>
      </div>
      <div class="ftr-contact-item">
        <span class="ftr-contact-icon">✉️</span>
        <span>info@brand.it</span>
      </div>
      <div class="ftr-contact-item">
        <span class="ftr-contact-icon">📞</span>
        <span>+39 02 0000 0000</span>
      </div>
    </div>
  </div>

  <div class="ftr-divider"></div>
  <div class="ftr-bottom">
    <div class="ftr-copy">© 2026 Brand. Tutti i diritti riservati.</div>
    <div class="ftr-legal">
      <a href="#">Privacy policy</a>
      <a href="#">Cookie policy</a>
      <a href="#">Termini di servizio</a>
      <a href="#">Note legali</a>
    </div>
  </div>
</footer>`,
};

/* ── Story: Con newsletter ───────────────────────────────────── */
export const WithNewsletter = {
  name: 'Con newsletter in-footer',
  render: () => `${css}
<div class="preview-label">Footer — con band newsletter integrata (prima del grid principale)</div>
<footer class="ftr">
  <!-- Newsletter band -->
  <div class="ftr-newsletter-band">
    <div class="ftr-nl-text">
      <div class="ftr-nl-title">Resta aggiornato</div>
      <div class="ftr-nl-sub">Notizie, ricerche e dati sulla transizione ecologica. Ogni settimana.</div>
    </div>
    <div class="ftr-nl-form">
      <input class="ftr-nl-input" type="email" placeholder="La tua email...">
      <button class="ftr-nl-btn">Iscriviti →</button>
    </div>
  </div>

  <div class="ftr-grid">
    <div>
      <div class="ftr-brand-name">
        <span class="ftr-brand-dot"></span>
        Brand
      </div>
      <p class="ftr-tagline">La piattaforma per organizzazioni che vogliono fare la differenza.</p>
      <div class="ftr-social">
        <a class="ftr-social-link" href="#">𝕏</a>
        <a class="ftr-social-link" href="#">in</a>
        <a class="ftr-social-link" href="#">yt</a>
      </div>
    </div>
    <div>
      <div class="ftr-col-title">Navigazione</div>
      <a class="ftr-link" href="#">Home</a>
      <a class="ftr-link" href="#">Settori</a>
      <a class="ftr-link" href="#">Documentazione</a>
      <a class="ftr-link" href="#">Notizie</a>
    </div>
    <div>
      <div class="ftr-col-title">Comunità</div>
      <a class="ftr-link" href="#">Associazioni partner</a>
      <a class="ftr-link" href="#">Enti locali</a>
      <a class="ftr-link" href="#">Imprese B Corp</a>
      <a class="ftr-link" href="#">Università</a>
    </div>
    <div>
      <div class="ftr-col-title">Contatti</div>
      <div class="ftr-contact-item"><span class="ftr-contact-icon">📍</span><span>Milano, IT</span></div>
      <div class="ftr-contact-item"><span class="ftr-contact-icon">✉️</span><span>info@brand.it</span></div>
    </div>
  </div>
  <div class="ftr-divider"></div>
  <div class="ftr-bottom">
    <div class="ftr-copy">© 2026 Brand. Tutti i diritti riservati.</div>
    <div class="ftr-legal">
      <a href="#">Privacy</a>
      <a href="#">Cookie</a>
      <a href="#">Termini</a>
    </div>
  </div>
</footer>`,
};

/* ── Story: Slim ─────────────────────────────────────────────── */
export const Slim = {
  name: 'Slim — app shell',
  render: () => `${css}
<div class="preview-label">Footer slim — per app shell (Area Clienti, tool interni, dashboard)</div>
<div style="background:var(--color-surface-page,#f5f5f5);height:200px;display:flex;align-items:center;justify-content:center;">
  <p style="font-family:var(--font-body);color:var(--color-content-secondary);">Contenuto app shell</p>
</div>
<footer class="ftr-slim">
  <div class="ftr-slim-brand">
    <span style="width:6px;height:6px;border-radius:50%;background:var(--color-brand-accent,#D8EC28);"></span>
    Brand
  </div>
  <div class="ftr-slim-links">
    <a href="#">Privacy</a>
    <a href="#">Cookie</a>
    <a href="#">Supporto</a>
    <a href="#">Stato servizi</a>
  </div>
  <div style="font-family:var(--font-ui,monospace);font-size:11px;color:rgba(255,255,255,0.25);">
    v2.4.1 · © 2026
  </div>
</footer>`,
};

/* ── Story: Certificazioni ───────────────────────────────────── */
export const Certificazioni = {
  name: 'Certificazioni — Pianeta.green',
  render: () => `${css}
<div class="preview-label">Footer con badge di certificazione — variante Pianeta.green</div>
<footer class="ftr">
  <div class="ftr-grid">
    <div>
      <div class="ftr-brand-name">
        <span class="ftr-brand-dot"></span>
        Pianeta.green
      </div>
      <p class="ftr-tagline">Hosting 100% rinnovabile. Zero CO₂. Misurato, certificato, verificabile.</p>
      <div class="ftr-certs" style="margin-top:16px;">
        <div class="ftr-cert-badge"><span class="ftr-cert-icon">🌿</span>Green Hosting</div>
        <div class="ftr-cert-badge"><span class="ftr-cert-icon">⚡</span>100% Rinnovabile</div>
        <div class="ftr-cert-badge"><span class="ftr-cert-icon">♻️</span>CO₂ Neutral</div>
        <div class="ftr-cert-badge"><span class="ftr-cert-icon">📊</span>GreenMeter A+</div>
      </div>
    </div>
    <div>
      <div class="ftr-col-title">Servizi</div>
      <a class="ftr-link" href="#">Hosting</a>
      <a class="ftr-link" href="#">GreenMeter</a>
      <a class="ftr-link" href="#">Siti gestiti</a>
      <a class="ftr-link" href="#">Piani & Prezzi</a>
      <a class="ftr-link ftr-link-accent" href="#">↗ Inizia gratis</a>
    </div>
    <div>
      <div class="ftr-col-title">Risorse</div>
      <a class="ftr-link" href="#">Documentazione</a>
      <a class="ftr-link" href="#">Status page</a>
      <a class="ftr-link" href="#">Blog sostenibilità</a>
      <a class="ftr-link" href="#">Report impatto</a>
    </div>
    <div>
      <div class="ftr-col-title">Azienda</div>
      <a class="ftr-link" href="#">Chi siamo</a>
      <a class="ftr-link" href="#">Impatto ambientale</a>
      <a class="ftr-link" href="#">Partner certificati</a>
      <div class="ftr-contact-item" style="margin-top:16px;">
        <span class="ftr-contact-icon">✉️</span>
        <span>hello@pianeta.green</span>
      </div>
    </div>
  </div>
  <div class="ftr-divider"></div>
  <div class="ftr-bottom">
    <div class="ftr-copy">© 2026 Pianeta.green — Pianeta Studio. P.IVA 00000000000</div>
    <div class="ftr-legal">
      <a href="#">Privacy</a>
      <a href="#">Cookie</a>
      <a href="#">Termini</a>
      <a href="#">Dichiarazione CO₂</a>
    </div>
  </div>
</footer>`,
};
