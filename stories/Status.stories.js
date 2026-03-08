export default {
  title: '📋 Hederae / Status & Log',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Dashboard di stato del progetto: metriche per profilo, brand coverage, log attività, pivot tracker, istruzioni team. Da aggiornare ad ogni sprint.' } },
  },
};

export const Dashboard = {
  name: 'Status Dashboard',
  render: () => `<iframe src="./HEDERAE-STATUS.html" style="width:100%;height:100vh;border:none;" title="Hederae DS — Status & Log"></iframe>`,
};
