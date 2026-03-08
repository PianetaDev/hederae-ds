import { templateStory } from '../_template.js';

export default {
  title: 'Documentale (DocumentAI)/Reindirizzamento',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagine di reindirizzamento: URL cambiata (301), link esterno, permalink ambiguo. Brand Susdef.' } },
  },
};

export const Reindirizzamento = {
  name: 'Reindirizzamento URL',
  render: () => templateStory({ src: 'reindirizzamento.html', label: 'Reindirizzamento', brand: 'susdef', state: 'Default' }),
};
