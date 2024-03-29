import React from 'react';
import { Story } from '@storybook/react';
import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

const Template: Story = () => <Header />;
export const Default = Template.bind({});
