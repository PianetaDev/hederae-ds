import { templateStory } from '../_template.js';

export default {
  title: 'Shop (generico)/Catalogo prodotti',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Pagina listing prodotti con sidebar filtri (categoria, prezzo, tag, disponibilità, rating), chip filtri attivi con rimozione, griglia prodotti con badge, paginazione e stato vuoto.',
      },
    },
  },
};

export const ConRisultati = {
  name: 'Con prodotti',
  render: () => templateStory({ src: 'shop-catalogo.html', label: 'Catalogo prodotti', brand: 'generic', state: 'Con risultati' }),
};

export const NessunRisultato = {
  name: 'Nessun risultato',
  render: () => templateStory({ src: 'shop-catalogo.html', label: 'Catalogo prodotti', brand: 'generic', state: 'Nessun risultato' }),
};
