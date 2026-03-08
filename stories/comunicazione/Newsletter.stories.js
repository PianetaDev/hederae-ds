import { templateStory } from '../_template.js';

const sectors = [
  { id: 'ecoinnovazione',    name: 'Eco-innovazione',      color: '#FF8C01' },
  { id: 'energiaclima',     name: 'Energia & Clima',       color: '#2792B9' },
  { id: 'economiacircolare',name: 'Economia Circolare',    color: '#7B7EC8' },
  { id: 'mobilita',         name: 'Mobilità Sostenibile',  color: '#CE9B62' },
  { id: 'greencity',        name: 'Green City',            color: '#B9284F' },
  { id: 'agroecologia',     name: 'Agroecologia',          color: '#B08800' },
  { id: 'statigenerali',    name: 'Stati Generali',        color: '#2A8A6A' },
  { id: 'corsiformazione',  name: 'Corsi & Formazione',    color: '#C25490' },
];

export default {
  title: 'Comunicazione/Newsletter',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Template newsletter unico per tutti gli 8 settori tematici Susdef. Struttura condivisa con switcher interattivo: i colori settoriali colorano la barra accent, le pill, i link, i bottoni e i badge.',
      },
    },
  },
};

// One story per sector, all pointing to the same file
export const EcoInnovazione     = { name: 'Eco-innovazione',     render: () => templateStory({ src: 'newsletter.html', label: 'Newsletter — Eco-innovazione',     brand: 'susdef', state: 'Eco-innovazione' })     };
export const EnergiaClima       = { name: 'Energia & Clima',     render: () => templateStory({ src: 'newsletter.html', label: 'Newsletter — Energia & Clima',       brand: 'susdef', state: 'Energia & Clima' })     };
export const EconomiaCircolare  = { name: 'Economia Circolare',  render: () => templateStory({ src: 'newsletter.html', label: 'Newsletter — Economia Circolare',    brand: 'susdef', state: 'Economia Circolare' })  };
export const MobilitaSostenibile= { name: 'Mobilità Sostenibile',render: () => templateStory({ src: 'newsletter.html', label: 'Newsletter — Mobilità Sostenibile', brand: 'susdef', state: 'Mobilità Sostenibile' })};
export const GreenCity          = { name: 'Green City',          render: () => templateStory({ src: 'newsletter.html', label: 'Newsletter — Green City',            brand: 'susdef', state: 'Green City' })          };
export const Agroecologia       = { name: 'Agroecologia',        render: () => templateStory({ src: 'newsletter.html', label: 'Newsletter — Agroecologia',          brand: 'susdef', state: 'Agroecologia' })       };
export const StatiGenerali      = { name: 'Stati Generali',      render: () => templateStory({ src: 'newsletter.html', label: 'Newsletter — Stati Generali',        brand: 'susdef', state: 'Stati Generali' })     };
export const CorsiFormazione    = { name: 'Corsi & Formazione',  render: () => templateStory({ src: 'newsletter.html', label: 'Newsletter — Corsi & Formazione',    brand: 'susdef', state: 'Corsi & Formazione' }) };
