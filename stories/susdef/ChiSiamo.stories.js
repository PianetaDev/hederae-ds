import { templateStory } from '../_template.js';

export default {
  title: 'Sito Susdef/Chi siamo',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Pagina istituzionale "Chi siamo" — Fondazione Sviluppo Sostenibile.**

Riproduce la struttura di [fondazionesvilupposostenibile.org/chi-siamo](https://www.fondazionesvilupposostenibile.org/chi-siamo/)
con i token SUSDEF e il sistema tipografico IBM Plex Serif/Sans/Mono.

### Sezioni
- **Hero** — headline, claim e 4 stats chiave (anni, soci, settori, esperti)
- **Page nav** — sticky anchor bar con highlight attivo via IntersectionObserver
- **La Mission** — testo fondativo + 4 value pillars
- **Pull quote** — citazione dark su accento giallo
- **Il Presidente** — layout 2-col: avatar + bio completa (Edo Ronchi)
- **Comitato di Presidenza** — griglia card 4 colonne con expertise tag
- **Il Consiglio Direttivo** — lista con iniziali + ruolo
- **Il Direttore** — layout 2-col (Francesco Ferrante)
- **Il Team** — griglia 8 card ricercatori/responsabili
- **Comitato Tecnico Scientifico** — intro card + griglia 9 esperti
- **Soci Imprese** — griglia logo 5 colonne (14 + CTA "+190")
- **Soci Esperti** — griglia expert card
- **Partnership & Membership** — 3 card internazionali
- **Statuto & Bilancio** — 4 document download card
- **CTA band** — "Diventa socio" call to action
        `.trim(),
      },
    },
  },
};

const base = { src: 'susdef-chi-siamo.html', brand: 'susdef' };

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ ...base, label: 'Chi siamo', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const Tablet = {
  name: 'Tablet',
  render: () => templateStory({ ...base, label: 'Chi siamo', state: 'Tablet' }),
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Mobile = {
  name: 'Mobile',
  render: () => templateStory({ ...base, label: 'Chi siamo', state: 'Mobile' }),
  parameters: { viewport: { defaultViewport: 'mobile' } },
};

// ─── Jump stories: load page scrolled to specific section ───

function jumpStory ({ section, label, state }) {
  const wrapper = templateStory({ ...base, label, state });
  const iframe  = wrapper.querySelector('iframe');
  iframe.addEventListener('load', () => {
    try {
      const win = iframe.contentWindow;
      const el  = win.document.getElementById(section);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'instant' }), 200);
    } catch (e) { /* cross-origin guard */ }
  });
  return wrapper;
}

export const SezioneMission = {
  name: 'Sezione · La Mission',
  render: () => jumpStory({ section: 'missione', label: 'Chi siamo — Mission', state: 'Jump' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const SezionePresidente = {
  name: 'Sezione · Il Presidente',
  render: () => jumpStory({ section: 'presidente', label: 'Chi siamo — Presidente', state: 'Jump' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const SezioneTeam = {
  name: 'Sezione · Il Team',
  render: () => jumpStory({ section: 'team', label: 'Chi siamo — Team', state: 'Jump' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const SezioneSoci = {
  name: 'Sezione · Soci Imprese',
  render: () => jumpStory({ section: 'soci-imprese', label: 'Chi siamo — Soci', state: 'Jump' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const SezioneDocumenti = {
  name: 'Sezione · Statuto &amp; Bilancio',
  render: () => jumpStory({ section: 'documenti', label: 'Chi siamo — Documenti', state: 'Jump' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
