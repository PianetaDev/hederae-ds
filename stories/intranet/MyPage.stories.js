import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/My Page',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Profilo utente (My Page) con hero profilo, tab navigation (Panoramica, Formazione, Documenti, Team, Timbrature), informazioni personali, competenze, gruppi di lavoro, attività recenti, riconoscimenti e quick actions HR.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-mypage.html', label: 'My Page', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
