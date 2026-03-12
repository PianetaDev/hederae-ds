import { templateStory } from '../_template.js';

export default {
  title: 'Sito Costantini/Lavori',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Lavori — Portfolio di restauri completati.**

3 case study completi: Madonna con Bambino (olio su tela), Cappella di San Giorgio (affresco), Crocifisso ligneo policromo (scultura).

Ogni case study: blocco before/after con label, corpo a doppia colonna (descrizione opera + intervento), griglia dettagli tecnici (committente, direzione lavori, durata, tecnica, dimensioni, restauratrici), riga immagini di dettaglio.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'costantini/costantini-lavori.html', label: 'Lavori', brand: 'costantini', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'costantini/costantini-lavori.html', label: 'Lavori', brand: 'costantini', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'costantini/costantini-lavori.html', label: 'Lavori', brand: 'costantini', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
