import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Dettaglio Evento',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina dettaglio evento aziendale. Hero con data badge, info bar (data, luogo, capienza), layout 2 colonne con programma/relatori/galleria + sidebar iscrizione. Sezione commenti. Area color: Eventi (#F9A825).' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-evento.html', label: 'Dettaglio Evento', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
