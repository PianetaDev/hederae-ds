import { templateStory } from '../_template.js';

export default {
  title: 'Documentale (DocumentAI)/Errori e redirect',
  parameters: { layout: 'fullscreen' },
};

export const Errori = {
  name: 'Pagine errore (404 / 403 / 500 / offline)',
  render: () => templateStory({ src: 'errori.html', label: 'Errori e stati di sistema', brand: 'susdef' }),
};

export const Reindirizzamento = {
  name: 'Pagina di reindirizzamento',
  render: () => templateStory({ src: 'reindirizzamento.html', label: 'Reindirizzamento automatico', brand: 'susdef' }),
};

export const Feedback = {
  name: 'Feedback utente',
  render: () => templateStory({ src: 'feedback.html', label: 'Form feedback multi-step', brand: 'susdef' }),
};
