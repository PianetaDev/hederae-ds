import { templateStory } from '../_template.js';

export default {
  title: 'Sito Costantini/Lo Studio',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Lo Studio — Team e manifesto di Barbara Costantini Studio SRLS.**

Sezione manifesto con la scelta SRLS. Team: card founder full-width (Barbara) con layout a griglia foto + bio, 3 card collaboratrici in griglia 3 colonne.

Pattern team card con variante \`.founder\` per la direttrice.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'costantini/costantini-studio.html', label: 'Lo Studio', brand: 'costantini', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'costantini/costantini-studio.html', label: 'Lo Studio', brand: 'costantini', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'costantini/costantini-studio.html', label: 'Lo Studio', brand: 'costantini', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};
