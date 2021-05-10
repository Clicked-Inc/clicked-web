import React from 'react';
import { Story } from '@storybook/react';
import Footer from './Footer';

export default {
  component: Footer,
  title: 'Footer',
};

const Template: Story = () => <Footer />;
export const Default = Template.bind({});
