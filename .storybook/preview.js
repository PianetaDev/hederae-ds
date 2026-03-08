/** @type { import('@storybook/html').Preview } */
const preview = {
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
