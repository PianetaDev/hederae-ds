import { templateStory } from '../_template.js';

export default {
  title: 'Sito Cercatori di Semi/Shop',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Shop — Catalogo sementi di Cercatori di Semi.**

5 category card, filter bar con chip, griglia 4×2 product card con badge sconto, pulsante aggiungi al carrello, info box shop (P.IVA), banner sovesci 2 colonne. CTA per semi gratuiti.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-shop.html', label: 'Shop', brand: 'pianeta-green', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-shop.html', label: 'Shop', brand: 'pianeta-green', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-shop.html', label: 'Shop', brand: 'pianeta-green', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
