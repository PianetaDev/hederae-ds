import { templateStory } from '../_template.js';

export default {
  title: 'Sito Cercatori di Semi/Homepage',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Homepage — Cercatori di Semi Terranatura.**

Landing page dell'associazione non profit a difesa dell'agrobiodiversità. Hero istituzionale dark con claim, stats row, griglia 4 mission card, about band, anteprima shop con product card, guide preview, CTA banner.

Profilo Pianeta.green — palette verde/bianco, tipografia Plus Jakarta Sans + Inter.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-home.html', label: 'Homepage', brand: 'pianeta-green', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-home.html', label: 'Homepage', brand: 'pianeta-green', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-home.html', label: 'Homepage', brand: 'pianeta-green', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
