/**
 * T5 Produttore Locale — Hederae DS v0.3.3
 *
 * Microsite per aziende agricole, produttori locali e artigiani alimentari.
 * Incluso nel piano T5 pianeta.green (hosting green + microsite).
 *
 * Sezioni: Hero + GreenMeter card · Cert strip · Chi siamo · Processo 4-step
 *          Catalogo prodotti (6 card) · GreenMeter breakdown · Dove siamo · Box abbonamento
 *
 * Tema "terra" (ocra/verde olivastro): nuovo nel DS — warm, earthy, agricolo.
 * Temi: terra · verde-chiaro · hedera
 *
 * SEO/AI-SEO: Schema.org LocalBusiness + Farm + Product, meta ai-description,
 *             GeoCoordinates, openingHoursSpecification, OfferCatalog con 4 Product.
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

**Sezioni:** Hero + GreenMeter score card · Strip certificazioni · Chi siamo + timeline · Processo produttivo 4-step · Catalogo prodotti 6-card (riusa molecule ProductCard) · GreenMeter breakdown dettagliato · Dove siamo / mercati · Box settimanale abbonamento

**Temi:** \`terra\` (nuovo — ocra/verde olivastro, Lora serif) · \`verde-chiaro\` · \`hedera\`

**SEO/AI-SEO:** Schema.org \`LocalBusiness\` + \`Farm\`, \`GeoCoordinates\`, \`openingHoursSpecification\`, \`OfferCatalog\` con \`Product\`, meta \`ai-description\`.
        `.trim(),
      },
    },
  },
};

export const ProduttoreTerra = {
  name: 'Produttore · terra (earthy, default)',
  render: () => templateStory({
    src: 't5-produttore.html?theme=terra',
    label: 'T5 Produttore — terra',
    brand: 'pianeta-green',
    state: 'Terra',
  }),
};

export const ProduttoreVerdeCiaro = {
  name: 'Produttore · verde-chiaro',
  render: () => templateStory({
    src: 't5-produttore.html?theme=verde-chiaro',
    label: 'T5 Produttore — verde-chiaro',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};

export const ProduttoreHedera = {
  name: 'Produttore · hedera',
  render: () => templateStory({
    src: 't5-produttore.html?theme=hedera',
    label: 'T5 Produttore — hedera',
    brand: 'pianeta-green',
    state: 'Hedera',
  }),
};
