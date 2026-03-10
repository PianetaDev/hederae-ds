import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Pagina Generica',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Template flessibile per pagine contenuto generico (carriera, FAQ, guide). Layout 25/75 con ToC sticky + contenuto. Componenti: Table of Contents, Career Path Card, Job Listing, Accordion FAQ, Feedback Banner, Related Pages. Esempio: Sviluppo Carriera.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-generica.html', label: 'Pagina Generica', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
