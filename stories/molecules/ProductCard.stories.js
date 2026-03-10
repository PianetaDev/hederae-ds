export default {
  title: '⬡ Molecules/Product Card',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card prodotto in quattro varianti: standard, scontata (badge-sale), novità (badge-new), esaurita (badge-out), eco/GreenMeter. Formato verticale (grid) e orizzontale (list-row). Condivisa tra shop-catalogo e scheda prodotto (correlati).',
      },
    },
  },
};

/* ─── Shared CSS ─────────────────────────────────────────────────── */

const css = `<style>
  .product-card {
    text-decoration: none; color: inherit;
    display: flex; flex-direction: column;
    max-width: 280px;
  }
  .product-card:hover .product-img-wrapper {
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  }
  .product-img-wrapper {
    position: relative;
    background: var(--color-surface-card);
    border-radius: var(--radius-md);
    aspect-ratio: 4/3; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    transition: box-shadow 0.15s;
  }
  .product-img-placeholder {
    font-size: 52px; opacity: 0.20; user-select: none;
  }
  .product-badge {
    position: absolute; top: 12px; left: 12px;
    padding: 3px 10px; border-radius: 20px;
    font-family: var(--font-ui); font-size: 10px; font-weight: 500;
    letter-spacing: 0.05em;
  }
  .badge-new  { background: var(--color-surface-inverse); color: #fff; }
  .badge-sale { background: #FDECEA; color: #C62828; border: 1px solid #FBCFCF; }
  .badge-out  { background: var(--color-surface-deep); color: var(--color-content-disabled); }
  .badge-eco  {
    background: var(--color-greenmeter-badge-bg, #D1FAE5);
    color: var(--color-greenmeter-badge-text, #065F46);
  }
  .product-wishlist {
    position: absolute; top: 12px; right: 12px;
    width: 30px; height: 30px; border-radius: 50%;
    background: #fff; border: 1px solid var(--color-border-default);
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; cursor: pointer;
    opacity: 0; transition: opacity 0.15s;
  }
  .product-card:hover .product-wishlist { opacity: 1; }
  .product-body {
    padding: 14px 0 0; flex: 1;
    display: flex; flex-direction: column; gap: 4px;
  }
  .product-category {
    font-family: var(--font-ui); font-size: 10px;
    letter-spacing: 0.10em; text-transform: uppercase;
    color: var(--color-content-secondary);
  }
  .product-name {
    font-family: var(--font-heading); font-size: 15px; font-weight: 500;
    line-height: 1.35; color: var(--color-content-primary);
  }
  .product-desc {
    font-size: 13px; color: var(--color-content-secondary);
    line-height: 1.5; margin-top: 2px;
  }
  .product-rating {
    display: flex; align-items: center; gap: 4px; margin-top: 4px;
  }
  .stars { color: #D97706; font-size: 12px; }
  .rating-count { font-size: 12px; color: var(--color-content-secondary); }
  .product-footer {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: auto; padding-top: 12px;
  }
  .product-price {
    font-family: var(--font-ui); font-size: 17px; font-weight: 500;
    color: var(--color-content-primary);
  }
  .product-price-old {
    font-family: var(--font-ui); font-size: 13px;
    color: var(--color-content-disabled); text-decoration: line-through;
    margin-right: 6px;
  }
  .product-price-sale { color: #C62828; }
  .add-to-cart-btn {
    padding: 8px 16px; background: var(--color-surface-inverse); color: #fff;
    border: none; border-radius: var(--radius-full);
    font-family: var(--font-ui); font-size: 12px; font-weight: 500;
    letter-spacing: 0.05em; cursor: pointer;
    transition: background 0.15s;
  }
  .add-to-cart-btn:hover { background: var(--color-brand-dark, #0D3D26); }
  .add-to-cart-btn.disabled {
    background: var(--color-surface-deep); color: var(--color-content-disabled);
    cursor: not-allowed;
  }
  /* GreenMeter score strip */
  .eco-strip {
    display: flex; align-items: center; gap: 6px;
    margin-top: 4px;
  }
  .eco-strip-label {
    font-family: var(--font-ui); font-size: 10px; letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-greenmeter-badge-text, #065F46);
  }
  .eco-bar {
    flex: 1; height: 4px; background: var(--color-surface-deep);
    border-radius: 99px; overflow: hidden;
  }
  .eco-bar-fill {
    height: 100%; border-radius: 99px;
    background: var(--color-greenmeter-accent, #5BD48A);
  }
  .eco-score {
    font-family: var(--font-ui); font-size: 10px; font-weight: 600;
    color: var(--color-greenmeter-primary, #138C52);
  }
  /* ── List-row variant ── */
  .product-row {
    text-decoration: none; color: inherit;
    display: grid;
    grid-template-columns: 80px 1fr auto;
    gap: 12px 16px;
    align-items: center;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    padding: 12px 16px;
    transition: border-color 0.15s, box-shadow 0.12s;
  }
  .product-row:hover {
    border-color: var(--color-border-brand);
    box-shadow: var(--shadow-sm);
  }
  .product-row-thumb {
    width: 80px; height: 60px;
    background: var(--color-surface-card);
    border-radius: var(--radius-sm);
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; opacity: 0.7; flex-shrink: 0;
  }
  .product-row-body {
    display: flex; flex-direction: column; gap: 3px; min-width: 0;
  }
  .product-row-name {
    font-family: var(--font-heading); font-size: 14px; font-weight: 500;
    color: var(--color-content-primary); line-height: 1.3;
  }
  .product-row-meta {
    display: flex; gap: 8px; align-items: center; flex-wrap: wrap;
  }
  .product-row-aside {
    display: flex; flex-direction: column; align-items: flex-end; gap: 8px;
    flex-shrink: 0;
  }
</style>`;

/* ─── Story: Default ─────────────────────────────────────────────── */

export const Default = {
  name: 'Standard (prezzo pieno)',
  render: () => `${css}
<div style="padding:32px;">
  <p style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin:0 0 20px;">Product Card — Default</p>
  <a class="product-card">
    <div class="product-img-wrapper">
      <span class="product-img-placeholder">📚</span>
      <button class="product-wishlist" aria-label="Aggiungi ai desideri">♡</button>
    </div>
    <div class="product-body">
      <span class="product-category">Libri</span>
      <p class="product-name">Manuale del Capo Scout — Edizione 2024</p>
      <p class="product-desc">Guida completa al metodo scout per capi branca E/G. Aggiornata con le ultime indicazioni nazionali.</p>
      <div class="product-rating">
        <span class="stars">★★★★★</span>
        <span class="rating-count">(42)</span>
      </div>
      <div class="product-footer">
        <span class="product-price">€24,90</span>
        <button class="add-to-cart-btn">+ Carrello</button>
      </div>
    </div>
  </a>
</div>`,
};

/* ─── Story: Sale ────────────────────────────────────────────────── */

export const Sale = {
  name: 'Scontata (badge-sale)',
  render: () => `${css}
<div style="padding:32px;">
  <p style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin:0 0 20px;">Product Card — In Sconto</p>
  <a class="product-card">
    <div class="product-img-wrapper">
      <span class="product-img-placeholder">🎭</span>
      <span class="product-badge badge-sale">−20%</span>
      <button class="product-wishlist" aria-label="Aggiungi ai desideri">♡</button>
    </div>
    <div class="product-body">
      <span class="product-category">Gadget</span>
      <p class="product-name">Foulard Gruppo Personalizzato</p>
      <p class="product-desc">Foulard in cotone con ricamo del gruppo. Disponibile in tutti i colori Branca.</p>
      <div class="product-rating">
        <span class="stars">★★★★★</span>
        <span class="rating-count">(73)</span>
      </div>
      <div class="product-footer">
        <div>
          <span class="product-price-old">€12,00</span>
          <span class="product-price product-price-sale">€9,60</span>
        </div>
        <button class="add-to-cart-btn">+ Carrello</button>
      </div>
    </div>
  </a>
</div>`,
};

/* ─── Story: New ─────────────────────────────────────────────────── */

export const BadgeNew = {
  name: 'Novità (badge-new)',
  render: () => `${css}
<div style="padding:32px;">
  <p style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin:0 0 20px;">Product Card — Novità</p>
  <a class="product-card">
    <div class="product-img-wrapper">
      <span class="product-img-placeholder">🏕️</span>
      <span class="product-badge badge-new">Nuovo</span>
      <button class="product-wishlist" aria-label="Aggiungi ai desideri">♡</button>
    </div>
    <div class="product-body">
      <span class="product-category">Attrezzatura</span>
      <p class="product-name">Tenda Modulare 4 posti — Serie Trek</p>
      <p class="product-desc">Tenda ultraleggera in nylon ripstop. Ideale per campi estivi e uscite di pattuglia.</p>
      <div class="product-rating">
        <span class="stars">★★★★☆</span>
        <span class="rating-count">(5)</span>
      </div>
      <div class="product-footer">
        <span class="product-price">€189,00</span>
        <button class="add-to-cart-btn">+ Carrello</button>
      </div>
    </div>
  </a>
</div>`,
};

/* ─── Story: Sold Out ────────────────────────────────────────────── */

export const SoldOut = {
  name: 'Esaurita (badge-out)',
  render: () => `${css}
<style>
  .product-card.is-out .product-img-wrapper { opacity: 0.55; }
  .product-card.is-out .product-name,
  .product-card.is-out .product-price { color: var(--color-content-disabled); }
</style>
<div style="padding:32px;">
  <p style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin:0 0 20px;">Product Card — Esaurita</p>
  <a class="product-card is-out">
    <div class="product-img-wrapper">
      <span class="product-img-placeholder">⛺</span>
      <span class="product-badge badge-out">Esaurito</span>
    </div>
    <div class="product-body">
      <span class="product-category">Attrezzatura</span>
      <p class="product-name">Zaino Alpino 65L — Edizione Limitata</p>
      <div class="product-rating">
        <span class="stars">★★★★★</span>
        <span class="rating-count">(56)</span>
      </div>
      <div class="product-footer">
        <span class="product-price">€210,00</span>
        <button class="add-to-cart-btn disabled" disabled>Esaurito</button>
      </div>
    </div>
  </a>
</div>`,
};

/* ─── Story: GreenMeter ──────────────────────────────────────────── */

export const GreenMeter = {
  name: 'Eco / GreenMeter',
  render: () => `${css}
<div style="padding:32px;">
  <p style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin:0 0 20px;">Product Card — GreenMeter badge + eco score</p>
  <a class="product-card">
    <div class="product-img-wrapper">
      <span class="product-img-placeholder">🌱</span>
      <span class="product-badge badge-eco">Eco ✓</span>
      <button class="product-wishlist" aria-label="Aggiungi ai desideri">♡</button>
    </div>
    <div class="product-body">
      <span class="product-category">Cosmetica</span>
      <p class="product-name">Shampoo Solido Biologico — 60g</p>
      <p class="product-desc">Formula a zero rifiuti, certificata COSMOS Organic. Imballaggio compostabile al 100%.</p>
      <div class="eco-strip">
        <span class="eco-strip-label">GreenMeter</span>
        <div class="eco-bar"><div class="eco-bar-fill" style="width:86%;"></div></div>
        <span class="eco-score">86</span>
      </div>
      <div class="product-rating">
        <span class="stars">★★★★★</span>
        <span class="rating-count">(29)</span>
      </div>
      <div class="product-footer">
        <span class="product-price">€8,90</span>
        <button class="add-to-cart-btn">+ Carrello</button>
      </div>
    </div>
  </a>
</div>`,
};

/* ─── Story: Grid 3 colonne ──────────────────────────────────────── */

const gridItems = [
  {
    icon: '📚', cat: 'Libri', name: 'Manuale del Capo Scout 2024',
    rating: '★★★★★', count: '(42)', price: '€24,90',
    badge: null, sale: false, salePrice: null, oldPrice: null,
  },
  {
    icon: '🎭', cat: 'Gadget', name: 'Foulard Gruppo Personalizzato',
    rating: '★★★★★', count: '(73)',
    badge: 'sale', badgeLabel: '−20%', sale: true, oldPrice: '€12,00', salePrice: '€9,60',
  },
  {
    icon: '🏕️', cat: 'Attrezzatura', name: 'Tenda Modulare 4 posti — Trek',
    rating: '★★★★☆', count: '(5)', price: '€189,00',
    badge: 'new', badgeLabel: 'Nuovo', sale: false,
  },
  {
    icon: '🌱', cat: 'Cosmetica', name: 'Shampoo Solido Biologico 60g',
    rating: '★★★★★', count: '(29)', price: '€8,90',
    badge: 'eco', badgeLabel: 'Eco ✓', sale: false, eco: true,
  },
  {
    icon: '⛺', cat: 'Attrezzatura', name: 'Zaino Alpino 65L — Ed. Limitata',
    rating: '★★★★★', count: '(56)', price: '€210,00',
    badge: 'out', badgeLabel: 'Esaurito', sale: false, out: true,
  },
  {
    icon: '📋', cat: 'Formazione', name: 'Dispense Corso Capi — Modulo A',
    rating: '★★★☆☆', count: '(6)', price: '€5,00',
    badge: null, sale: false,
  },
];

const renderGridCard = (p) => {
  const badgeHtml = p.badge
    ? `<span class="product-badge badge-${p.badge}">${p.badgeLabel}</span>`
    : '';
  const wishlistHtml = p.out ? '' : `<button class="product-wishlist" aria-label="Aggiungi ai desideri">♡</button>`;
  const priceHtml = p.sale
    ? `<div><span class="product-price-old">${p.oldPrice}</span><span class="product-price product-price-sale">${p.salePrice}</span></div>`
    : `<span class="product-price${p.out ? '" style="color:var(--color-content-disabled)' : ''}">${p.price}</span>`;
  const ctaHtml = p.out
    ? `<button class="add-to-cart-btn disabled" disabled>Esaurito</button>`
    : `<button class="add-to-cart-btn">+ Carrello</button>`;
  const ecoHtml = p.eco
    ? `<div class="eco-strip"><span class="eco-strip-label">GreenMeter</span><div class="eco-bar"><div class="eco-bar-fill" style="width:86%;"></div></div><span class="eco-score">86</span></div>`
    : '';

  return `
  <a class="product-card${p.out ? ' is-out' : ''}">
    <div class="product-img-wrapper${p.out ? '" style="opacity:.55' : ''}">
      <span class="product-img-placeholder">${p.icon}</span>
      ${badgeHtml}${wishlistHtml}
    </div>
    <div class="product-body">
      <span class="product-category">${p.cat}</span>
      <p class="product-name">${p.name}</p>
      ${ecoHtml}
      <div class="product-rating"><span class="stars">${p.rating}</span><span class="rating-count">${p.count}</span></div>
      <div class="product-footer">${priceHtml}${ctaHtml}</div>
    </div>
  </a>`;
};

export const Grid = {
  name: 'Grid (6 prodotti)',
  render: () => `${css}
<style>
  .product-card.is-out .product-img-wrapper { opacity: 0.55; }
  .product-card.is-out .product-name { color: var(--color-content-disabled); }
</style>
<div style="padding:32px;">
  <div style="margin-bottom:20px;display:flex;align-items:baseline;gap:12px;">
    <h2 style="font-family:var(--font-display);font-size:22px;font-weight:600;color:var(--color-content-primary);margin:0;">Tutti i prodotti</h2>
    <span style="font-family:var(--font-ui);font-size:11px;color:var(--color-content-secondary);">48 trovati</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:960px;">
    ${gridItems.map(renderGridCard).join('')}
  </div>
</div>`,
};

/* ─── Story: List Row ────────────────────────────────────────────── */

const listItems = [
  { icon: '📚', cat: 'Libri', name: 'Manuale del Capo Scout 2024', rating: '★★★★★', count: '(42)', price: '€24,90', badge: null, out: false },
  { icon: '🎭', cat: 'Gadget', name: 'Foulard Gruppo Personalizzato', rating: '★★★★★', count: '(73)', oldPrice: '€12,00', salePrice: '€9,60', badge: 'sale', badgeLabel: '−20%', out: false },
  { icon: '⛺', cat: 'Attrezzatura', name: 'Zaino Alpino 65L — Ed. Limitata', rating: '★★★★★', count: '(56)', price: '€210,00', badge: 'out', badgeLabel: 'Esaurito', out: true },
  { icon: '🌱', cat: 'Cosmetica', name: 'Shampoo Solido Biologico 60g', rating: '★★★★★', count: '(29)', price: '€8,90', badge: 'eco', badgeLabel: 'Eco ✓', eco: true, out: false },
];

const renderListRow = (p) => {
  const badgeHtml = p.badge
    ? `<span style="font-family:var(--font-ui);font-size:10px;font-weight:500;letter-spacing:.05em;padding:2px 8px;border-radius:20px;${
        p.badge === 'sale' ? 'background:#FDECEA;color:#C62828;border:1px solid #FBCFCF;' :
        p.badge === 'out'  ? 'background:var(--color-surface-deep);color:var(--color-content-disabled);' :
        p.badge === 'eco'  ? 'background:var(--color-greenmeter-badge-bg,#D1FAE5);color:var(--color-greenmeter-badge-text,#065F46);' :
        'background:var(--color-surface-inverse);color:#fff;'
      }">${p.badgeLabel}</span>`
    : '';
  const priceHtml = p.salePrice
    ? `<div><span style="font-family:var(--font-ui);font-size:11px;color:var(--color-content-disabled);text-decoration:line-through;margin-right:4px;">${p.oldPrice}</span><span style="font-family:var(--font-ui);font-size:15px;font-weight:500;color:#C62828;">${p.salePrice}</span></div>`
    : `<span style="font-family:var(--font-ui);font-size:15px;font-weight:500;color:${p.out ? 'var(--color-content-disabled)' : 'var(--color-content-primary)'};">${p.price}</span>`;
  const ctaHtml = p.out
    ? `<button class="add-to-cart-btn disabled" disabled>Esaurito</button>`
    : `<button class="add-to-cart-btn">+ Carrello</button>`;

  return `
  <a class="product-row">
    <div class="product-row-thumb">${p.icon}</div>
    <div class="product-row-body">
      <div class="product-row-name">${p.name}</div>
      <div class="product-row-meta">
        <span style="font-family:var(--font-ui);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-content-secondary);">${p.cat}</span>
        <span class="stars" style="font-size:11px;">${p.rating}</span>
        <span style="font-size:11px;color:var(--color-content-secondary);">${p.count}</span>
        ${badgeHtml}
      </div>
    </div>
    <div class="product-row-aside">
      ${priceHtml}
      ${ctaHtml}
    </div>
  </a>`;
};

export const ListRow = {
  name: 'List row (vista lista)',
  render: () => `${css}
<div style="padding:32px;max-width:760px;">
  <p style="font-family:var(--font-ui);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-content-secondary);margin:0 0 16px;">Product Card — Vista Lista</p>
  <div style="display:flex;flex-direction:column;gap:10px;">
    ${listItems.map(renderListRow).join('')}
  </div>
</div>`,
};
