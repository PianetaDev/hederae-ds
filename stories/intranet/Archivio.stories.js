import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Archivio Lista',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina archivio con filtri avanzati (periodo, categoria, direzione), chips attivi, toggle vista griglia/lista, griglia news card 3 colonne e paginazione. Componenti: Filter Bar, News Card, Pagination.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-archivio.html', label: 'Archivio Lista', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
