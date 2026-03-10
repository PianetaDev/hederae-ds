/**
 * T5 Microsite — Impresa Green B2B · Hederae DS v0.3.4
 *
 * Microsite per imprese green B2B: installatori FV, efficienza energetica, consulenti ESG.
 * Brand entries: t5-energia (default) · t5-verde
 * Tokens: css/themes/pianeta-green-t5.css
 */

import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.green / T5 — Microsite Impresa Green B2B',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**T5 Impresa Green B2B** — Microsite per imprese green che vendono a clienti business.

Incluso nel piano T5 pianeta.green (hosting green + microsite).

**Target:** Installatori fotovoltaici · Aziende efficienza energetica · Consulenti ESG · Imprese economia circolare

**Sezioni:** Hero (KPI bar + portafoglio impianti live) · Partner & certificazioni · 6 servizi con incentivi · Processo 3-step · Impatto numerico + GreenMeter breakdown · 3 casi studio con ROI · Team 4-card · Form preventivo

**Brand:** \`t5-energia\` (navy + electric blue + solar yellow, default) · \`t5-verde\` (verde-chiaro)

**Token vocab:** Hederae DS · css/themes/pianeta-green-t5.css

**SEO/AI-SEO:** Schema.org Organization + OfferCatalog (5 servizi), areaServed, numberOfEmployees.
        `.trim(),
      },
    },
  },
};

export const ImpresaEnergia = {
  name: 'Impresa · t5-energia (navy + solar, default)',
  render: () => templateStory({
    src: 't5-impresa.html',
    label: 'T5 Impresa — t5-energia',
    brand: 'pianeta-green',
    state: 'Energia',
  }),
};

export const ImpresaVerde = {
  name: 'Impresa · t5-verde (chiaro)',
  render: () => templateStory({
    src: 't5-impresa.html?brand=t5-verde',
    label: 'T5 Impresa — t5-verde',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};
