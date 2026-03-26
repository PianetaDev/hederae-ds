/**
 * EPOS ERIC · Sito Pubblico
 * ─────────────────────────────────
 * Pagine frontend pubbliche del sito EPOS ERIC.
 */
import { templateStory } from '../_template.js';
const base = { brand: 'epos' };

export default {
  title: 'EPOS ERIC / Sito Web',
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'desktop' } },
};

export const Home = {
  name: '🏠 Homepage',
  render: () => templateStory({ ...base, src: 'epos-home.html', label: 'EPOS ERIC · Home' }),
  parameters: {
    docs: { description: { story: 'Homepage pubblica EPOS ERIC — hero, sezioni tematiche, news, partner.' } },
  },
};

export const ThematicCore = {
  name: '🔬 Thematic Core',
  render: () => templateStory({ ...base, src: 'epos-thematic.html', label: 'EPOS ERIC · Thematic Core' }),
  parameters: {
    docs: { description: { story: 'Pagina dettaglio Thematic Core Service (TCS) — tab, documenti, data portal.' } },
  },
};
