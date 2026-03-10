/**
 * T5 Microsite — Produttore Locale · Hederae DS v0.3.4
 *
 * Microsite per aziende agricole, produttori locali e artigiani alimentari.
 * Brand entries: t5-terra (default, Lora serif) · t5-verde
 * Tokens: css/themes/pianeta-green-t5.css
 */

import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.green / T5 — Microsite Produttore Locale',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**T5 Produttore Locale** — Microsite vetrina per aziende agricole e produttori locali.

Incluso nel piano T5 pianeta.green (hosting green + microsite).

**Sezioni:** Hero + GreenMeter score card · Strip certificazioni · Chi siamo + timeline · Processo produttivo 4-step · Catalogo prodotti 6-card · GreenMeter breakdown · Dove siamo / mercati · Box abbonamento

**Brand:** \`t5-terra\` (earthy ocra + verde olivastro, Lora serif, default) · \`t5-verde\` (verde-chiaro)

**Token vocab:** Hederae DS · css/themes/pianeta-green-t5.css

**SEO/AI-SEO:** Schema.org LocalBusiness + Farm, GeoCoordinates, openingHoursSpecification, OfferCatalog con Product.
        `.trim(),
      },
    },
  },
};

export const ProduttoreTerra = {
  name: 'Produttore · t5-terra (earthy, default)',
  render: () => templateStory({
    src: 't5-produttore.html',
    label: 'T5 Produttore — t5-terra',
    brand: 'pianeta-green',
    state: 'Terra',
  }),
};

export const ProduttoreVerde = {
  name: 'Produttore · t5-verde (chiaro)',
  render: () => templateStory({
    src: 't5-produttore.html?brand=t5-verde',
    label: 'T5 Produttore — t5-verde',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};
