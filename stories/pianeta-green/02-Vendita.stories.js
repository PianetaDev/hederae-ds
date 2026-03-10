import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.Green / 02 Vendita',
};

export const PianiePrezzi = () => templateStory({
  src: 'pg-pricing.html',
  label: '🔴 WIP Piani e Prezzi',
  brand: 'pianeta-green',
  state: 'WIP',
});
PianiePrezzi.storyName = '🔴 WIP Piani e Prezzi';
export const PDPGreenHosting = () => templateStory({
  src: 'pg-pdp-hosting.html',
  label: '🔴 WIP PDP Green Hosting',
  brand: 'pianeta-green',
  state: 'WIP',
});
PDPGreenHosting.storyName = '🔴 WIP PDP Green Hosting';
export const PDPCMSPlusSito = () => templateStory({
  src: 'pg-pdp-cms-sito.html',
  label: '🔴 WIP PDP CMS + Sito',
  brand: 'pianeta-green',
  state: 'WIP',
});
PDPCMSPlusSito.storyName = '🔴 WIP PDP CMS + Sito';
export const Checkout = () => templateStory({
  src: 'pg-checkout.html',
  label: '🟡 Review Checkout',
  brand: 'pianeta-green',
  state: 'REVIEW',
});
Checkout.storyName = '🟡 Review Checkout';
export const ThankYou = () => templateStory({
  src: 'pg-thankyou.html',
  label: '🟡 Review Thank You',
  brand: 'pianeta-green',
  state: 'REVIEW',
});
ThankYou.storyName = '🟡 Review Thank You';
