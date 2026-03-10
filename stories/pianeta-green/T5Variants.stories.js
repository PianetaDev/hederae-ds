/**
 * T5 Microsite Variants — Hederae DS v0.3.3
 *
 * Il prodotto T5 è il livello base di pianeta.green:
 * hosting green + microsite (landing) — tier di ingresso.
 *
 * Varianti disponibili:
 *   - T5 Landing    → La SaaS landing page di pianeta.green (showcase prodotto)
 *   - T5 Influencer → Microsite per influencer/consulente verde (personal brand)
 *   - T5 Produttore → Microsite per produttore locale / azienda agricola
 *
 * Ogni variante supporta 3 temi via URL param ?theme=
 * Storybook carica i template via iframe da /page-templates/
 */

import { templateStory } from '../_template.js';

// ─── T5 INFLUENCER VERDE ────────────────────────────────────────────────────

export default {
  title: '🌿 Pianeta.green / T5 — Microsite Influencer Verde',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**T5 Influencer Verde** — Microsite per consulenti ambientali e content creator green.

Incluso nel piano T5 pianeta.green (hosting green + microsite).

**Sezioni:** Hero con stats reach · Chi sono + certificazioni · Dati audience · Servizi (4 card) · Contenuti recenti · Collaborazioni + case studies · Testimonianze · Form contatti

**Temi:** \`verde-chiaro\` · \`verde-scuro\` · \`hedera\`

**SEO/AI-SEO:** Schema.org \`Person\` + \`OfferCatalog\`, meta \`ai-description\`, headings semantici, \`<article>\` per ogni servizio.
        `.trim(),
      },
    },
  },
};

export const InfluencerVerdeCiaro = {
  name: 'Influencer · verde-chiaro',
  render: () => templateStory({
    src: 't5-influencer.html?theme=verde-chiaro',
    label: 'T5 Influencer — verde-chiaro',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};

export const InfluencerVerdescuro = {
  name: 'Influencer · verde-scuro (dark)',
  render: () => templateStory({
    src: 't5-influencer.html?theme=verde-scuro',
    label: 'T5 Influencer — verde-scuro',
    brand: 'pianeta-green',
    state: 'Dark',
  }),
};

export const InfluencerHedera = {
  name: 'Influencer · hedera',
  render: () => templateStory({
    src: 't5-influencer.html?theme=hedera',
    label: 'T5 Influencer — hedera',
    brand: 'pianeta-green',
    state: 'Hedera',
  }),
};
