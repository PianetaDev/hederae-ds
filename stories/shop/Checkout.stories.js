import { templateStory } from '../_template.js';

export default {
  title: 'Shop (generico)/Checkout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Checkout multi-step (indirizzo → spedizione → pagamento → conferma). 7 metodi di pagamento italiani: Carta, PayPal, Bonifico, Carta del Docente, 18app/Carta della Cultura, Satispay, Contrassegno. FAQ inline al passo pagamento. Pagina di conferma ordine con download digitale.',
      },
    },
  },
};

export const Step1Indirizzo = {
  name: 'Step 1 — Indirizzo',
  render: () => templateStory({ src: 'shop-checkout.html', label: 'Checkout', brand: 'generic', state: 'Step 1: Indirizzo' }),
};

export const Step2Spedizione = {
  name: 'Step 2 — Spedizione',
  render: () => templateStory({ src: 'shop-checkout.html', label: 'Checkout', brand: 'generic', state: 'Step 2: Spedizione' }),
};

export const Step3Pagamento = {
  name: 'Step 3 — Pagamento',
  render: () => templateStory({ src: 'shop-checkout.html', label: 'Checkout', brand: 'generic', state: 'Step 3: Pagamento' }),
};

export const ConfermaOrdine = {
  name: 'Conferma ordine',
  render: () => templateStory({ src: 'shop-checkout.html', label: 'Checkout', brand: 'generic', state: 'Conferma ordine' }),
};
