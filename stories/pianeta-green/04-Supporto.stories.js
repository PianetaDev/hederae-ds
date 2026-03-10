import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.Green / 04 Supporto',
};

export const FAQ = () => templateStory({
  src: 'pg-faq.html',
  label: '🟢 Done FAQ',
  brand: 'pianeta-green',
  state: 'DONE',
});
FAQ.storyName = '🟢 Done FAQ';
export const Contatti = () => templateStory({
  src: 'pg-contatti.html',
  label: '🟡 Review Contatti',
  brand: 'pianeta-green',
  state: 'REVIEW',
});
Contatti.storyName = '🟡 Review Contatti';
export const PrivacyPolicy = () => templateStory({
  src: 'pg-privacy.html',
  label: '🟡 Review Privacy Policy',
  brand: 'pianeta-green',
  state: 'REVIEW',
});
PrivacyPolicy.storyName = '🟡 Review Privacy Policy';
export const TerminiServizio = () => templateStory({
  src: 'pg-termini.html',
  label: '🟡 Review Termini Servizio',
  brand: 'pianeta-green',
  state: 'REVIEW',
});
TerminiServizio.storyName = '🟡 Review Termini Servizio';
