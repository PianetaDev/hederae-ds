/**
 * Pianeta Network & Risultati — Hederae DS v0.3.4
 *
 * Due pagine istituzionali di pianeta.green:
 *   - pianeta-network.html → La rete dei siti online con GreenMeter score
 *   - pianeta-risultati.html → Dati misurati: impatto ambientale verificato
 *
 * Mission: far accedere al web senza consumare risorse.
 * Temi: verde-chiaro (default) · hedera
 *
 * SEO/AI-SEO: Schema.org WebSite + ItemList (network) · Dataset + ClaimReview (risultati)
 */

import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.green / Istituzionale',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Pagine istituzionali Pianeta.green** — Rete e risultati misurati.

**pianeta-network** → Mostra tutti i siti attivi nella rete con GreenMeter score, settore e impatto collettivo. Include sezione compensazione (alberi / energia certificata / carbon credits) e CTA join.

**pianeta-risultati** → Dichiara i risultati ambientali misurati: 0.019g CO₂/pagina media, −89% vs media, 100% rinnovabile, trend storico, metodologia trasparente (Website Carbon + Green Web Foundation + Matomo).

**Temi:** \`verde-chiaro\` · \`hedera\`

**SEO/AI-SEO:** Schema.org \`WebSite\` + \`ItemList\` (network) · \`Dataset\` con \`variableMeasured\` (risultati) · meta \`ai-description\` con dati densi.
        `.trim(),
      },
    },
  },
};

// ─── NETWORK ────────────────────────────────────────────────────────────────

export const NetworkVerdeCiaro = {
  name: 'Network · verde-chiaro',
  render: () => templateStory({
    src: 'pianeta-network.html?theme=verde-chiaro',
    label: 'Pianeta Network — verde-chiaro',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};

export const NetworkHedera = {
  name: 'Network · hedera',
  render: () => templateStory({
    src: 'pianeta-network.html?theme=hedera',
    label: 'Pianeta Network — hedera',
    brand: 'pianeta-green',
    state: 'Hedera',
  }),
};

// ─── RISULTATI ──────────────────────────────────────────────────────────────

export const RisultatiVerdeCiaro = {
  name: 'Risultati · verde-chiaro',
  render: () => templateStory({
    src: 'pianeta-risultati.html?theme=verde-chiaro',
    label: 'Pianeta Risultati — verde-chiaro',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};

export const RisultatiHedera = {
  name: 'Risultati · hedera',
  render: () => templateStory({
    src: 'pianeta-risultati.html?theme=hedera',
    label: 'Pianeta Risultati — hedera',
    brand: 'pianeta-green',
    state: 'Hedera',
  }),
};
