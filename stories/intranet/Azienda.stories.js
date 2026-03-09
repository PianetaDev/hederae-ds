import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Sezione Aziendale',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Sezione aziendale istituzionale con tab (Chi Siamo, Valori, Organizzazione, Direzioni, Codice Etico). Key numbers, griglia direzioni, timeline storia aziendale. Area color: Azienda (#E65100).' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-azienda.html', label: 'Sezione Aziendale', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
