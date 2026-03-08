import { templateStory } from '../_template.js';

export default {
  title: 'Fundraising AGESCI/Pagina campagna',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Pagina di singola campagna fundraising. Layout 2 colonne con contenuto editoriale + widget donazione sticky, progress bar, condivisione social, altre campagne correlate e footer AGESCI completo.',
      },
    },
  },
};

export const Default = {
  name: 'Campagna fundraising',
  render: () => templateStory({ src: 'campagna.html', label: 'Pagina Campagna', brand: 'agesci' }),
};
