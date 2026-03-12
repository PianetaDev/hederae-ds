import '../css/themes/susdef.css';
import '../css/themes/agesci.css';
import '../css/themes/rara.css';
import '../css/themes/corner-table.css';
import '../css/themes/pianeta-green.css';
import '../css/themes/costantini.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  globalTypes: {
    brand: {
      description: 'Brand attivo',
      defaultValue: 'susdef',
      toolbar: {
        title: '🎨 Brand',
        icon: 'paintbrush',
        items: [
          { value: 'susdef',          title: 'Susdef — Fondazione Sviluppo Sostenibile' },
          { value: 'agesci',          title: 'AGESCI — Scouts' },
          { value: 'pianeta-green',   title: 'Pianeta.green — Pianeta Studio' },
          { value: 'rara',            title: 'Rara' },
          { value: 'corner-table',    title: 'Corner Table' },
          { value: 'costantini',     title: 'Costantini — Studio di Restauro' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (storyFn, context) => {
      const brand = context.globals.brand || 'susdef';
      // Set data-brand on <html> so all CSS tokens activate
      document.documentElement.setAttribute('data-brand', brand);
      document.body.setAttribute('data-brand', brand);

      const wrapper = document.createElement('div');
      wrapper.setAttribute('data-brand', brand);
      wrapper.style.cssText = `
        background: var(--color-surface-page, #fff);
        color: var(--color-content-primary, #212121);
        min-height: 100vh;
        font-family: var(--font-body, system-ui, sans-serif);
      `;
      wrapper.innerHTML = '';
      const story = storyFn();
      if (typeof story === 'string') {
        wrapper.innerHTML = story;
      } else if (story instanceof HTMLElement) {
        wrapper.appendChild(story);
      } else {
        wrapper.innerHTML = String(story);
      }
      return wrapper;
    },
  ],

  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i, date: /date/i } },
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        desktop: { name: 'Desktop (1280)', styles: { width: '1280px', height: '900px' } },
        laptop:  { name: 'Laptop (1024)',  styles: { width: '1024px', height: '768px' } },
        tablet:  { name: 'Tablet (768)',   styles: { width: '768px',  height: '1024px' } },
        mobile:  { name: 'Mobile (390)',   styles: { width: '390px',  height: '844px' } },
      },
      defaultViewport: 'desktop',
    },
  },
};

export default preview;
