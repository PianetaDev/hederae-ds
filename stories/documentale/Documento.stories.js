import { templateStory } from '../_template.js';

export default {
  title: 'Documentale (DocumentAI)/Scheda documento',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina di dettaglio documento con metadati, anteprima, download e documenti correlati. Brand Susdef.' } },
  },
};

export const Default = {
  name: 'Scheda documento',
  render: () => templateStory({ src: 'documento.html', label: 'Scheda documento', brand: 'susdef' }),
};
