import { templateStory } from '../_template.js';

export default {
  title: 'Shop (generico)/Scheda prodotto',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Dettaglio prodotto con galleria immagini, selettori variante formato, tab (descrizione / specifiche / recensioni / FAQ), prodotti correlati. Gestione stato esaurito con form notify-me.',
      },
    },
  },
};

export const Disponibile = {
  name: 'Disponibile',
  render: () => templateStory({ src: 'shop-prodotto.html', label: 'Scheda prodotto', brand: 'generic', state: 'Disponibile' }),
};

export const Esaurito = {
  name: 'Esaurito + notify me',
  render: () => templateStory({ src: 'shop-prodotto.html', label: 'Scheda prodotto', brand: 'generic', state: 'Esaurito' }),
};
