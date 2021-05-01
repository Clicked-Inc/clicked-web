import React from 'react';
import { Story } from '@storybook/react';
import PrimaryButton from './PrimaryButton';

export default {
  component: PrimaryButton,
  title: 'PrimaryButton',
};

const Template1: Story = () => <PrimaryButton variant="large" text="Primary" />;
export const LargePrimaryButton = Template1.bind({});

const Template2: Story = () => <PrimaryButton variant="small" text="Primary" />;
export const SmallPrimaryButton = Template2.bind({});
