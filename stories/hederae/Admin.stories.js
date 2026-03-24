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
| **T1** | EPOS ERIC, SUSDEF, Fondazioni complesse | 7+ (Documenti, Pubblicazioni, News, Eventi, Aree, Org, Pagine) | ✓ Pipeline AI | Bozza → Revisione → Pubblicato | Admin / Content Manager / Editor |
| **T2** | Fondazioni, NGO strutturate | 4–5 (Documenti, News, Settori, Formazione, Pagine) | Opzionale | Bozza → Pubblicato | Admin / Editor |
| **T3** | Associazioni, PMI | 3 (Pagine, News, Servizi) | — | Bozza → Pubblicato | Admin / Editor |
| **T4** | Piccole imprese, studi professionali | 2 (Pagine, News) | — | Bozza → Pubblicato | Unico utente |

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
  name: 'T1 · Editor Split View + AI',
  render: () => templateStory({ ...base, src: 'hederae-cms-split-editor.html', label: 'T1 · Split Editor', state: 'Editor' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: `
**Editor T1 — Split view: form a destra, preview live a sinistra. Smart e bidirezionale.**

Il "very smart" è tutto nell'interazione: form e preview sono sincronizzati in tempo reale,
e la connessione funziona in entrambe le direzioni.

- **Scrivi nel form** → la preview si aggiorna istantaneamente. Cambia il titolo, vedi il titolo cambiare nell'articolo.
- **Clicca sulla preview** → il form scrolla al campo corrispondente e lo evidenzia con un flash accent.
- **Focus su un campo** → il blocco corrispondente nella preview si illumina con un bordo accent, e la preview scrolla a mostrarlo.
- **Tab AI**: sommario generato, tag suggeriti, score qualità, azioni AI (Migliora / Traduci / Meta SEO / Abstract)
- **Tab Workflow**: tracker stati visivo, revisore assegnato, approvazione
- **View toggle**: Split / Form-only nella topbar
- **SEO collapsibile**: meta title e description con generazione AI
    `.trim() } },
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
    docs: { description: { story: 'Dashboard T4 · piccola impresa (demo: Studio Moretti): welcome card, widget performance + CO₂, stat contenuti, ultimi aggiornamenti. Stessa base Hederae DS, UX semplificata al massimo.' } },
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
  name: 'T4 · Editor split view',
  render: () => {
    const w = templateStory({ ...base, src: 'hederae-admin-t4.html', label: 'Admin T4 · Editor', state: 'Editor' });
    w.querySelector('iframe').addEventListener('load', () => {
      try { w.querySelector('iframe').contentWindow.showView('editor', null); } catch(e) {}
    });
    return w;
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: 'Editor T4 split view: preview live a sinistra, form semplice a destra. Nessun tab, nessuna complessità — il form si aggiorna in tempo reale.' } },
  },
};

export const T4_Impostazioni = {
  name: 'T4 · Impostazioni',
  render: () => {
    const w = templateStory({ ...base, src: 'hederae-admin-t4.html', label: 'Admin T4 · Impostazioni', state: 'Settings' });
    w.querySelector('iframe').addEventListener('load', () => {
      try { w.querySelector('iframe').contentWindow.showView('impostazioni', null); } catch(e) {}
    });
    return w;
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: 'Impostazioni T4: Cookie & Legal, Newsletter (Brevo/Mailchimp), Analytics + widget CO₂ mensile, e sezione MCP per connettere Claude direttamente al sito.' } },
  },
};

/* ─── CMS DASHBOARD ─── */

export const CMS_Dashboard = {
  name: '✦ CMS · Dashboard',
  render: () => templateStory({ ...base, src: 'hederae-cms-dashboard.html', label: 'CMS · Dashboard', state: 'Home' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: `
**Dashboard CMS — punto di accesso a tutti gli strumenti. Nav light, connessa al builder.**

Stile coerente con tutti gli altri template CMS: sidebar bianca, bordo 1px, verde brand come indicatore attivo.

- Stats row: 4 card bordo sottile (totali / pubblicati / bozze / revisione)
- Quick create: 4 tile → Pagina (→ Page Builder), News (→ Block Editor), Pattern (→ Pattern Editor), Globali
- Lista documenti recenti: hover rivela il bottone CTA corretto per tipo (Page Builder vs Editor)
- Click su riga → naviga allo strumento giusto
- Attività recente nella colonna destra
    `.trim() } },
  },
};

/* ─── CMS FLOW (Cornertable / Fabrizio) ─── */

export const CMS_PageEditor = {
  name: '✦ CMS · Page Editor',
  render: () => templateStory({ ...base, src: 'hederae-cms-page-editor.html', label: 'CMS · Page Editor', state: 'Editor' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: `
**Redesign del page editor di Fabrizio — problemi risolti:**

- Pattern Blocks con nome + thumbnail al posto di "Senza titolo"
- Progressive disclosure: SEO/Config in rail laterale, non inline
- Pattern picker drawer (slide-in) invece di bottoni esposti
- Status/Pubblica sempre visibili nel rail destro senza scroll
- Struttura pulita: Title → Layout → Add block
    `.trim() } },
  },
};

export const CMS_PatternEditor = {
  name: '✦ CMS · Pattern Editor (DS)',
  render: () => templateStory({ ...base, src: 'hederae-cms-pattern-editor.html', label: 'CMS · Pattern Editor', state: 'Canvas' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: `
**Nuovo strumento separato per il Design System — white theme intenzionale:**

- Canvas live preview al centro (browser chrome mockup)
- Fields panel a destra: layout selector, blocchi, metadata
- Viewport switcher (mobile/tablet/desktop) nella topbar
- Torna al CMS con un click — differenza visiva segnala "sei in modalità design"
- Click su colonna nel canvas = selezione + edit inline
    `.trim() } },
  },
};

export const CMS_GlobalsEditor = {
  name: '✦ CMS · Globals Editor',
  render: () => templateStory({ ...base, src: 'hederae-cms-globals-editor.html', label: 'CMS · Globals', state: 'Navigazione' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: `
**Globals riorganizzati in 3 categorie semantiche invece di 4 voci flat:**

- **Identità del sito**: Logo (chiaro/scuro), Favicon auto-resize, SEO globale
- **Navigazione**: Header (nav items drag&drop), Footer (copyright, link)
- **Comunicazione**: Email settings, Cookie banner, Tracking scripts con toggle
    `.trim() } },
  },
};

/* ─── WYSIWYG BUILDER ─── */

export const CMS_PageBuilder = {
  name: '✦ CMS · Page Builder (WYSIWYG)',
  render: () => templateStory({ ...base, src: 'hederae-cms-page-builder.html', label: 'CMS · Page Builder', state: 'Builder' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: `
**Page Builder WYSIWYG — vedi la pagina mentre la costruisci.**

Shift concettuale rispetto al form editor: la canvas mostra le sezioni reali impilate,
come appariranno sul sito. Nessun "Preview" separato — quello che vedi è quello che ottieni.

- **Palette sinistra**: componenti drag-and-droppabili (Hero, Split, Features, CTA, Testo, Galleria, Form)
- **Canvas centrale**: sezioni reali con hover controls (modifica, muovi, duplica, elimina)
- **Rail destra**: Struttura (layer list) / Proprietà (field per sezione selezionata) / Pubblica
- **Add zone**: drop zone tra sezioni + bottone in fondo per aggiungere nuovi blocchi
- **Component drawer**: modal con grid di sezioni disponibili + search
    `.trim() } },
  },
};

export const CMS_BlockEditor = {
  name: '✦ CMS · Block Editor (Inline)',
  render: () => templateStory({ ...base, src: 'hederae-cms-block-editor.html', label: 'CMS · Block Editor', state: 'Editing' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: `
**Editor inline WYSIWYG — sei dentro il blocco, editi direttamente in canvas.**

Quando nel Page Builder clicchi "✏ Modifica" su una sezione, si apre questo editor.
Il contesto della pagina rimane visibile ma dimmed — sai esattamente dove sei.

- **Canvas**: il blocco attivo (Hero) è evidenziato con bordo accent. Le sezioni sotto/sopra sono dimmate e non cliccabili.
- **Regioni editabili**: hover mostra bordo tratteggiato. Click seleziona e mostra toolbar floating.
- **Toolbar rich text**: si posiziona sopra il campo attivo (Bold, Italic, Link, H1/H2, colore testo)
- **Field chips**: ogni campo editabile mostra il suo nome (label chip verde) quando attivo
- **Rail destra**: lista campi del blocco con stato (OK / Vuoto) + editor testo sync col canvas + Stile + Cronologia
- **Back**: ← Pagina builder riporta al Page Builder con le modifiche salvate
    `.trim() } },
  },
};

/* ─── COLLECTION LIST ─── */

export const CMS_CollectionList = {
  name: '✦ CMS · Lista Collezione (Pagine)',
  render: () => templateStory({ ...base, src: 'hederae-cms-collection-list.html', label: 'CMS · Pagine', state: 'Lista' }),
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: { description: { story: `
**Lista collezione — step intermedio tra Dashboard e Editor.**

Lo schermo mancante nel flusso: Dashboard → **Lista** → Editor.
Mostra tutti i documenti di una collezione (Pagine) con filtri, selezione e azioni inline.

- **Topbar**: breadcrumb Dashboard › Pagine + ricerca live + bottone "Nuova pagina"
- **Filter tabs**: Tutti / Pubblicati / Bozze / In revisione con contatori
- **Tabella**: checkbox multipla, titolo + slug, stato badge, avatar autore, data modifica
- **Hover row**: rivela bottoni "Modifica" (→ Page Builder) e "⋯" contesto
- **Bulk select**: selezionando righe appare la barra azioni (Duplica / Pubblica / Elimina)
- **Pagination**: in fondo
    `.trim() } },
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
