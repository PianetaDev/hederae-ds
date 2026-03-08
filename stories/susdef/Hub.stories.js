import { templateStory } from '../_template.js';

export default {
  title: 'Sito Susdef/Hub Settore',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Pagina hub per un settore tematico (es. Energia e Clima). Header colorato settore, sidebar sotto-categorie, filtri, lista documenti con paginazione. Il colore cambia settore per settore via CSS custom property --hub-primary.' } },
  },
};

export const Desktop = {
  name: 'Desktop — Energia e Clima',
  render: () => templateStory({ src: 'susdef-hub.html', label: 'Hub: Energia e Clima', brand: 'susdef', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'susdef-hub.html', label: 'Hub: Energia e Clima', brand: 'susdef', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'susdef-hub.html', label: 'Hub: Energia e Clima', brand: 'susdef', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
