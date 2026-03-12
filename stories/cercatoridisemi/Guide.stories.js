import { templateStory } from '../_template.js';

export default {
  title: 'Sito Cercatori di Semi/Guide Gratuite',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Guide Gratuite — Risorse scaricabili di Cercatori di Semi.**

6 guide card in griglia 3 colonne con cover, tag categoria, titolo, descrizione, meta (pagine/edizione), pulsante download. Info band 3 colonne. CTA banner.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-guide.html', label: 'Guide Gratuite', brand: 'pianeta-green', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-guide.html', label: 'Guide Gratuite', brand: 'pianeta-green', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-guide.html', label: 'Guide Gratuite', brand: 'pianeta-green', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
