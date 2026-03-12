import { templateStory } from '../_template.js';

export default {
  title: 'Sito Costantini/Approccio',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Approccio — Principi, metodo e competenze.**

4 principi con layout numerato (colonna 200px + contenuto): minimo intervento, leggibilità, documentazione, dialogo istituzionale.

Metodo: 4 card fase (Diagnostica, Progetto, Intervento, Consegna). Competenze su fondo inverse con griglia a 2 colonne. Sezione committenti con tag grid.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'costantini/costantini-approccio.html', label: 'Approccio', brand: 'costantini', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'costantini/costantini-approccio.html', label: 'Approccio', brand: 'costantini', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'costantini/costantini-approccio.html', label: 'Approccio', brand: 'costantini', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
