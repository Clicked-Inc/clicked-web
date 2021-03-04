import React from 'react';
import { Story } from '@storybook/react';
import SideBar from './SideBar';

export default {
  component: SideBar,
  title: 'SideBar',
};

const Template: Story = () => (
  <SideBar />
);
export const Default = Template.bind({});

