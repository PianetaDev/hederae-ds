import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Pagina Atterraggio',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Landing di sezione con dashboard KPI, quick access grid, contenuti recenti e CTA. Esempio: area Formazione con corsi attivi, ore formazione, certificazioni. Componenti: KPI Widget, Quick Access Card, Event Card.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-atterraggio.html', label: 'Pagina Atterraggio', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
