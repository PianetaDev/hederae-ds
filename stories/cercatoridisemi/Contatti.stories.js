import { templateStory } from '../_template.js';

export default {
  title: 'Sito Cercatori di Semi/Contatti',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Contatti — Form e informazioni di Cercatori di Semi.**

Layout a 2 colonne: info card (telefono, email, sede, coltivazioni, orari) + form contatto con select argomento. Sezione mappa con 2 sedi (Pomezia + Ardea).
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-contatti.html', label: 'Contatti', brand: 'pianeta-green', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-contatti.html', label: 'Contatti', brand: 'pianeta-green', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-contatti.html', label: 'Contatti', brand: 'pianeta-green', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
