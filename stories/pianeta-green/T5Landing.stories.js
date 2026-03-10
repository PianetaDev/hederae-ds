import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.green / T5 Landing — Startup Green',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'Template T5 Landing per startup e organizzazioni green.',
          'Business model: iscrizione a pianeta.green → CMS per siti green + dashboard emissioni (GreenMeter) + raccolta donazioni con analytics.',
          '3 temi disponibili: **rara-dark** (default, dark navy/verde), **rara-light** (light/bianco), **hedera** (pianeta.green standard).',
          'Il tema è commutabile via switcher in-page nella DS meta-nav, oppure tramite `?theme=` URL param.',
          'Contenuto mock — dati fittizi per demo/presentazione.',
        ].join(' '),
      },
    },
  },
};

/* ─── Story: Tema rara-dark (default) ───────────────────────── */
export const RaraDark = {
  name: 'Tema rara-dark (dark green)',
  render: () => templateStory({
    src: 't5-landing.html?theme=rara-dark',
    label: 'T5 Landing — rara-dark',
    brand: 'pianeta-green',
    state: 'Dark',
  }),
};

/* ─── Story: Tema rara-light ─────────────────────────────────── */
export const RaraLight = {
  name: 'Tema rara-light (chiaro)',
  render: () => templateStory({
    src: 't5-landing.html?theme=rara-light',
    label: 'T5 Landing — rara-light',
    brand: 'pianeta-green',
    state: 'Light',
  }),
};

/* ─── Story: Tema hedera ─────────────────────────────────────── */
export const Hedera = {
  name: 'Tema hedera (pianeta.green)',
  render: () => templateStory({
    src: 't5-landing.html?theme=hedera',
    label: 'T5 Landing — hedera',
    brand: 'pianeta-green',
    state: 'Hedera',
  }),
};
