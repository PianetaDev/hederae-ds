import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.green/Area Clienti — Dashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Dashboard Area Clienti (05) — Profilo B/C.

**Struttura:** sidebar dark (232px) + main area con topbar sticky.

**Sezioni:**
- Welcome bar con piano e headline sostenibilità
- Stats row 4-col: siti attivi, score GreenMeter medio, CO₂ evitata, storage
- Quick actions: CMS, GreenMeter report, backup, ticket
- Sites grid 2-col: ogni card mostra stato, grade A+/B/C, metriche CO₂, star ratings Carbon/Perf/Hosting, dati Analytics (Matomo), bottoni CMS + GreenMeter + Analytics
- Bottom grid: grafico visite 30gg (Matomo), riepilogo GreenMeter aggregato, activity log

**Dati reali GreenMeter** (da pianeta.green/rarafactory.com):
  - Score: A+ · 0.018g CO₂/pagina · 95% meglio della media · 41kg CO₂ evitata/anno
  - Rating Carbon ★★★★★ · Performance ★★★★☆ · Green Hosting ★★★★★

**Integrazioni previste:** Matomo Analytics API, GreenMeter API (pianeta.green/{domain})`,
      },
    },
  },
};

export const Default = {
  name: 'Dashboard — 3 siti',
  render: () => templateStory({
    src: 'area-clienti-dashboard.html',
    label: 'Area Clienti — Dashboard',
    brand: 'pianeta-green',
  }),
};
