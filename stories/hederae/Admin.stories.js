import { templateStory } from '../_template.js';

export default {
  title: 'Hederae Admin/CMS Backend',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Hederae Admin — Backend CMS scalabile per tier T1→T4.**

Sistema di amministrazione contenuti con UX progettata per ridurre la complessità
percepita in base alle esigenze reali del cliente. Stessa base visiva (Hederae DS),
interfaccia che si semplifica scendendo di tier.

### Architettura tier

| Tier | Cliente tipo | Collezioni | AI | Workflow | Ruoli |
|---|---|---|---|---|---|
| **T1** | EPOS ERIC, Enti di ricerca | 7+ (Documenti, Pubblicazioni, News, Eventi, TCS, Org, Pagine) | ✓ Pipeline AI | Bozza → Revisione → Pubblicato | Admin / Content Manager / Editor |
| **T2** | SUSDEF, Fondazioni, NGO | 4–5 (Documenti, News, Settori, Formazione, Pagine) | Opzionale | Bozza → Pubblicato | Admin / Editor |
| **T3** | Associazioni, PMI | 3 (Pagine, News, Servizi) | — | Bozza → Pubblicato | Admin / Editor |
| **T4** | Piccole imprese, studi | 2 (Pagine, News) | — | Bozza → Pubblicato | Unico utente |

### Viste disponibili (interattive)
Ogni story mostra un admin interattivo con sidebar nav cliccabile:
- **Dashboard** — stats, attività recente, AI queue (T1) o welcome card (T4)
- **Lista collezione** — tabella con filtri, stato, azioni inline
- **Editor** — form con RTE, upload, workflow status, AI sidebar (solo T1)
- **Media Library** — griglia file (solo T1)
        `.trim(),
      },
    },
  },
};

const base = { brand: 'susdef' };

/* ─── T1 ─── */
export const T1_Dashboard = {
  name: 'T1 · Dashboard (EPOS)',
  render: () => templateStory({ ...base, src: 'hederae-admin-t1.html', label: 'Admin T1 · Dashboard', state: 'Dashboard' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: 'Vista dashboard T1: 4 stat cards, activity feed, AI pipeline queue, quick actions.' } },
  },
};

export const T1_ListaDocumenti = {
  name: 'T1 · Lista Documenti',
  render: () => {
    const w = templateStory({ ...base, src: 'hederae-admin-t1.html', label: 'Admin T1 · Documenti', state: 'Lista' });
    w.querySelector('iframe').addEventListener('load', () => {
      try { w.querySelector('iframe').contentWindow.showView('list', null); } catch(e) {}
    });
    return w;
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: 'Lista Documenti con stati (Pubblicato / In revisione / Bozza), badge AI, azioni inline.' } },
  },
};

export const T1_Editor = {
  name: 'T1 · Editor con AI sidebar',
  render: () => {
    const w = templateStory({ ...base, src: 'hederae-admin-t1.html', label: 'Admin T1 · Editor', state: 'Editor' });
    w.querySelector('iframe').addEventListener('load', () => {
      try { w.querySelector('iframe').contentWindow.showView('editor', null); } catch(e) {}
    });
    return w;
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: 'Editor con form principale + AI sidebar: sommario generato, tag suggeriti, azioni AI. Workflow a 3 stati.' } },
  },
};

export const T1_Media = {
  name: 'T1 · Media Library',
  render: () => {
    const w = templateStory({ ...base, src: 'hederae-admin-t1.html', label: 'Admin T1 · Media', state: 'Media' });
    w.querySelector('iframe').addEventListener('load', () => {
      try { w.querySelector('iframe').contentWindow.showView('media', null); } catch(e) {}
    });
    return w;
  },
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

/* ─── T4 ─── */
export const T4_Dashboard = {
  name: 'T4 · Dashboard (Base)',
  render: () => templateStory({ ...base, src: 'hederae-admin-t4.html', label: 'Admin T4 · Dashboard', state: 'Dashboard' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: 'Dashboard T4 semplificata: welcome card + 3 stat + ultimi contenuti. Nessuna complessità superflua.' } },
  },
};

export const T4_Pagine = {
  name: 'T4 · Lista Pagine',
  render: () => {
    const w = templateStory({ ...base, src: 'hederae-admin-t4.html', label: 'Admin T4 · Pagine', state: 'Lista' });
    w.querySelector('iframe').addEventListener('load', () => {
      try { w.querySelector('iframe').contentWindow.showView('pagine', null); } catch(e) {}
    });
    return w;
  },
  parameters: { viewport: { defaultViewport: 'desktop' } },
};

export const T4_Editor = {
  name: 'T4 · Editor semplice',
  render: () => {
    const w = templateStory({ ...base, src: 'hederae-admin-t4.html', label: 'Admin T4 · Editor', state: 'Editor' });
    w.querySelector('iframe').addEventListener('load', () => {
      try { w.querySelector('iframe').contentWindow.showView('editor', null); } catch(e) {}
    });
    return w;
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: 'Editor T4: titolo, rich text, immagine copertina, stato. Nessuna AI, nessun workflow complesso.' } },
  },
};

/* ─── CONFRONTO ─── */
export const Confronto_T1_vs_T4 = {
  name: '↔ Confronto T1 vs T4',
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;height:100vh;gap:0;';

    const labelStyle = 'position:absolute;top:8px;left:50%;transform:translateX(-50%);font-family:monospace;font-size:11px;font-weight:600;background:#013E39;color:#D8EC28;padding:3px 10px;border-radius:99px;z-index:10;white-space:nowrap;';

    ['t1','t4'].forEach((tier, i) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'position:relative;border-right:' + (i===0?'1px solid #ddd':'none');
      const label = document.createElement('div');
      label.style.cssText = labelStyle;
      label.textContent = tier === 't1' ? 'T1 · EPOS (Enterprise)' : 'T4 · Base (Semplice)';
      const iframe = document.createElement('iframe');
      iframe.src = 'hederae-admin-' + tier + '.html';
      iframe.style.cssText = 'width:100%;height:100%;border:none;';
      wrap.appendChild(label);
      wrap.appendChild(iframe);
      container.appendChild(wrap);
    });

    return container;
  },
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: 'Confronto side-by-side: T1 (Enterprise, EPOS) vs T4 (Base, piccola impresa). Stessa base Hederae DS, complessità radicalmente diversa.' } },
  },
};
