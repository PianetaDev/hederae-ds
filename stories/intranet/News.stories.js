import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/News Dettaglio',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina dettaglio articolo/news dell\'intranet Sisal. Layout a 2 colonne: contenuto editoriale + sidebar (autori, correlate, più letti). Include commenti, feedback pagina, tag, share social.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-news.html', label: 'News: Sisal Play Cup', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
