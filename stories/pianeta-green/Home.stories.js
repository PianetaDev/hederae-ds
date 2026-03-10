import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.green/Home',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Landing page principale Pianeta.green. Struttura: Header dark, Hero con stats, features strip, product cards (GreenMeter highlight), piani hosting 4-col, testimonial, CTA banner, footer. Brand: Plus Jakarta Sans + Inter, emerald green #1F8A5C, accent #5BD48A.',
      },
    },
  },
};

export const Default = {
  name: 'Home — Landing',
  render: () => templateStory({
    src: 'pianeta-green-home.html',
    label: 'Pianeta.green — Home',
    brand: 'pianeta-green',
  }),
};
