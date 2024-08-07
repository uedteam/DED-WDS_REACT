import '@style/globals.scss';
import { Preview } from '@storybook/react';

/* snipped for brevity */

const preview: Preview = {
  initialGlobals: {
    styles: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
      },
    },
  },
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
