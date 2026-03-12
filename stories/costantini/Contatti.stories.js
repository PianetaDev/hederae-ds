import { templateStory } from '../_template.js';

export default {
  title: 'Sito Costantini/Contatti',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Contatti — Form e informazioni di contatto.**

Layout a 2 colonne: intro + contatti diretti (email, telefono, PEC) a sinistra, form a destra.

Form: nome/cognome, email/telefono, select tipo intervento (restauro dipinto, affresco, scultura…), textarea, checkbox privacy. Sezione sede su fondo warm con placeholder mappa.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'costantini/costantini-contatti.html', label: 'Contatti', brand: 'costantini', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'costantini/costantini-contatti.html', label: 'Contatti', brand: 'costantini', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'costantini/costantini-contatti.html', label: 'Contatti', brand: 'costantini', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
