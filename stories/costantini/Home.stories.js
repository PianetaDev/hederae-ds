import { templateStory } from '../_template.js';

export default {
  title: 'Sito Costantini/Homepage',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Landing page — Barbara Costantini Studio SRLS.**

Hero istituzionale con claim "Conservare la materia, restituire il tempo", 3 lavori in evidenza con case-study card, fascia statement su fondo scuro.

Profil A (Vetrina) — tema chiaro, palette warm/earthy, tipografia Cormorant Garamond + DM Sans.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'costantini/costantini-home.html', label: 'Homepage Costantini', brand: 'costantini', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'costantini/costantini-home.html', label: 'Homepage Costantini', brand: 'costantini', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'costantini/costantini-home.html', label: 'Homepage Costantini', brand: 'costantini', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
