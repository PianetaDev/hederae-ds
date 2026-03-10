import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Documentale',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Documentale aziendale con ricerca avanzata, filtri (tipo, direzione, stato, anno), vista tabella ordinabile con checkbox bulk actions, toggle griglia/lista/tabella. Estende pattern Hederae Documentale (SearchBar, Doc Card). Area color: Documentale (#37474F).' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-documentale.html', label: 'Documentale', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
