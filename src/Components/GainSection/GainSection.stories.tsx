import React from 'react';
import { Story } from '@storybook/react';
import GainSection from './GainSection';

export default {
  component: GainSection,
  title: 'GainSection',
};

const Template: Story = () => <GainSection />;
export const Default = Template.bind({});
