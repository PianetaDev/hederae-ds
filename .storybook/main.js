/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  // Serve the page-templates folder as static assets
  staticDirs: ['../docs'],
  docs: { autodocs: false },
};

export default config;
