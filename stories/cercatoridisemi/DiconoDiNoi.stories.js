import { templateStory } from '../_template.js';

export default {
  title: 'Sito Cercatori di Semi/Dicono di Noi',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Dicono di Noi — Rassegna stampa e recensioni.**

3 press card orizzontali (Terra Nuova, BeLeaf, Gambero Rosso) con immagine, source badge, titolo, excerpt, link. Griglia 3×2 review card con stelle, testo, autore, provenienza.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-dicono-di-noi.html', label: 'Dicono di Noi', brand: 'pianeta-green', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-dicono-di-noi.html', label: 'Dicono di Noi', brand: 'pianeta-green', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'cercatoridisemi/cercatoridisemi-dicono-di-noi.html', label: 'Dicono di Noi', brand: 'pianeta-green', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
