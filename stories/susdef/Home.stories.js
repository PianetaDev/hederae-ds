import { templateStory } from '../_template.js';

export default {
  title: 'Sito Susdef/Homepage',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Landing page istituzionale Susdef. Hero dark con statistiche, griglia 8 settori tematici colorati, ultimi documenti, search bar, CTA newsletter.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'susdef-home.html', label: 'Homepage Susdef', brand: 'susdef', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'susdef-home.html', label: 'Homepage Susdef', brand: 'susdef', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'susdef-home.html', label: 'Homepage Susdef', brand: 'susdef', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
