import { templateStory } from '../_template.js';

export default {
  title: 'Sito Susdef/Homepage',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Landing page istituzionale Susdef con Floating Prompt (Gen UI).**

Hero dark con statistiche, griglia 8 settori tematici colorati, ultimi documenti, CTA newsletter.

### Floating Prompt — pattern Gen UI
Il prompt AI fluttua sopra la pagina come overlay fisso (ispirato a Brunello Cucinelli AI):

- **Espanso** → glass card centrata sull'hero, con rotazione automatica dei prompt suggeriti, attach file, link modal
- **Collassato** → pill bottom-center, riappare al click o tornando in cima alla pagina
- **Auto-collapse** → si chiude automaticamente quando l'utente scrolla oltre il 55% dell'hero

Le storie **PromptEspanso** e **PromptCollassato** mostrano i due stati isolati.
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'susdef-home.html', label: 'Homepage Susdef', brand: 'susdef', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ src: 'susdef-home.html', label: 'Homepage Susdef', brand: 'susdef', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ src: 'susdef-home.html', label: 'Homepage Susdef', brand: 'susdef', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};

export const PromptEspanso = {
  name: 'Floating Prompt · Espanso',
  render: () => {
    const wrapper = templateStory({
      src: 'susdef-home.html',
      label: 'Homepage · Prompt espanso',
      brand: 'susdef',
      state: 'Gen UI — Prompt aperto',
    });
    // Ensure the card is visible (default state — no action needed)
    // Adding a short delay to let the rotating prompts start
    const iframe = wrapper.querySelector('iframe');
    iframe.addEventListener('load', () => {
      try {
        const win = iframe.contentWindow;
        // Make sure prompt is in expanded state (default)
        if (win.expandPrompt) win.expandPrompt();
        // Focus the textarea for clarity
        setTimeout(() => {
          const ta = win.document.getElementById('prompt-input');
          if (ta) ta.placeholder = 'Es. "Mostrami i decreti sull\'economia circolare degli ultimi 3 anni"';
        }, 600);
      } catch (e) { /* cross-origin guard */ }
    });
    return wrapper;
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story: 'Stato espanso: la glass card fluttua centrata sull\'hero. Rotating prompts attivi, textarea focalizzata, suggestion chips visibili.',
      },
    },
  },
};

export const PromptCollassato = {
  name: 'Floating Prompt · Collassato (pill)',
  render: () => {
    const wrapper = templateStory({
      src: 'susdef-home.html',
      label: 'Homepage · Prompt collassato',
      brand: 'susdef',
      state: 'Gen UI — Pill visibile',
    });
    const iframe = wrapper.querySelector('iframe');
    iframe.addEventListener('load', () => {
      try {
        const win = iframe.contentWindow;
        // Trigger collapsed state after a brief moment
        setTimeout(() => {
          if (win.collapsePrompt) win.collapsePrompt();
        }, 400);
      } catch (e) { /* cross-origin guard */ }
    });
    return wrapper;
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story: 'Stato collassato: la card sparisce, appare la pill bottom-center. Cliccare la pill riesegue `expandPrompt()` e ripristina la card.',
      },
    },
  },
};
