import { templateStory } from '../_template.js';

export default {
  title: 'Documentale (DocumentAI)/Ricerca',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina risultati di ricerca con filtri sidebar, ordinamento e stati vuoti. Brand Susdef.' } },
  },
};

export const ConRisultati = {
  name: 'Con risultati',
  render: () => templateStory({ src: 'search.html', label: 'Ricerca documenti', brand: 'susdef', state: 'Con risultati' }),
};

export const NessunRisultato = {
  name: 'Nessun risultato',
  render: () => templateStory({ src: 'search.html', label: 'Ricerca documenti', brand: 'susdef', state: 'Nessun risultato' }),
};
