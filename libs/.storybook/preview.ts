import '../src/style/globals.scss';

import { Preview } from '@storybook/react';

/* snipped for brevity */

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: '',
        order: ['Components', 'Intro'],
        locales: '',
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
