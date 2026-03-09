import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Pagina Snodo',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina Snodo (Hub di sezione) per l\'intranet Sisal. Template per sezioni come Info Pratiche, Sviluppo, SGI. Include breadcrumb, hero di sezione, quick access grid, documenti più consultati, avvisi, CTA assistente.' } },
  },
};

export const InfoPratiche = {
  name: 'Info Pratiche',
  render: () => templateStory({ src: 'intranet-hub.html', label: 'Hub: Info Pratiche', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
