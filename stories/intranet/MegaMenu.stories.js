import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Mega Menu',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Mega Menu overlay con navigazione multilivello a 3-4 livelli. 8 sezioni intranet con colori area dedicati (SGI, Sviluppo, Info Pratiche, Azienda, Formazione, Punti Vendita, Eventi, Documentale). Ricerca integrata e indice A-Z.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-mega-menu.html', label: 'Mega Menu', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
