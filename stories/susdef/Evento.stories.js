import { templateStory } from '../_template.js';

export default {
  title: 'Sito Susdef/Evento Dettaglio',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina dettaglio evento con hero immagine, date circolari, tab giornate/sezioni, layout a due colonne (dettagli+programma+speaker+FAQ a sinistra, partecipa+mappa+eventi correlati a destra), card organizzatore, CTA banner e footer completo.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'susdef-evento.html', label: 'Evento Dettaglio', brand: 'susdef', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'susdef-evento.html', label: 'Evento Dettaglio', brand: 'susdef', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'susdef-evento.html', label: 'Evento Dettaglio', brand: 'susdef', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
