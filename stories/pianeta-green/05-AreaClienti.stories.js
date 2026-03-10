import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.Green / 05 Area Clienti',
};

export const Step1Login = () => templateStory({
  src: 'pg-login.html',
  label: '🟢 Done 1 — Login / Registrazione',
  brand: 'pianeta-green',
  state: 'DONE',
});
Step1Login.storyName = '🟢 1 — Login / Registrazione';

export const Step2Onboarding = () => templateStory({
  src: 'pg-onboarding.html',
  label: '🟢 Done 2 — Onboarding (Metodo + Contratto + Firma)',
  brand: 'pianeta-green',
  state: 'DONE',
});
Step2Onboarding.storyName = '🟢 2 — Onboarding (Metodo + Contratto + Firma)';

export const Step3Payment = () => templateStory({
  src: 'pg-payment.html',
  label: '🟢 Done 3 — Pagamento Acconto (Stripe)',
  brand: 'pianeta-green',
  state: 'DONE',
});
Step3Payment.storyName = '🟢 3 — Pagamento Acconto (Stripe)';

export const Step4Firma = () => templateStory({
  src: 'pg-firma.html',
  label: '🟢 Done 4 — Firma Digitale',
  brand: 'pianeta-green',
  state: 'DONE',
});
Step4Firma.storyName = '🟢 4 — Firma Digitale';
