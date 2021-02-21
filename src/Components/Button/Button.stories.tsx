import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Button' };
