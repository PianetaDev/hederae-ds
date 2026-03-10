import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.green / Shop/Carrello',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Carrello con tabella prodotti, aggiornamento quantità, codice sconto (+ stato applicato), riepilogo ordine sticky, sezione cross-sell. Stato carrello vuoto con CTA al catalogo.',
      },
    },
  },
};

export const CarrelloPieno = {
  name: 'Carrello con prodotti',
  render: () => templateStory({ src: 'shop-carrello.html', label: 'Carrello', brand: 'pianeta-green', state: '3 prodotti' }),
};

export const CarrelloVuoto = {
  name: 'Carrello vuoto',
  render: () => templateStory({ src: 'shop-carrello.html', label: 'Carrello', brand: 'pianeta-green', state: 'Vuoto' }),
};
