import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Homepage',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Homepage intranet Sisal Digital Workspace. Header con mega-menu, hero carousel, quick links, avvisi, contenuti in evidenza, KPI Market Analysis, media gallery.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-home.html', label: 'Intranet Home', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
