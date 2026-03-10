/**
 * T5 Microsite — Influencer Verde · Hederae DS v0.3.4
 *
 * Microsite per consulenti ambientali e content creator green.
 * Brand entries: t5-verde (default) · t5-verde-scuro
 * Tokens: css/themes/pianeta-green-t5.css
 */

import { templateStory } from '../_template.js';

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

**Brand:** \`t5-verde\` (chiaro, default) · \`t5-verde-scuro\` (dark) — commutabili via switcher in-page

**Token vocab:** Hederae DS · css/themes/pianeta-green-t5.css

**SEO/AI-SEO:** Schema.org Person + OfferCatalog, meta ai-description.
        `.trim(),
      },
    },
  },
};

export const InfluencerVerde = {
  name: 'Influencer · t5-verde (chiaro, default)',
  render: () => templateStory({
    src: 't5-influencer.html',
    label: 'T5 Influencer — t5-verde',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};

export const InfluencerVerdescuro = {
  name: 'Influencer · t5-verde-scuro (dark)',
  render: () => templateStory({
    src: 't5-influencer.html?brand=t5-verde-scuro',
    label: 'T5 Influencer — t5-verde-scuro',
    brand: 'pianeta-green',
    state: 'Dark',
  }),
};
