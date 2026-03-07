import '../css/preview.css' // imports all brand themes
import { withThemeByDataAttribute } from '@storybook/addon-themes'

/** @type { import('@storybook/vue3').Preview } */
const preview = {

  parameters: {
    backgrounds: { disable: true }, // we use brand themes instead

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      theme: {
        base: 'dark',
        brandTitle: 'Hederae DS',
        brandTarget: '_self',
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        'Rara':         'rara',
        'Corner Table': 'corner-table',
        'Susdef':       'susdef',
        'AGESCI':       'agesci',
      },
      defaultTheme: 'Rara',
      attributeName: 'data-brand',
    }),
  ],
}

export default preview
