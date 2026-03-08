import { templateStory } from '../_template.js';

export default {
  title: 'Documentale (DocumentAI)/Feedback',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Componenti feedback inline: toast, banner informativo, conferma azione, rating documento. Brand Susdef.' } },
  },
};

export const Feedback = {
  name: 'Feedback UI',
  render: () => templateStory({ src: 'feedback.html', label: 'Componenti feedback', brand: 'susdef', state: 'Default' }),
};
