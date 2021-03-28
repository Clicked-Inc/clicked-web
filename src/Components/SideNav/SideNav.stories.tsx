import React from 'react';
import { Story } from '@storybook/react';
import SideNav from './SideNav';

export default {
  component: SideNav,
  title: 'SideNav',
};

const Template: Story = () => (
  <SideNav />
);
export const Default = Template.bind({});
