import { templateStory } from '../_template.js';

export default {
  title: 'Sito Cercatori di Semi/Cosa Facciamo',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Cosa Facciamo — Progetti e attività di Cercatori di Semi.**

Pagina istituzionale con stats row, griglia 4 project card (Banca Semi, Distribuzione, Progetto Melissa, Scuole), feature block alternati con checklist (Banca Semi, Melissa, Sovesci), CTA banner.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-cosa-facciamo.html', label: 'Cosa Facciamo', brand: 'pianeta-green', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-cosa-facciamo.html', label: 'Cosa Facciamo', brand: 'pianeta-green', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-cosa-facciamo.html', label: 'Cosa Facciamo', brand: 'pianeta-green', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
