/**
 * T5 Impresa Green B2B — Hederae DS v0.3.4
 *
 * Microsite per imprese green B2B: installatori fotovoltaici,
 * aziende di efficienza energetica, consulenti ESG.
 * Incluso nel piano T5 pianeta.green (hosting green + microsite).
 *
 * Sezioni: Hero + portfolio impianti live · Partner/cert strip
 *          Servizi 6-card · Come lavoriamo 3-step · Impatto + GreenMeter
 *          Casi studio 3-card · Team · Form preventivo gratuito
 *
 * Nuovo tema "energia": dark navy #0B1628 + electric blue #1D4ED8 + solar yellow #F59E0B
 * Temi: energia · verde-chiaro · hedera
 *
 * SEO/AI-SEO: Schema.org Organization + OfferCatalog (5 Service),
 *             meta ai-description, numberOfEmployees, areaServed, heading semantici.
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

**Sezioni:** Hero (KPI bar + portafoglio impianti live) · Partner & certificazioni · 6 servizi con incentivi · Processo 3-step con tempi · Impatto numerico + GreenMeter breakdown · 3 casi studio con ROI · Team 4-card · Form preventivo gratuito

**Nuovo tema \`energia\`:** navy \`#0B1628\` + electric blue \`#1D4ED8\` + solar yellow \`#F59E0B\` — differenziato per il target industriale/B2B

**SEO/AI-SEO:** Schema.org \`Organization\` + \`OfferCatalog\` (5 servizi), \`areaServed\`, \`numberOfEmployees\`, meta \`ai-description\`.
        `.trim(),
      },
    },
  },
};

export const ImpresaEnergia = {
  name: 'Impresa · energia (dark navy + solar, default)',
  render: () => templateStory({
    src: 't5-impresa.html?theme=energia',
    label: 'T5 Impresa — energia',
    brand: 'pianeta-green',
    state: 'Energia',
  }),
};

export const ImpresaVerdeCiaro = {
  name: 'Impresa · verde-chiaro',
  render: () => templateStory({
    src: 't5-impresa.html?theme=verde-chiaro',
    label: 'T5 Impresa — verde-chiaro',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};

export const ImpresaHedera = {
  name: 'Impresa · hedera',
  render: () => templateStory({
    src: 't5-impresa.html?theme=hedera',
    label: 'T5 Impresa — hedera',
    brand: 'pianeta-green',
    state: 'Hedera',
  }),
};
