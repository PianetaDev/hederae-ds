import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/SERP Ricerca',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina risultati ricerca globale multi-tipo. Tab per tipo (Tutti, Persone, News, Documenti, Procedure, Eventi), sidebar filtri (periodo, direzione, tipo), risultati misti con badge tipo colorati. Componenti: People Card, Doc Card, Filter Sidebar.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-serp.html', label: 'SERP Ricerca', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
