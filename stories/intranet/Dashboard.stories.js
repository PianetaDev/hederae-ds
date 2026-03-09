import { templateStory } from '../_template.js';

export default {
  title: 'Intranet Sisal/Dashboard KPI',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Dashboard Market Analysis con KPI widget (Ricavi, Utenti, Conversione, NPS), grafici CSS-only (line chart e donut), tabella dati ordinabile, top performers e alert. Componenti: KPI Widget, Data Table Sortable, Chart.' } },
  },
};

export const Desktop = {
  name: 'Desktop',
  render: () => templateStory({ src: 'intranet-dashboard.html', label: 'Dashboard KPI', brand: 'sisal', state: 'Desktop' }),
  parameters: { viewport: { defaultViewport: 'desktop' } },
};
