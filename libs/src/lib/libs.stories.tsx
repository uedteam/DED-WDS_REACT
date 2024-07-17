import type { Meta, StoryObj } from '@storybook/react';
import { Libs } from './libs';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Libs> = {
  component: Libs,
  title: 'Libs',
};
export default meta;
type Story = StoryObj<typeof Libs>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Libs!/gi)).toBeTruthy();
  },
};
