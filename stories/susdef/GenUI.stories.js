import { templateStory } from '../_template.js';

export default {
  title: 'Sito Susdef/Gen UI · Documenti',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Demo interattiva — Generative UI applicata alla pagina Documenti SUSDEF.**

L'interfaccia classifica la query dell'utente e adatta la struttura dei risultati in 4 layout distinti:

- **Normativa** (decreto, legge, direttiva…) → Vista tabellare con badge tipo atto
- **Dati / trend** (statistiche, report, numeri…) → Card con mini bar-chart inline
- **Casi studio** (progetto, esempio, best practice…) → Card narrative con striscia settoriale
- **Formazione** (corso, webinar, master…) → Card evento con data in evidenza
- **Default** → Griglia documenti con abstract AI contestuale

In homepage: placeholder rotante con prompt generati contestualmente (tendenze, nuovi documenti, scadenze PNRR).
        `.trim(),
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop — Homepage ricerca',
  render: () => templateStory({
    src: 'susdef-genui.html',
    label: 'Gen UI · Documenti',
    brand: 'susdef',
    state: 'Interactive',
  }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const RisultatiNormativa = {
  name: 'Risultati · Vista normativa',
  render: () => {
    const wrapper = templateStory({
      src: 'susdef-genui.html?demo=normativa',
      label: 'Gen UI · Risultati normativa',
      brand: 'susdef',
      state: 'Query: "decreto economia circolare"',
    });

    // Auto-trigger search after iframe loads
    const iframe = wrapper.querySelector('iframe');
    iframe.addEventListener('load', () => {
      try {
        const win = iframe.contentWindow;
        win.document.getElementById('search-input').value = 'decreto economia circolare 2024';
        win.doSearch();
      } catch (e) { /* cross-origin guard */ }
    });

    return wrapper;
  },
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const RisultatiDati = {
  name: 'Risultati · Vista dati',
  render: () => {
    const wrapper = templateStory({
      src: 'susdef-genui.html',
      label: 'Gen UI · Risultati dati',
      brand: 'susdef',
      state: 'Query: "dati riciclo Italia 2024"',
    });

    const iframe = wrapper.querySelector('iframe');
    iframe.addEventListener('load', () => {
      try {
        const win = iframe.contentWindow;
        win.document.getElementById('search-input').value = 'dati riciclo Italia ultimi 10 anni';
        win.doSearch();
      } catch (e) {}
    });

    return wrapper;
  },
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const RisultatiCaseStudy = {
  name: 'Risultati · Vista casi studio',
  render: () => {
    const wrapper = templateStory({
      src: 'susdef-genui.html',
      label: 'Gen UI · Risultati casi studio',
      brand: 'susdef',
      state: 'Query: "caso studio green city"',
    });

    const iframe = wrapper.querySelector('iframe');
    iframe.addEventListener('load', () => {
      try {
        const win = iframe.contentWindow;
        win.document.getElementById('search-input').value = 'caso studio green city europea';
        win.doSearch();
      } catch (e) {}
    });

    return wrapper;
  },
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const RisultatiFormazione = {
  name: 'Risultati · Vista corsi',
  render: () => {
    const wrapper = templateStory({
      src: 'susdef-genui.html',
      label: 'Gen UI · Risultati formazione',
      brand: 'susdef',
      state: 'Query: "corso formazione webinar 2025"',
    });

    const iframe = wrapper.querySelector('iframe');
    iframe.addEventListener('load', () => {
      try {
        const win = iframe.contentWindow;
        win.document.getElementById('search-input').value = 'corso formazione webinar 2025';
        win.doSearch();
      } catch (e) {}
    });

    return wrapper;
  },
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({
    src: 'susdef-genui.html',
    label: 'Gen UI · Documenti',
    brand: 'susdef',
    state: 'Mobile',
  }),
  parameters: { viewport: { defaultViewport: 'mobile2' } },
};
