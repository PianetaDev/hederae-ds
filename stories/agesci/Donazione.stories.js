import { templateStory } from '../_template.js';

export default {
  title: 'Fundraising AGESCI/Donazione — Dona ora',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Albo Sostenitori AGESCI. Due varianti A/B testate: A con form semplificato (email + frequenza + tiers), B con anagrafica completa, riepilogo donazione e radio button per metodi di pagamento.',
      },
    },
  },
};

export const VarianteA = {
  name: 'Variante A — Form semplificato',
  render: () => templateStory({
    src: 'donazione.html',
    label: 'Pagina Donazione',
    brand: 'agesci',
    state: 'Variante A',
  }),
};

export const VarianteB = {
  name: 'Variante B — Anagrafica + pagamento',
  render: () => templateStory({
    src: 'donazione.html',
    label: 'Pagina Donazione',
    brand: 'agesci',
    state: 'Variante B',
  }),
};
